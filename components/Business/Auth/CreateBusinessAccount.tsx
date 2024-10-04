"use client";

import Alert from "@/components/Alert";
import useBusinessForm from "@/hooks/useBusinessForm";
import useForm from "@/hooks/useForm";
import { createBusinessAccount } from "@/lib/actions";
import { useFormStatus } from "react-dom";
import { useState, useEffect } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { z } from "zod";
import { useRouter, redirect } from "next/navigation";
import useAuth from "@/hooks/useAuth";

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
    const { replace } = useRouter();
	const { state, formAction } = useForm(createBusinessAccount, true);

    const [formData, setFormData] = useState<FormData>(new FormData());

	const [passwordIsVisible, setPasswordIsVisible] = useState(false);

	const [formValues, setFormValues] = useState<FormValues>({
		password: "",
		confirmPassword: "",
    });

	const [errors, setErrors] = useState<Partial<FormValues>>({
		password: "",
		confirmPassword: "",
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

	const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		zodValidation(name as keyof FormValues, value);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		setFormValues((prevValues) => ({
			...prevValues,
			[name]: value
		}));

		zodValidation(name as keyof FormValues, value);
	};

	const hasErrors = Object.values(errors).some((error) => error !== "");

	const isFormComplete = Object.values(formValues).every(
		(value) => value !== "",
    );

    const [isLoading, setIsLoading] = useState(true);

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
					redirect("/auth/business/business-info");
				} else {
					setIsLoading(false);
				}
			}
		}
	}, [isLoading]);

	useEffect(() => {
		if (state.status === "success") {
			const timer = setTimeout(() => {
				localStorage.removeItem("business-info");

				setAuthInfo({
					sessionID: state.data.sessionID,
					userID: state.data.id,
				});

				replace("/business");
			}, 2000);

			return () => clearTimeout(timer);
		}
	}, [state, setAuthInfo, replace]);

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
						<input
							className="input pr-16"
							type={passwordIsVisible ? "text" : "password"}
							placeholder="Password"
							name="password"
							value={formValues.password}
							onChange={handleChange}
							onBlur={handleBlur}
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

					<label
						className="block relative"
						htmlFor="confirmPassword"
					>
						<input
							className="input pr-16"
							type={passwordIsVisible ? "text" : "password"}
							placeholder="Confirm Password"
							name="confirmPassword"
							value={formValues.confirmPassword}
							onChange={handleChange}
							onBlur={handleBlur}
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

						{errors.confirmPassword && (
							<p className="text-brand-red mt-2">
								{errors.confirmPassword}
							</p>
						)}
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

    const { businessInfo } = useBusinessForm();

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
