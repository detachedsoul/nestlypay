import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "One Last Step",
    description: "Avoid easily guessable password, and make sure it is easy to remember."
};

const Index = (): JSX.Element => {
    return (
        <form className="w-full">
            <h1 className="text-black/100 font-medium text-2xl/10">
                One Last Step
            </h1>

            <p className="mt-1">
                Avoid easily guessable password, and make sure it is easy to remember.
            </p>

            <div className="space-y-8 mt-8">
                <label className="block" htmlFor="password">
                    <input className="input" type="password" placeholder="Password" name="password" />
                </label>

                <label className="block" htmlFor="confirmPassword">
                    <input className="input" type="password" placeholder="Confirm Password" name="confirmPassword" />
                </label>

                <button className="submit-btn" type="submit">
                    Create Account
                </button>
            </div>
        </form>
    );
};

export default Index;
