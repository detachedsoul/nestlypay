"use client";

import useBusinessForm from "@/hooks/useBusinessForm";
import { useFormStatus } from "react-dom";
import { useState } from "react";
import { z } from "zod";

const schema = z.object({
	companyName: z.string().min(1, "Company name is required"),
	companyEmail: z.string().email("Invalid email address"),
	address: z.string().min(1, "Company address is required"),
	country: z.string().min(1, "Country is required"),
	city: z.string().min(1, "City is required"),
	postalCode: z.string().min(1, "Postal code is required"),
	state: z.string().min(1, "State is required"),
	website: z.string().url().optional().nullable()
});

type FormValues = {
	companyName: string;
	companyEmail: string;
	address: string;
	country: string;
	city: string;
	postalCode: string;
	state: string;
	website: string;
};

const BusinessInfoForm = () => {
    const { pending } = useFormStatus();

	const { businessInfo, setBusinessInfo } = useBusinessForm();

	const [formValues, setFormValues] = useState<FormValues>({
		companyName: "",
		companyEmail: "",
		address: "",
		country: "",
		city: "",
		postalCode: "",
        state: "",
        website: "",
	});

	const [errors, setErrors] = useState<Partial<FormValues>>({
		companyName: "",
		companyEmail: "",
		address: "",
		country: "",
		city: "",
		postalCode: "",
        state: "",
        website: "",
	});

	const zodValidation = (name: keyof typeof formValues, value: string) => {
		try {
			schema.shape[name].parse(value);

			setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));

			setBusinessInfo({
				...businessInfo,
				[name]: value
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

	const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

		zodValidation(name as keyof FormValues, value);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const { name, value } = e.target;

		setFormValues((prevValues) => ({
			...prevValues,
			[name]: value,
		}));

		zodValidation(name as keyof FormValues, value);
	};

	const hasErrors = Object.values(errors).some((error) => error !== "");

	const isFormComplete = Object.values([
		formValues.companyName,
		formValues.companyEmail,
		formValues.address,
		formValues.country,
		formValues.city,
		formValues.postalCode,
		formValues.state,
	]).every((value) => value !== "");

    return (
		<>
			<label
				className="block"
				htmlFor="companyName"
			>
				<input
					className="input"
					type="text"
					placeholder="Company Name"
					name="companyName"
					value={formValues.companyName}
					onChange={handleChange}
					onBlur={handleBlur}
				/>

				{errors.companyName && (
					<p className="text-brand-red mt-2">{errors.companyName}</p>
				)}
			</label>

			<label
				className="block"
				htmlFor="companyEmail"
			>
				<input
					className="input"
					type="email"
					placeholder="Company Email"
					name="companyEmail"
					value={formValues.companyEmail}
					onChange={handleChange}
					onBlur={handleBlur}
				/>

				{errors.companyEmail && (
					<p className="text-brand-red mt-2">{errors.companyEmail}</p>
				)}
			</label>

			<label
				className="block sm:col-span-2"
				htmlFor="address"
			>
				<input
					className="input"
					type="text"
					placeholder="Address"
					name="address"
					value={formValues.address}
					onChange={handleChange}
					onBlur={handleBlur}
				/>

				{errors.address && (
					<p className="text-brand-red mt-2">{errors.address}</p>
				)}
			</label>

			<div className="grid gap-8 sm:col-span-2 sm:grid-cols-2">
				<label
					className="block"
					htmlFor="city"
				>
					<input
						className="input"
						type="text"
						placeholder="City"
						name="city"
						value={formValues.city}
						onChange={handleChange}
						onBlur={handleBlur}
					/>

					{errors.city && (
						<p className="text-brand-red mt-2">{errors.city}</p>
					)}
				</label>

				<label
					className="block"
					htmlFor="country"
				>
					<select
						className="input-select"
						name="country"
						id="country"
						title="Select country"
						value={formValues.country}
						onChange={handleChange}
						onBlur={handleBlur}
					>
						<option className="text-[rgba(151,_151,_151,_1)]">
							Country
						</option>

						<option value="USA">USA</option>

						<option value="Canada">Canada</option>
					</select>

					{errors.country && (
						<p className="text-brand-red mt-2">{errors.country}</p>
					)}
				</label>
			</div>

			<div className="grid gap-8 sm:col-span-2 sm:grid-cols-2">
				<label
					className="block"
					htmlFor="postalCode"
				>
					<input
						className="input"
						type="text"
						placeholder="Postal Code"
						name="postalCode"
						value={formValues.postalCode}
						onChange={handleChange}
						onBlur={handleBlur}
					/>

					{errors.postalCode && (
						<p className="text-brand-red mt-2">
							{errors.postalCode}
						</p>
					)}
				</label>

				<label
					className="block"
					htmlFor="state"
				>
					<select
						className="input-select"
						name="state"
						id="state"
						title="Select state"
						value={formValues.state}
						onChange={handleChange}
						onBlur={handleBlur}
					>
						<option className="text-[rgba(151,_151,_151,_1)]">
							State
						</option>

						<option value="Alabama">Alabama</option>

						<option value="Quebec">Quebec</option>
					</select>

					{errors.state && (
						<p className="text-brand-red mt-2">{errors.state}</p>
					)}
				</label>
			</div>

			<label
				className="block sm:col-span-2"
				htmlFor="website"
			>
				<input
					className="input"
					type="text"
					placeholder="Website (Optional)"
					name="website"
					value={formValues.website}
					onChange={handleChange}
					onBlur={handleBlur}
				/>

				{errors.website && (
					<p className="text-brand-red mt-2">{errors.website}</p>
				)}
			</label>

			<button
				className="submit-btn sm:col-span-2"
				type="submit"
				disabled={hasErrors || !isFormComplete || pending}
			>
				{pending ? "Verifying company email and name" : "Continue"}
			</button>
		</>
	);
};

export default BusinessInfoForm;
