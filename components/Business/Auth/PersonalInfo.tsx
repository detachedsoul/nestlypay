"use client";

import useForm from "@/hooks/useForm";
import PersonalInfoForm from "./PersonalInfoForm";
import Link from "next/link";
import Alert from "@/components/Alert";
import { checkBusinessUserEmail } from "@/lib/actions";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const PersonalInfo = () => {
    const { state, formAction } = useForm(checkBusinessUserEmail, true);

	const { push } = useRouter();

	useEffect(() => {
		if (state.status === "success") {
			const timer = setTimeout(() => {
				push("/auth/business/business-info");
			}, 2000);

			return () => clearTimeout(timer);
		}
	}, [state.status, push]);

	return (
		<>
			<form
				className="w-full"
				action={formAction}
			>
				<h1 className="text-black/100 font-medium text-2xl/10">
					Personal Information
				</h1>

				<p className="mt-1">Provide your legal name and work mail.</p>

				<div className="space-y-8 mt-8 sm:space-y-0 sm:grid sm:gap-8 sm:grid-cols-2 lg:grid-cols-1 lg:block lg:space-y-8">
					<PersonalInfoForm />

					<p className="font-medium text-black/100 sm:col-span-2">
						Already have an account?{" "}
						<Link
							className="text-brand-blue underline-offset-8 hover:underline hover:decoration-wavy"
							href="/auth/business"
						>
							Sign In
						</Link>{" "}
						instead
					</p>
				</div>
			</form>

			<Alert
				statusType={state.status}
				message={state.message}
			/>
		</>
	);
};

export default PersonalInfo;
