"use client";

import Link from "next/link";
import isFormFieldsComplete from "@/lib/isFormFieldsComplete";
import Alert from "@/components/Alert";
import useAuth from "@/hooks/useAuth";
import useForm from "@/hooks/useForm";
import { useFormStatus } from "react-dom";
import { useEffect, useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { userLogin } from "@/lib/userAction";
import { permanentRedirect } from "next/navigation";

type FormValues = {
	password: string;
	email: string;
};

const LoginForm = () => {
	const [passwordIsVisible, setPasswordIsVisible] = useState(false);

	const [formValues, setFormValues] = useState<FormValues>({
		email: "",
		password: "",
	});

	const { state, formAction } = useForm(userLogin, true);

	const { setAuthInfo, authInfo } = useAuth();

	useEffect(() => {
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
	}, [state, setAuthInfo]);

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
						<input
							className="input"
							type="email"
							placeholder="Email Address"
							name="email"
							value={formValues.email}
							onChange={(
								e: React.ChangeEvent<HTMLInputElement>,
							) =>
								setFormValues({
									...formValues,
									email: e.target.value,
								})
							}
						/>
					</label>

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
							onChange={(
								e: React.ChangeEvent<HTMLInputElement>,
							) =>
								setFormValues({
									...formValues,
									password: e.target.value,
								})
							}
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
