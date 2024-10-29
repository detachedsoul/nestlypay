"use client";

import Link from "next/link";
import Alert from "@/components/Alert";
import zodValidator from "@/lib/zodValidator";
import formHasErrors from "@/lib/formHasErrors";
import isFormFieldsComplete from "@/lib/isFormFieldsComplete";
import useForm from "@/hooks/useForm";
import useAuth from "@/hooks/useAuth";
import { createUserAccount } from "@/lib/userAction";
import { useFormStatus } from "react-dom";
import { useState, useEffect } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";
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

    const { setAuthInfo, authInfo } = useAuth();

    const [formValues, setFormValues] = useState({
        fullName: "",
        email: "",
        password: ""
    });

    const [passwordIsVisible, setPasswordIsVisible] = useState(false);

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

				permanentRedirect("/user");
			}, 2000);

			return () => clearTimeout(timer);
		}
	}, [state, setAuthInfo, formValues]);

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
					Tell us a bit about you. Provide your legal name, and work mail.
				</p>

				<div className="space-y-8 mt-8 sm:space-y-0 sm:grid sm:gap-8 sm:grid-cols-2 lg:grid-cols-1 lg:block lg:space-y-8">
					<label
						className="block"
						htmlFor="fullName"
					>
						<input
							className="input"
							type="text"
							placeholder="Full Name"
							name="fullName"
							value={formValues.fullName}
							onBlur={handleBlur}
							onChange={handleChange}
						/>

						{errors.fullName && (
							<p className="text-brand-red mt-2">
								{errors.fullName}
							</p>
						)}
					</label>

					<label
						className="block"
						htmlFor="email"
					>
						<input
							className="input"
							type="email"
							placeholder="Email Address"
							name="email"
							value={formValues.email}
							onBlur={handleBlur}
							onChange={handleChange}
						/>

						{errors.email && (
							<p className="text-brand-red mt-2">
								{errors.email}
							</p>
						)}
					</label>

					<label
						className="block relative"
						htmlFor="password"
					>
						<input
							className="input pr-16"
							type={passwordIsVisible ? "text" : "password"}
							placeholder="Password"
							name="password"
							value={formValues.password}
							onBlur={handleBlur}
							onChange={handleChange}
						/>

						<button
							className="right-6 top-4 absolute"
							type="button"
							aria-label="Toggle password visibility"
							onClick={() =>
								setPasswordIsVisible(!passwordIsVisible)
							}
						>
							{passwordIsVisible ? (
								<EyeIcon strokeWidth={1} />
							) : (
								<EyeOffIcon strokeWidth={1} />
							)}
						</button>

						{errors.password && (
							<p className="text-brand-red mt-2">
								{errors.password}
							</p>
						)}
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
