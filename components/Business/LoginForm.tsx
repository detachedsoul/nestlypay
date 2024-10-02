"use client";

import Link from "next/link";
import Alert from "@/components/Alert";
import useForm from "@/hooks/useForm";
import { businessLogin } from "@/lib/actions";
import { useState } from "react";

const LoginForm = () => {
    const { state, formAction } = useForm(businessLogin, true);

    const [formValues, setFormValues] = useState({
        email: "",
        password: ""
    });

	return (
		<form
			action={formAction}
			className="w-full"
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
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							setFormValues({
								...formValues,
								email: e.target.value,
							})
						}
					/>
				</label>

				<label
					className="block"
					htmlFor="password"
				>
					<input
						className="input"
						type="password"
						placeholder="Password"
						name="password"
						value={formValues.password}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							setFormValues({
								...formValues,
								password: e.target.value,
							})
						}
					/>
				</label>

				<button
					className="submit-btn"
					type="submit"
					disabled={
						!Object.values(formValues).every(
							(value) => value !== "",
						)
					}
				>
					Sign In
				</button>
			</div>

			<div className="space-y-4 mt-8">
				<p className="font-medium text-black/100 text-center">
					Don’t have an account?{" "}
					<Link
						className="text-brand-blue underline-offset-8 hover:underline hover:decoration-wavy"
						href="/auth/business/personal-info"
					>
						Create One
					</Link>
				</p>

				<Link
					className="text-brand-red font-medium text-center block mx-auto underline-offset-8 hover:underline hover:decoration-wavy"
					href="/auth/business/reset-password"
				>
					Forgot Password
				</Link>
			</div>

			<Alert
				statusType={state.status}
				message={state.message}
			/>
		</form>
	);
};

export default LoginForm;
