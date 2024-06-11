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

            <p className="mt-1">
                Provide your legal name and work mail.
            </p>

            <div className="space-y-8 mt-8">
                <label className="block" htmlFor="firstName">
                    <input className="input" type="text" placeholder="First Name" name="firstName" />
                </label>

                <label className="block" htmlFor="lastName">
                    <input className="input" type="text" placeholder="Last Name" name="lastName" />
                </label>

                <label className="block" htmlFor="email">
                    <input className="input" type="email" placeholder="Email Address" name="email" />
                </label>

                <button className="submit-btn" type="submit">
                    Continue
                </button>

                <p className="font-medium text-black/100">
                    Already have an account? <Link className="text-brand-blue underline-offset-8 hover:underline hover:decoration-wavy" href="/auth/business">Sign In</Link> instead
                </p>
            </div>
        </form>
    );
};

export default Index;
