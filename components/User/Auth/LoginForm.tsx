"use client";

import Link from "next/link";
import isFormFieldsComplete from "@/lib/isFormFieldsComplete";
import Alert from "@/components/Alert";
import useAuth from "@/hooks/useAuth";
import useForm from "@/hooks/useForm";
import useUserDetails from "@/hooks/useUserDetails";
import FormInput from "@/components/FormInput";
import { getUserDetails } from "@/lib/userAction";
import { useFormStatus } from "react-dom";
import { useEffect, useState } from "react";
import { userLogin } from "@/lib/userAction";
import { permanentRedirect } from "next/navigation";

type FormValues = {
	password: string;
	email: string;
};

const LoginForm = () => {
    const { setUserDetails } = useUserDetails();

	const [formValues, setFormValues] = useState<FormValues>({
		email: "",
		password: "",
	});

	const { state, formAction } = useForm(userLogin, true);

	const { setAuthInfo } = useAuth();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

        setFormValues((prevValues) => ({
			...prevValues,
			[name]: value,
		}));
	};

	useEffect(() => {
		const fetchUserDetails = async () => {
			const detailsParams = {
				sessionID: state.data?.sessionID ?? "",
				userID: state.data?.userID ?? "",
				name: state.data?.name ?? "",
				email: state.data?.email ?? "",
			};

			const { data, status } = await getUserDetails(detailsParams);

			if (status === "success") {
				setUserDetails(data);
			}

			if (state.status === "success") {
				const timer = setTimeout(() => {
					setAuthInfo({
						sessionID: state.data.sessionID,
						userID: state.data.userID,
						name: state.data.name,
						email: state.data.email,
					});

					permanentRedirect("/user");
				}, 3000);

				return () => clearTimeout(timer);
			}
		};

		fetchUserDetails();
	}, [state, setAuthInfo, setUserDetails]);

	return (
		<>
			<form
				className="w-full"
				action={formAction}
			>
				<h1 className="text-black/100 font-medium text-2xl/10">
					Welcome Back!
				</h1>

				<p className="mt-1">Pick up where you left off.</p>

				<div className="space-y-8 mt-8">
					<label
						className="block"
						htmlFor="email"
					>
						<FormInput
							type="email"
							placeholder="Email Address"
							name="email"
							value={formValues.email}
							onChange={handleChange}
						/>
					</label>

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
							className="pr-16"
						/>
					</label>

					<SubmitButton formValues={formValues} />
				</div>

				<div className="space-y-4 mt-8">
					<p className="font-medium text-black/100 text-center">
						Don’t have an account?{" "}
						<Link
							className="text-brand-blue underline-offset-8 hover:underline hover:decoration-wavy"
							href="/auth/personal/create-account"
						>
							Create One
						</Link>
					</p>

					<Link
						className="text-[rgba(243,_133,_133,_1)] text-center block mx-auto underline-offset-8 hover:underline hover:decoration-wavy"
						href="/auth/personal/reset-password"
					>
						Forgot Password
					</Link>
				</div>
			</form>

			<Alert
				statusType={state.status}
				message={state.message}
			/>
		</>
	);
};

export const SubmitButton = ({ formValues }: { formValues: FormValues }) => {
	const { pending } = useFormStatus();

	const isFormComplete = isFormFieldsComplete(formValues);

	return (
		<button
			className="submit-btn sm:col-span-2"
			type="submit"
			disabled={!isFormComplete || pending}
		>
			{pending ? "Signing In..." : "Sign In"}
		</button>
	);
};

export default LoginForm;
