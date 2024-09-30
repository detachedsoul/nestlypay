import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Personal Information",
    description: "Provide your legal name and work mail."
};

const Index = (): JSX.Element => {
    return (
		<form className="w-full">
			<h1 className="text-black/100 font-medium text-2xl/10">
				Personal Information
			</h1>

			<p className="mt-1">Provide your legal name and work mail.</p>

			<div className="space-y-8 mt-8 sm:space-y-0 sm:grid sm:gap-8 sm:grid-cols-2 lg:grid-cols-1 lg:block lg:space-y-8">
				<label
					className="block"
					htmlFor="firstName"
				>
					<input
						className="input"
						type="text"
						placeholder="First Name"
						name="firstName"
					/>
				</label>

				<label
					className="block"
					htmlFor="lastName"
				>
					<input
						className="input"
						type="text"
						placeholder="Last Name"
						name="lastName"
					/>
				</label>

				<label
					className="block sm:col-span-2"
					htmlFor="email"
				>
					<input
						className="input"
						type="email"
						placeholder="Email Address"
						name="email"
					/>
				</label>

				<button
					className="submit-btn sm:col-span-2"
					type="submit"
				>
					Continue
				</button>

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
	);
};

export default Index;
