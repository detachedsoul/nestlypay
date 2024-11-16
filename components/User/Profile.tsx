"use client";

import Alert from "@/components/Alert";
import FormInput from "@/components/FormInput";
import UserIcon from "@/components/UserIcon";
import useUserDetails from "@/hooks/useUserDetails";
import useUpdateUserDetails from "@/hooks/useUpdateUserDetails";
import Image from "next/image";
import useAuth from "@/hooks/useAuth";
import zodValidator from "@/lib/zodValidator";
import formHasErrors from "@/lib/formHasErrors";
import { useState, ChangeEvent, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { cn } from "@/lib/utils";
import { z } from "zod";

const schema = z.object({
	fullName: z
		.string({
			message: "Please enter your full name",
		})
		.min(2, "Full name must be at least 2 characters"),
	phoneNumber: z
		.string()
		.regex(/^(?:\+234|234|0)\d{10}$/, "Phone number must be a valid Nigerian phone number")
		.optional(),
});

type FormValues = {
	fullName: string;
	phoneNumber: string;
};

const Profile = (): JSX.Element => {
    const { authInfo } = useAuth();
    const { userDetails } = useUserDetails();
	const { updateDetails, resetStatus } = useUpdateUserDetails();

	const [formValues, setFormValues] = useState({
		fullName: userDetails?.fullName ?? "",
		phoneNumber: userDetails?.phoneNumber ?? "",
	});

    const [errors, setErrors] = useState<Partial<FormValues>>({
		fullName: "",
		phoneNumber: "",
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.FocusEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

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

    const [imageUrl, setImageUrl] = useState<string | null>(null);

    const showUploadedImage = (fileInputSelector: HTMLInputElement) => {
        const reader = new FileReader();

        reader.onload = (e: ProgressEvent<FileReader>) => {
            const target = e.target as FileReader;
            setImageUrl(target.result as string);
        };

        if (fileInputSelector.files && fileInputSelector.files[0]) {
            reader.readAsDataURL(fileInputSelector.files[0]);
        }
    };

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const fileInputSelector = e.target as HTMLInputElement;
        showUploadedImage(fileInputSelector);
    };

    useEffect(() => {
		if (userDetails) {
			setFormValues({
				fullName: userDetails?.fullName ?? "",
                phoneNumber: userDetails?.phoneNumber ?? "",
			});
		}
	}, [userDetails]);

	const handleUpdate = async () => {
		await updateDetails(formValues);
	};

    return (
		<>
			<form
				className="space-y-6 lg:w-3/5 xl:w-1/2 lg:mx-auto settings-card"
				action={handleUpdate}
			>
				<label
					className="h-28 w-28 mx-auto bg-black/100 rounded-full grid place-content-center cursor-pointer relative"
					htmlFor="profilePicture"
				>
					<UserIcon />

					<span className="sr-only">
						Upload a new profile picture
					</span>

					<input
						type="file"
						className="h-full cursor-pointer opacity-0 absolute inset-0 w-full rounded-xl z-50"
						id="profilePicture"
						name="profilePicture"
						onChange={handleImageChange}
					/>

					{imageUrl && (
						<Image
							className="absolute inset-0 w-full h-full object-cover object-center rounded-full cursor-pointer aspect-square"
							src={imageUrl ?? ""}
							fill
							alt={authInfo?.name ?? ""}
						/>
					)}
				</label>

				<div className="flex items-center flex-wrap gap-4 place-content-center">
					<button
						className={cn(
							"btn bg-brand-blue text-white border-[1.5px] border-brand-blue font-medium hover:bg-brand-blue/60 hover:border-transparent py-3.5 rounded-lg inline-block",
						)}
						type="button"
						onClick={() => setImageUrl(null)}
					>
						Upload Image
					</button>

					<button
						className={cn(
							"btn bg-white/100 border-[1.5px] border-[rgba(151,_151,_151,_1)] text-[rgba(151,_151,_151,_1)] font-medium hover:bg-[rgba(151,_151,_151,_1)] hover:text-white py-3.5 rounded-lg inline-block",
						)}
						type="button"
						onClick={() => setImageUrl(null)}
					>
						Delete
					</button>
				</div>

				<div className="space-y-4">
					<label
						className="block"
						htmlFor="fullName"
					>
						<FormInput
							type="text"
							placeholder="Enter full Name"
							name="fullName"
							value={formValues.fullName}
							onBlur={handleChange}
							onChange={handleChange}
							error={errors.fullName}
						/>
					</label>

					<label
						className="block"
						htmlFor="email"
					>
						<input
							className="input"
							type="email"
							placeholder="Email Address"
							name="email"
							value={userDetails?.email}
							disabled
						/>
					</label>

					<label
						className="block"
						htmlFor="phoneNumber"
					>
						<FormInput
							type="text"
							placeholder="Phone Number"
							name="phoneNumber"
							value={formValues.phoneNumber}
							onBlur={handleChange}
							onChange={handleChange}
							error={errors.phoneNumber}
							maxLength={14}
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

export const SubmitButton = ({
	errors,
}: {
	errors: Partial<FormValues>;
}) => {
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

export default Profile;
