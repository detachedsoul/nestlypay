import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Welcome Back",
    description: "Pick up where you left off."
};

const Index = (): JSX.Element => {
    return (
        <form className="w-full">
            <h1 className="text-black/100 font-medium text-2xl/10">
                Welcome Back!
            </h1>

            <p className="mt-1">
                Pick up where you left off.
            </p>

            <div className="space-y-8 mt-8">
                <label className="block" htmlFor="email">
                    <input className="input" type="email" placeholder="Email Address" name="email" />
                </label>

                <label className="block" htmlFor="password">
                    <input className="input" type="password" placeholder="Password" name="password" />
                </label>

                <button className="submit-btn" type="submit">
                    Sign In
                </button>
            </div>

            <div className="space-y-4 mt-8">
                <p className="font-medium text-black/100 text-center">
                    Don’t have an account? <Link className="text-brand-blue underline-offset-8 hover:underline hover:decoration-wavy" href="/auth/business/personal-info">Create One</Link>
                </p>

                <Link className="text-[rgba(243,_133,_133,_1)] text-center block mx-auto underline-offset-8 hover:underline hover:decoration-wavy" href="/auth/business/reset-password">
                    Forgot Password
                </Link>
            </div>
        </form>
    );
};

export default Index;
