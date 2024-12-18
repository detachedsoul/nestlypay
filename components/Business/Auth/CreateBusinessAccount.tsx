"use client";

import Alert from "@/components/Alert";
import useBusinessForm from "@/hooks/useBusinessForm";
import useForm from "@/hooks/useForm";
import useAuth from "@/hooks/useAuth";
import zodValidator from "@/lib/zodValidator";
import formHasErrors from "@/lib/formHasErrors";
import isFormFieldsComplete from "@/lib/isFormFieldsComplete";
import useUserDetails from "@/hooks/useUserDetails";
import FormInput from "@/components/FormInput";
import { createBusinessAccount } from "@/actions/businessAction";
import { useFormStatus } from "react-dom";
import { useState, useEffect } from "react";
import { z } from "zod";
import { permanentRedirect } from "next/navigation";

const schema = z.object({
	password: z.string().min(1, "Password is required"),
	confirmPassword: z.string().min(1, "Please confirm your password"),
});

type FormValues = {
	password: string;
	confirmPassword: string;
};

const CreateBusinessAccount = () => {
    const { businessInfo, setBusinessInfo } = useBusinessForm();
    const { setAuthInfo } = useAuth();
    const { setUserDetails } = useUserDetails();
	const { state, formAction } = useForm(createBusinessAccount, true);

    const [isLoading, setIsLoading] = useState(true);

    const [formData, setFormData] = useState<FormData>(new FormData());

	const [formValues, setFormValues] = useState<FormValues>({
		password: "",
		confirmPassword: "",
    });

	const [errors, setErrors] = useState<Partial<FormValues>>({
		password: "",
		confirmPassword: "",
	});

	const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		const { errors, formValue } = zodValidator({
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

	// Check if personal information is set before rendering the page
    useEffect(() => {
        let formState;

        const getState = localStorage.getItem("business-info") ?? "";

        if (getState) {
            formState = JSON.parse(getState).state.businessInfo;
        }

        if (typeof window !== "undefined") {
            const stateData = {
				firstName: formState.firstName,
				lastName: formState.lastName,
				email: formState.email,
				companyName: formState.companyName,
				companyEmail: formState.companyEmail,
				address: formState.address,
				city: formState.city,
				state: formState.state,
				country: formState.country,
				postalCode: formState.postalCode,
				website: formState.website,
			};

			const requiredData = {
				firstName: formState.firstName,
				lastName: formState.lastName,
				email: formState.email,
				companyName: formState.companyName,
				companyEmail: formState.companyEmail,
				address: formState.address,
				city: formState.city,
				state: formState.state,
				country: formState.country,
				postalCode: formState.postalCode,
			};

            const data = new FormData();

			Object.entries(stateData).forEach(([key, value]) => {
				data.append(key, value as string);
			});

			setFormData(data);

            if (formState) {
                const isStateDataSet = Object.values(requiredData).every(
                    (value) => value !== "",
                );

				if (!isStateDataSet) {
					permanentRedirect("/auth/business/business-info");
				} else {
					setIsLoading(false);
				}
			}
		}
	}, [isLoading]);

	useEffect(() => {
		if (state.status === "success") {
			const timer = setTimeout(() => {
				setAuthInfo({
					sessionID: state.data.sessionID,
					userID: state.data.id,
					name: `${businessInfo.firstName} ${businessInfo.lastName}`,
					email: businessInfo.email,
				});

				localStorage.removeItem("business-info");

                setUserDetails(state.data);

				permanentRedirect("/business");
			}, 2000);

			return () => clearTimeout(timer);
		}
	}, [state, setAuthInfo, businessInfo, setUserDetails]);

	if (isLoading) {
		return null;
	}

	return (
		<>
			<form
				className="w-full"
				action={async (data) => {
					const mergedFormData = new FormData();

					// Append all entries from data
					for (const [key, value] of formData.entries()) {
						mergedFormData.append(key, value);
					}

					// Append all entries from formData (values from Zustand store)
					for (const [key, value] of data.entries()) {
						mergedFormData.append(key, value);
					}

					return formAction(mergedFormData);
				}}
			>
				<h1 className="text-black/100 font-medium text-2xl/10">
					One Last Step
				</h1>

				<p className="mt-1">
					Avoid easily guessable password, and make sure it is easy to
					remember.
				</p>

				<div className="space-y-8 mt-8">
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
							onBlur={handleBlur}
							error={errors.password}
						/>
					</label>

					<label
						className="block relative"
						htmlFor="confirmPassword"
					>
						<FormInput
							type="password"
							placeholder="Confirm Password"
							name="confirmPassword"
							value={formValues.confirmPassword}
							onChange={handleChange}
							onBlur={handleBlur}
							error={errors.confirmPassword}
						/>
					</label>

					<SubmitButton
						hasErrors={hasErrors}
						isFormComplete={isFormComplete}
					/>
				</div>
			</form>

			<Alert
				statusType={state.status}
				message={state.message}
			/>
		</>
	);
};

export default CreateBusinessAccount;

export const SubmitButton = ({
	hasErrors,
    isFormComplete
}: {
	hasErrors: boolean;
    isFormComplete: boolean;
}) => {
    const { pending } = useFormStatus();

	return (
		<button
			className="submit-btn sm:col-span-2"
			type="submit"
            disabled={hasErrors || !isFormComplete || pending}
		>
			{pending ? "Creating account, please hold on..." : "Create Account"}
		</button>
	);
};
