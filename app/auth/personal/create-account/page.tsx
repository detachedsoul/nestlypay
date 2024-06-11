import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Create an Account",
    description: "Tell us a bit about you. Provide your legal name, work mail and home address."
};

const Index = (): JSX.Element => {
    return (
        <form className="w-full">
            <h1 className="text-black/100 font-medium text-2xl/10">
                Create an Account
            </h1>

            <p className="mt-1">
                Tell us a bit about you. Provide your legal name, work mail and home address.
            </p>

            <div className="space-y-8 mt-8">
                <label className="block" htmlFor="fullName">
                    <input className="input" type="text" placeholder="Full Name" name="fullName" />
                </label>

                <label className="block" htmlFor="email">
                    <input className="input" type="email" placeholder="Email Address" name="email" />
                </label>

                <label className="block" htmlFor="password">
                    <input className="input" type="password" placeholder="Password" name="password" />
                </label>

                <button className="submit-btn" type="submit">
                    Create Now
                </button>

                <p className="font-medium text-black/100">
                    Already have an account? <Link className="text-brand-blue underline-offset-8 hover:underline hover:decoration-wavy" href="/auth/personal/sign-in">Sign In</Link> instead
                </p>
            </div>
        </form>
    );
};

export default Index;
