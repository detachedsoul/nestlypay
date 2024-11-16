"use client";

import BusinessInfoForm from "./BusinessInfoForm";
import Link from "next/link";
import useForm from "@/hooks/useForm";
import Alert from "@/components/Alert";
import { useEffect, useState } from "react";
import { permanentRedirect, useRouter } from "next/navigation";
import { checkBusinessDetails } from "@/actions/businessAction";

const BusinessInfo = () => {
	const { state, formAction } = useForm(checkBusinessDetails, true);
    const { push } = useRouter();

    const [isLoading, setIsLoading] = useState(true);

	// Check if personal information is set before rendering the page
	useEffect(() => {
		let formState;

		const getState = localStorage.getItem("business-info") ?? "";

		if (getState) {
			formState = JSON.parse(getState).state.businessInfo;
		}

		if (typeof window !== "undefined") {
            if (
                !formState?.firstName ||
                !formState?.lastName ||
                !formState?.email
            ) {
                permanentRedirect("/auth/business/personal-info");
            } else {
                setIsLoading(false);
            }
		}
	}, [isLoading]);

    useEffect(() => {
		if (state.status === "success") {
			const timer = setTimeout(() => {
				push("/auth/business/create-account");
			}, 2000);

			return () => clearTimeout(timer);
		}
	}, [state.status, push]);

    if (isLoading) {
        return null;
    }

	return (
		<>
			<form
				className="w-full"
				action={formAction}
			>
				<h1 className="text-black/100 font-medium text-2xl/10">
					Business Information
				</h1>

				<p className="mt-1">
					Provide your business name, business mail, and company
					address.
				</p>

				<div className="space-y-8 mt-8 sm:space-y-0 sm:grid sm:gap-8 sm:grid-cols-2 lg:block lg:space-y-8">
					<BusinessInfoForm />

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

export default BusinessInfo;
