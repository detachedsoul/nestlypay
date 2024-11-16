"use client";

import useAuth from "@/hooks/useAuth";
import Alert from "@/components/Alert";
import FormInput from "@/components/FormInput";
import zodValidator from "@/lib/zodValidator";
import formHasErrors from "@/lib/formHasErrors";
import isFormFieldsComplete from "@/lib/isFormFieldsComplete";
import useClient from "@/hooks/useClient";
import { Dispatch, SetStateAction, useState, useEffect } from "react";
import { z } from "zod";

interface IAddClient {
	toggleModal: Dispatch<SetStateAction<boolean>>;
}

const schema = z.object({
	fullName: z
		.string({
			message: "Please enter your full name",
		})
		.min(2, "Full name must be at least 2 characters")
		.trim(),
	email: z.string().email("Invalid email address"),
	phoneNumber: z
		.string()
		.regex(
			/^(?:\+234|234|0)\d{10}$/,
			"Phone number must be a valid Nigerian phone number",
		),
});

type FormValues = {
	phoneNumber: string;
	email: string;
	fullName: string;
};

const AddClient: React.FC<IAddClient> = ({ toggleModal }) => {
    const { authInfo } = useAuth();

    const { createClient, resetStatus } = useClient();

	const [formValues, setFormValues] = useState({
		fullName: "",
		email: "",
		phoneNumber: "",
    });

    const [errors, setErrors] = useState<Partial<FormValues>>({
		fullName: "",
		email: "",
		phoneNumber: "",
    });

    const [pending, setPending] = useState(false);

	const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		const { errors } = zodValidator({
			name: name as keyof FormValues,
			value: value,
			formValues: formValues,
			schema: schema,
		});

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
        if (resetStatus.status === "success") {
			setFormValues({
				fullName: "",
				email: "",
				phoneNumber: "",
			});

			setPending(false);

			setTimeout(() => {
				toggleModal(false);
			}, 5000);
        } else {
            if (resetStatus.status === "error") {
				setPending(false);
			}
        }
    }, [resetStatus, toggleModal]);

    const handleSubmit = async () => {
        setPending(true);

        const data = {
            userEmail: authInfo?.email ?? "",
            userName: authInfo?.name ?? "",
            sessionID: authInfo?.sessionID ?? "",
            userID: authInfo?.userID ?? "",
            clientName: formValues.fullName,
            clientEmail: formValues.email,
            phoneNumber: formValues.phoneNumber,
        };

		await createClient(data);
	};

	return (
		<>
			<form
				className="space-y-4"
				onSubmit={(e) => {
					e.preventDefault();
					handleSubmit();
				}}
			>
				<h2 className="font-medium text-black/100 text-xl/10">
					Add Client
				</h2>

				<label
					className="w-full block"
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
					className="w-full block"
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
					className="w-full block"
					htmlFor="phoneNumber"
				>
					<FormInput
						type="text"
						placeholder="Phone Number"
						name="phoneNumber"
						value={formValues.phoneNumber}
						onBlur={handleBlur}
						onChange={handleChange}
						error={errors.phoneNumber}
						maxLength={14}
					/>
				</label>

				<SubmitButton
					errors={errors}
					formValues={formValues}
					pending={pending}
				/>
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
	pending,
}: {
	errors: Partial<FormValues>;
	formValues: FormValues;
	pending: boolean;
}) => {
	const hasErrors = formHasErrors(errors);
	const isFormComplete = isFormFieldsComplete(formValues);

	return (
		<button
			className="submit-btn bg-brand-blue text-white font-medium hover:bg-brand-blue/60 py-4 rounded-lg block w-full"
			type="submit"
			disabled={hasErrors || !isFormComplete || pending}
		>
			{pending ? "Adding client, please hold on..." : "Add Client"}
		</button>
	);
};

export default AddClient;
