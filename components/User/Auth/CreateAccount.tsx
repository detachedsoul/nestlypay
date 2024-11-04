"use client";

import Link from "next/link";
import Alert from "@/components/Alert";
import zodValidator from "@/lib/zodValidator";
import formHasErrors from "@/lib/formHasErrors";
import isFormFieldsComplete from "@/lib/isFormFieldsComplete";
import useForm from "@/hooks/useForm";
import useAuth from "@/hooks/useAuth";
import useUserDetails from "@/hooks/useUserDetails";
import FormInput from "@/components/FormInput";
import { createUserAccount } from "@/lib/userAction";
import { useFormStatus } from "react-dom";
import { useState, useEffect } from "react";
import { z } from "zod";
import { permanentRedirect } from "next/navigation";

const schema = z.object({
    fullName: z.string({
        message: "Please enter your full name"
    }).min(2, "Full name must be at least 2 characters").trim(),
	email: z.string().email("Invalid email address"),
	password: z.string().min(1, "Password is required"),
});

type FormValues = {
	password: string;
	email: string;
	fullName: string;
};

const CreateAccount = () => {
    const { state, formAction } = useForm(createUserAccount, true);

    const { setAuthInfo } = useAuth();

    const { setUserDetails } = useUserDetails();

    const [formValues, setFormValues] = useState({
        fullName: "",
        email: "",
        password: ""
    });


    const [errors, setErrors] = useState<Partial<FormValues>>({
		fullName: "",
		password: "",
		email: "",
	});

	const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		const { errors, formValue } = zodValidator({
			name: name as keyof FormValues,
			value: value,
			formValues: formValues,
			schema: schema,
		});

		setFormValues(formValue);
		setErrors(errors);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		setFormValues((prevValues) => ({
			...prevValues,
			[name]: value,
		}));

		const { errors } = zodValidator({
			name: name as keyof FormValues,
			value: value,
			formValues: formValues,
			schema: schema,
		});

		setErrors(errors);
	};

    useEffect(() => {
		if (state.status === "success") {
			const timer = setTimeout(() => {
				setAuthInfo({
					sessionID: state.data.sessionID,
					userID: state.data.id,
					name: formValues.fullName,
					email: formValues.email,
				});

				setUserDetails(state.data);

				permanentRedirect("/user");
			}, 2000);

			return () => clearTimeout(timer);
		}
	}, [state, setAuthInfo, formValues, setUserDetails]);

    return (
		<>
			<form
				className="w-full"
				action={formAction}
			>
				<h1 className="text-black/100 font-medium text-2xl/10">
					Create an Account
				</h1>

				<p className="mt-1">
					Tell us a bit about you. Provide your legal name, and work
					mail.
				</p>

				<div className="space-y-8 mt-8 sm:space-y-0 sm:grid sm:gap-8 sm:grid-cols-2 lg:grid-cols-1 lg:block lg:space-y-8">
					<label
						className="block"
						htmlFor="fullName"
					>
						<FormInput
							type="text"
							placeholder="Full Name"
							name="fullName"
							value={formValues.fullName}
							onBlur={handleBlur}
							onChange={handleChange}
							error={errors.fullName}
						/>
					</label>

					<label
						className="block"
						htmlFor="email"
					>
						<FormInput
							type="email"
							placeholder="Email Address"
							name="email"
							value={formValues.email}
							onBlur={handleBlur}
							onChange={handleChange}
							error={errors.email}
						/>
					</label>

					<label
						className="block relative"
						htmlFor="password"
					>
						<FormInput
							type="password"
							placeholder="Password"
							name="password"
							value={formValues.password}
							onChange={handleChange}
							onBlur={handleChange}
							className="pr-16"
							error={errors.password}
						/>
					</label>

					<SubmitButton
						errors={errors}
						formValues={formValues}
					/>

					<p className="font-medium text-black/100 sm:col-span-2">
						Already have an account?{" "}
						<Link
							className="text-brand-blue underline-offset-8 hover:underline hover:decoration-wavy"
							href="/auth/personal/sign-in"
						>
							Sign In
						</Link>{" "}
						instead
					</p>
				</div>
			</form>

			<Alert
				statusType={state.status}
				message={state.message}
			/>
		</>
	);
};

export const SubmitButton = ({
	errors,
	formValues,
}: {
	errors: Partial<FormValues>;
	formValues: FormValues;
}) => {
	const { pending } = useFormStatus();

	const hasErrors = formHasErrors(errors);
	const isFormComplete = isFormFieldsComplete(formValues);

	return (
		<button
			className="submit-btn sm:col-span-2"
			type="submit"
			disabled={hasErrors || !isFormComplete || pending}
		>
			{pending ? "Creating account, please hold on..." : "Create Now"}
		</button>
	);
};

export default CreateAccount;
