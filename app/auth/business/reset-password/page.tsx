import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Reset Password",
    description: "Did you forget your password ? Let’s help you reset it."
};

const Index = (): JSX.Element => {
    return (
        <form className="w-full">
            <h1 className="text-black/100 font-medium text-2xl/10">
                Forgot Password?
            </h1>

            <p className="mt-1">
                Did you forget your password ? Let’s help you reset it.
            </p>

            <div className="space-y-8 mt-8">
                <label className="block" htmlFor="email">
                    <input className="input" type="email" placeholder="Email Address" name="email" />
                </label>

                <button className="submit-btn" type="submit">
                    Get Reset Link
                </button>

                <p className="font-medium text-black/100">
                    Back to <Link className="text-brand-blue underline-offset-8 hover:underline hover:decoration-wavy" href="/auth/business">Sign In</Link>
                </p>
            </div>
        </form>
    );
};

export default Index;
