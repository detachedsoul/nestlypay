"use client";

import useBusinessForm from "@/hooks/useBusinessForm";
import { useFormStatus } from "react-dom";
import { useState } from "react";
import { z } from "zod";

const schema = z.object({
	firstName: z.string().min(1, "First name is required"),
	lastName: z.string().min(1, "Last name is required"),
	email: z.string().email("Invalid email address"),
});

type FormValues = {
	firstName: string;
	lastName: string;
	email: string;
};

const PersonalInfoForm = (): JSX.Element => {
    const { pending } = useFormStatus();

    const { businessInfo, setBusinessInfo } = useBusinessForm();

	const [formValues, setFormValues] = useState<FormValues>({
		firstName: "",
		lastName: "",
		email: "",
	});

	const [errors, setErrors] = useState<Partial<FormValues>>({
		firstName: "",
		lastName: "",
		email: "",
	});

	const zodValidation = (name: keyof typeof formValues, value: string) => {
		try {
			schema.shape[name].parse(value);

			setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));

			setBusinessInfo({
				...businessInfo,
				[name]: value,
			});
		} catch (err) {
			if (err instanceof z.ZodError) {
				const fieldError = err.errors[0]?.message;

				setErrors((prevErrors) => ({
					...prevErrors,
					[name]: fieldError,
				}));

                setBusinessInfo({
					...businessInfo,
					[name]: "",
				});
			}
		}
    };

	const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		zodValidation(name as keyof FormValues, value);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		setFormValues((prevValues) => ({
			...prevValues,
			[name]: value,
        }));

		zodValidation(name as keyof FormValues, value);
	};

    const hasErrors = Object.values(errors).some((error) => error !== "");

	const isFormComplete = Object.values(formValues).every(
		(value) => value !== "",
    );

	return (
		<>
			<label
				className="block"
				htmlFor="firstName"
			>
				<input
					className="input"
					type="text"
					placeholder="First Name"
					name="firstName"
					value={formValues.firstName}
					onChange={handleChange}
					onBlur={handleBlur}
				/>

				{errors.firstName && (
					<p className="text-brand-red mt-2">{errors.firstName}</p>
				)}
			</label>

			<label
				className="block"
				htmlFor="lastName"
			>
				<input
					className="input"
					type="text"
					placeholder="Last Name"
					name="lastName"
					value={formValues.lastName}
					onChange={handleChange}
					onBlur={handleBlur}
				/>

				{errors.lastName && (
					<p className="text-brand-red mt-2">{errors.lastName}</p>
				)}
			</label>

			<label
				className="block sm:col-span-2"
				htmlFor="email"
			>
				<input
					className="input"
					type="email"
					placeholder="Email Address"
					name="email"
					value={formValues.email}
					onChange={handleChange}
					onBlur={handleBlur}
				/>

				{errors.email && (
					<p className="text-brand-red mt-2">{errors.email}</p>
				)}
			</label>

			<button
				className="submit-btn sm:col-span-2"
				type="submit"
				disabled={hasErrors || !isFormComplete || pending}
			>
				{pending ? "Verifying email, please wait..." : "Continue"}
			</button>
		</>
	);
};

export default PersonalInfoForm;
