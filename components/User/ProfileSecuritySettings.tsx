"use client";

import Alert from "@/components/Alert";
import useUpdateUserDetails from "@/hooks/useUpdateUserDetails";
import zodValidator from "@/lib/zodValidator";
import formHasErrors from "@/lib/formHasErrors";
import isFormFieldsComplete from "@/lib/isFormFieldsComplete";
import FormInput from "@/components/FormInput";
import { useFormStatus } from "react-dom";
import { useState } from "react";
import { z } from "zod";

const schema = z
	.object({
		password: z.string().min(1, "Password must have at least 1 character"),
		confirmPassword: z
			.string()
			.min(1, "Password must have at least 1 character"),
	})
	.refine(
		(data) => {
			return data.password === data.confirmPassword;
		},
		{
			message: "Passwords don't match",
			path: ["confirmPassword"],
		},
);

type FormValues = {
	password: string;
	confirmPassword: string;
};

const ProfileSecuritySettings = (): JSX.Element => {
	const { updateDetails, resetStatus } = useUpdateUserDetails();

	const [formValues, setFormValues] = useState({
		password: "",
		confirmPassword: "",
	});

	const [errors, setErrors] = useState<Partial<FormValues>>({
		password: "",
		confirmPassword: "",
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		if (value === "") {
			setFormValues((prevValues) => {
				setErrors((prevErrors) => ({
					...prevErrors,
					[name]: "",
				}));

				return {
					...prevValues,
					[name]: value,
				};
			});

			return;
		}

		setFormValues((prevValues) => {
			const { errors } = zodValidator({
				name: name as keyof FormValues,
				value: value,
				formValues: formValues,
				schema: schema,
			});

			setErrors(errors);

			return {
				...prevValues,
				[name]: value,
			};
		});
    };

    const handleUpdate = async () => {
        await updateDetails({
            password: formValues.password
        });
	};

	return (
		<>
			<form
				className="lg:w-3/5 xl:w-1/2 lg:mx-auto settings-card"
				action={handleUpdate}
			>
				<h2 className="text-black/100 font-medium text-2xl/10">
					Security Setup
				</h2>

				<p className="mt-1">
					Avoid using easily guessable password, and make sure it is
					easy to remember.
				</p>

				<div className="space-y-4 mt-8">
					<label
						className="block relative"
						htmlFor="newPassword"
					>
						<FormInput
							name="password"
							value={formValues.password}
							type="password"
							onChange={handleChange}
							placeholder="New Password"
						/>
					</label>

					<label
						className="block relative"
						htmlFor="confirmPassword"
					>
						<FormInput
							name="confirmPassword"
							value={formValues.confirmPassword}
							type="password"
							onChange={handleChange}
							placeholder="Confirm Password"
							error={errors.confirmPassword}
						/>
					</label>

					<SubmitButton
						errors={errors}
						formValues={formValues}
					/>
				</div>
			</form>

			<Alert
				statusType={resetStatus.status}
				message={resetStatus.message}
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
			{pending ? "Updating profile..." : "Update"}
		</button>
	);
};

export default ProfileSecuritySettings;
