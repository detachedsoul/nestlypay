"use client";

import useBusinessForm from "@/hooks/useBusinessForm";
import formHasErrors from "@/lib/formHasErrors";
import isFormFieldsComplete from "@/lib/isFormFieldsComplete";
import zodValidator from "@/lib/zodValidator";
import FormInput from "@/components/FormInput";
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

	const handleBlur = (
		e: React.FocusEvent<HTMLInputElement> | React.FocusEvent<HTMLSelectElement>,
	) => {
		const { name, value } = e.target;

		const { errors, formValue } = zodValidator({
			name: name as keyof FormValues,
			value: value,
			formValues: formValues,
			schema: schema,
		});

		setFormValues(formValue);
		setErrors(errors);

		if (!errors[name as keyof FormValues]) {
			setBusinessInfo({
				...businessInfo,
				[name]: value,
			});
		} else {
			setBusinessInfo({
				...businessInfo,
				[name]: "",
			});
		}
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>,
	) => {
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

		if (!errors[name as keyof FormValues]) {
			setBusinessInfo({
				...businessInfo,
				[name]: value,
			});
		} else {
			setBusinessInfo({
				...businessInfo,
				[name]: "",
			});
		}
	};

    const hasErrors = formHasErrors(errors);

	const isFormComplete = isFormFieldsComplete([
		formValues.companyName,
		formValues.companyEmail,
		formValues.address,
		formValues.country,
		formValues.city,
		formValues.postalCode,
		formValues.state,
	]);

    return (
		<>
			<label
				className="block"
				htmlFor="companyName"
			>
				<FormInput
					type="text"
					placeholder="Company Name"
					name="companyName"
					value={formValues.companyName}
					onChange={handleChange}
					onBlur={handleBlur}
					error={errors.companyName}
				/>
			</label>

			<label
				className="block"
				htmlFor="companyEmail"
			>
				<FormInput
					type="email"
					placeholder="Company Email"
					name="companyEmail"
					value={formValues.companyEmail}
					onChange={handleChange}
					onBlur={handleBlur}
					error={errors.companyEmail}
				/>
			</label>

			<label
				className="block sm:col-span-2"
				htmlFor="address"
			>
				<FormInput
					type="text"
					placeholder="Address"
					name="address"
					value={formValues.address}
					onChange={handleChange}
					onBlur={handleBlur}
					error={errors.address}
				/>
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
					<FormInput
						type="text"
						placeholder="Postal Code"
						name="postalCode"
						value={formValues.postalCode}
						onChange={handleChange}
						onBlur={handleBlur}
						error={errors.postalCode}
					/>
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
				<FormInput
					type="text"
					placeholder="Website (Optional)"
					name="website"
					value={formValues.website}
					onChange={handleChange}
					onBlur={handleBlur}
					error={errors.website}
				/>
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
