"use client";

import LoginFormChild from "./LoginFormChild";
import Link from "next/link";
import Alert from "@/components/Alert";
import useForm from "@/hooks/useForm";
import { businessLogin } from "@/lib/actions";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const LoginForm = () => {
	const { state, formAction } = useForm(businessLogin, true);
    const router = useRouter();

	useEffect(() => {
		if (state.status === "success") {
            const timer = setTimeout(() => {
                router.replace("/business");
            }, 3000);

            return () => clearTimeout(timer);
		}
	}, [state.status, router]);

	return (
		<>
			<form
				action={formAction}
				className="w-full"
			>
				<h1 className="text-black/100 font-medium text-2xl/10">
					Welcome Back!
				</h1>

				<p className="mt-1">Pick up where you left off.</p>

				<LoginFormChild />

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
			</form>

			<Alert
				statusType={state.status}
				message={state.message}
			/>
		</>
	);
};

export default LoginForm;
