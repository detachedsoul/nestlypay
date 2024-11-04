"use client";

import useBusinessForm from "@/hooks/useBusinessForm";
import zodValidator from "@/lib/zodValidator";
import formHasErrors from "@/lib/formHasErrors";
import isFormFieldsComplete from "@/lib/isFormFieldsComplete";
import FormInput from "@/components/FormInput";
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
	const isFormComplete = isFormFieldsComplete(formValues);

	return (
		<>
			<label
				className="block"
				htmlFor="firstName"
			>
				<FormInput
					type="text"
					placeholder="First Name"
					name="firstName"
					value={formValues.firstName}
					onChange={handleChange}
					onBlur={handleBlur}
					error={errors.firstName}
				/>
			</label>

			<label
				className="block"
				htmlFor="lastName"
			>
				<FormInput
					type="text"
					placeholder="Last Name"
					name="lastName"
					value={formValues.lastName}
					onChange={handleChange}
					onBlur={handleBlur}
					error={errors.lastName}
				/>
			</label>

			<label
				className="block sm:col-span-2"
				htmlFor="email"
			>
				<FormInput
					type="email"
					placeholder="Email Address"
					name="email"
					value={formValues.email}
					onChange={handleChange}
					onBlur={handleBlur}
					error={errors.email}
				/>
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
