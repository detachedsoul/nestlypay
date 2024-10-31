"use client";

import Alert from "@/components/Alert";
import useUserDetails from "@/hooks/useUserDetails";
import useUpdateUserDetails from "@/hooks/useUpdateUserDetails";
import { useFormStatus } from "react-dom";
import { useState, useEffect } from "react";

const ProfileSettings = (): JSX.Element => {
    const { userDetails } = useUserDetails();
	const { updateDetails } = useUpdateUserDetails();

    const [formValues, setFormValues] = useState({
        email: userDetails?.email ?? "",
        address: userDetails?.address ?? "",
        city: userDetails?.address ?? "",
        postalCode: userDetails?.postalCode ?? "",
        country: userDetails?.country ?? "",
        state: userDetails?.state ?? ""
    });

    const [alertInfo, setAlertInfo] = useState<{ status: "" | "success" | "error"; message: string }>({
        status: "",
        message: ""
    });

    useEffect(() => {
        if (userDetails) {
            setFormValues({
                email: userDetails.email ?? "",
                address: userDetails.address ?? "",
                city: userDetails.address ?? "",
                postalCode: userDetails.postalCode ?? "",
                country: userDetails.country ?? "",
                state: userDetails.state ?? "",
            });
        }
    }, [userDetails]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const { name, value } = e.target;

		setFormValues((prevValues) => ({
			...prevValues,
			[name]: value,
		}));
	};

    return (
		<>
			<form
				className="lg:w-3/5 xl:w-1/2 lg:mx-auto settings-card"
				action={async () => {
                    const { status, message } = await updateDetails(formValues);

					setAlertInfo({
						status: status,
						message: message,
					});
				}}
			>
				<h2 className="text-black/100 font-medium text-2xl/10">
					Contact Information
				</h2>

				<p className="mt-1">
					Provide your legal name, home address and work mail.
				</p>

				<div className="space-y-4 mt-8">
					<label
						className="block"
						htmlFor="email"
					>
						<input
							className="input"
							type="email"
							placeholder="Email Address"
							name="email"
							value={String(formValues.email)}
							onChange={handleChange}
						/>
					</label>

					<label
						className="block"
						htmlFor="address"
					>
						<input
							className="input"
							type="text"
							placeholder="Home Address"
							name="address"
							value={String(formValues.address)}
							onChange={handleChange}
						/>
					</label>

					<div className="grid gap-8 lg:grid-cols-2">
						<label
							className="block"
							htmlFor="city"
						>
							<input
								className="input"
								type="text"
								placeholder="City"
								name="city"
								value={String(formValues.city)}
								onChange={handleChange}
							/>
						</label>

						<label
							className="block"
							htmlFor="country"
						>
							<select
								className="input-select"
								name="country"
								id="country"
								value={String(formValues.country)}
								onChange={handleChange}
							>
								<option>Country</option>

								<option value="USA">USA</option>

								<option value="Canada">Canada</option>
							</select>
						</label>
					</div>

					<div className="grid gap-8 lg:grid-cols-2">
						<label
							className="block"
							htmlFor="postalCode"
						>
							<input
								className="input"
								type="text"
								placeholder="Postal Code"
								name="postalCode"
								value={String(formValues.postalCode)}
								onChange={handleChange}
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
								value={String(formValues.state)}
								onChange={handleChange}
							>
								<option>State</option>

								<option value="Alabama">Alabama</option>

								<option value="Quebec">Quebec</option>
							</select>
						</label>
					</div>

					<SubmitButton />
				</div>
			</form>

			<Alert
				statusType={alertInfo?.status ?? ""}
				message={alertInfo?.message ?? ""}
			/>
		</>
	);
};

export const SubmitButton = () => {
	const { pending } = useFormStatus();

	return (
		<button
			className="submit-btn sm:col-span-2"
			type="submit"
			disabled={pending}
		>
			{pending ? "Updating profile..." : "Update"}
		</button>
	);
};

export default ProfileSettings;
