"use client";

import Alert from "@/components/Alert";
import useUserDetails from "@/hooks/useUserDetails";
import useUpdateUserDetails from "@/hooks/useUpdateUserDetails";
import zodValidator from "@/lib/zodValidator";
import formHasErrors from "@/lib/formHasErrors";
import FormInput from "@/components/FormInput";
import { useFormStatus } from "react-dom";
import { useState, useEffect } from "react";
import { z } from "zod";

const schema = z.object({
	accountName: z
		.string()
		.min(2, "Account name must be at least 2 characters")
		.optional(),
	bankName: z.string().optional(),
	accountNumber: z
		.string()
		.regex(/^\d{10}$/, "Account number must ba a number and exactly 10 digits")
		.max(10, "Account number must be exactly 10 digits")
		.optional(),
});

type FormValues = {
	accountName: string;
	accountNumber: string;
	bankName: string;
};

const ProfileAccountSettings = (): JSX.Element => {
    const { userDetails } = useUserDetails();
	const { updateDetails, resetStatus } = useUpdateUserDetails();

	const [formValues, setFormValues] = useState({
		accountName: userDetails?.accountName ?? "",
		accountNumber: userDetails?.accountNumber ?? "",
		bankName: userDetails?.bankName ?? "",
	});

    const [errors, setErrors] = useState<Partial<FormValues>>({
		accountName: "",
		accountNumber: "",
		bankName: "",
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.FocusEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

        if (value === "") {
            setFormValues((prevValues) => {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    [name]: ""
                }));

                return {
					...prevValues,
					[name]: value
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

    useEffect(() => {
		if (userDetails) {
			setFormValues({
				accountName: userDetails?.accountName ?? "",
				accountNumber: userDetails?.accountNumber ?? "",
				bankName: userDetails?.bankName ?? "",
			});
		}
	}, [userDetails]);

	const handleUpdate = async () => {
		await updateDetails(formValues);
    };

    return (
		<>
			<form
				className="lg:w-3/5 xl:w-1/2 lg:mx-auto settings-card"
				action={handleUpdate}
			>
				<h2 className="text-black/100 font-medium text-2xl/10">
					Banking Info
				</h2>

				<p className="mt-1">
					The name on your bank account should be the same as the one
					you filled in to ensure easy validation.
				</p>

				<div className="space-y-4 mt-8">
					<label
						className="block"
						htmlFor="bankName"
					>
						<FormInput
							name="bankName"
							value={formValues.bankName}
							type="text"
							onChange={handleChange}
							placeholder="Bank Name"
							error={errors.bankName}
						/>
					</label>

					<label
						className="block"
						htmlFor="accountNumber"
					>
						<FormInput
							name="accountNumber"
							value={formValues.accountNumber}
							type="text"
							onChange={handleChange}
							placeholder="Account Number"
							error={errors.accountNumber}
							maxLength={10}
						/>
					</label>

					<label
						className="block"
						htmlFor="accountName"
					>
						<FormInput
							name="accountName"
							value={formValues.accountName}
							onChange={handleChange}
							type="text"
							placeholder="Account Name"
							error={errors.accountName}
							maxLength={10}
						/>
					</label>

					<SubmitButton errors={errors} />
				</div>
			</form>

			<Alert
				statusType={resetStatus.status}
				message={resetStatus.message}
			/>
		</>
	);
};

export const SubmitButton = ({ errors }: { errors: Partial<FormValues> }) => {
	const { pending } = useFormStatus();

	const hasErrors = formHasErrors(errors);

	return (
		<button
			className="submit-btn sm:col-span-2"
			type="submit"
			disabled={hasErrors || pending}
		>
			{pending ? "Updating profile..." : "Update"}
		</button>
	);
};

export default ProfileAccountSettings;
