import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Create free invoice",
    description: "Create a one time free invoice without signing up."
};

const Index = (): JSX.Element => {
    return (
        <form className="w-full">
            <h1 className="text-black/100 font-medium text-2xl/10">
                Create free Invoice
            </h1>

            <p className="mt-1">
                Create a one time free invoice without signing up.
            </p>

            <div className="space-y-8 mt-8">
                <label className="block" htmlFor="fullName">
                    <input className="input" type="text" placeholder="Full Name" name="fullName" />
                </label>

                <label className="block" htmlFor="email">
                    <input className="input" type="email" placeholder="Email Address" name="email" />
                </label>

                <button className="submit-btn" type="submit">
                    Create Now
                </button>

                <p className="font-medium text-black/100">
                    Already have an account? <Link className="text-brand-blue underline-offset-8 hover:underline hover:decoration-wavy" href="/auth/personal/sign-in">Sign In</Link>
                </p>
            </div>
        </form>
    );
};

export default Index;
