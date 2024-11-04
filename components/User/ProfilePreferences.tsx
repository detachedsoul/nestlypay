"use client";

import Alert from "@/components/Alert";
import useUserDetails from "@/hooks/useUserDetails";
import useUpdateUserDetails from "@/hooks/useUpdateUserDetails";
import { useFormStatus } from "react-dom";
import { useState, useEffect } from "react";

const ProfilePreferences = (): JSX.Element => {
    const { userDetails } = useUserDetails();
	const { updateDetails, resetStatus } = useUpdateUserDetails();

	const [formValues, setFormValues] = useState({
		acceptCrypto: userDetails?.acceptCrypto ?? false,
		acceptTransfer: userDetails?.acceptTransfer ?? false,
		receiveReceipt: userDetails?.receiveReceipt ?? false,
		customerReceiveReceipt: userDetails?.customerReceiveReceipt ?? false,
	});

    useEffect(() => {
		if (userDetails) {
			setFormValues({
				acceptCrypto: userDetails?.acceptCrypto ?? false,
				acceptTransfer: userDetails?.acceptTransfer ?? false,
				receiveReceipt: userDetails?.receiveReceipt ?? false,
				customerReceiveReceipt: userDetails?.customerReceiveReceipt ?? false,
			});
		}
    }, [userDetails]);

    const handleChange = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
        const { name } = e.target;

        setFormValues((prevValues) => ({
			...prevValues,
			[name]: !formValues[name as keyof typeof formValues],
		}));
    };

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
					Payments Preferences
				</h2>

				<p className="mt-1">Accept payment via</p>

				<div className="space-y-6 mt-8">
					<div className="flex items-center justify-between gap-4">
						<p>Bank Transfer</p>

						<label
							className="cursor-pointer"
							htmlFor="acceptTransfer"
							aria-label="Enable bank transfer"
						>
							<input
								className="input-checkbox"
								type="checkbox"
								name="acceptTransfer"
								checked={formValues.acceptTransfer}
								onChange={handleChange}
							/>
						</label>
					</div>

					<div className="flex items-center justify-between gap-4">
						<p>Crypto Currency</p>

						<label
							className="cursor-pointer"
							htmlFor="acceptCrypto"
							aria-label="Enable bank transfer"
						>
							<input
								className="input-checkbox"
								type="checkbox"
								name="acceptCrypto"
								checked={formValues.acceptCrypto}
								onChange={handleChange}
							/>
						</label>
					</div>

					<div className="flex items-start justify-between gap-4">
						<p>Transfer Receipt</p>

						<div className="space-y-4">
							<div className="flex items-center gap-4">
								<label
									className="cursor-pointer"
									htmlFor="receiveReceipt"
									aria-label="Send receipt to me"
								>
									<input
										className="input-checkbox"
										type="checkbox"
										name="receiveReceipt"
										checked={formValues.receiveReceipt}
										onChange={handleChange}
									/>
								</label>

								<p>Send to me</p>
							</div>

							<div className="flex items-center gap-4">
								<label
									className="cursor-pointer"
									htmlFor="customerReceiveReceipt"
									aria-label="Send receipt to customer"
								>
									<input
										className="input-checkbox"
										type="checkbox"
                                        name="customerReceiveReceipt"
                                        checked={formValues.customerReceiveReceipt}
										onChange={handleChange}
									/>
								</label>

								<p>Send to customer</p>
							</div>
						</div>
					</div>

					<SubmitButton />
				</div>
			</form>

			<Alert
				statusType={resetStatus.status}
				message={resetStatus.message}
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

export default ProfilePreferences;
