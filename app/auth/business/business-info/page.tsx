import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Business Information",
    description: "Provide your business name, business mail and company address."
};

const Index = (): JSX.Element => {
    return (
        <form className="w-full">
            <h1 className="text-black/100 font-medium text-2xl/10">
                Business Information
            </h1>

            <p className="mt-1">
                Provide your business name, business mail and company address.
            </p>

            <div className="space-y-8 mt-8">
                <label className="block" htmlFor="companyName">
                    <input className="input" type="text" placeholder="Company Name" name="companyName" />
                </label>

                <label className="block" htmlFor="companyEmail">
                    <input className="input" type="email" placeholder="Company Email" name="companyEmail" />
                </label>

                <label className="block" htmlFor="addressOne">
                    <input className="input" type="text" placeholder="Address One" name="addressOne" />
                </label>

                <div className="grid gap-8 lg:grid-cols-2">
                    <label className="block" htmlFor="city">
                        <input className="input" type="text" placeholder="City" name="city" />
                    </label>

                    <label className="block" htmlFor="country">
                        <select className="input-select" name="country" id="country">
                            <option>
                                Country
                            </option>

                            <option value="USA">
                                USA
                            </option>

                            <option value="Canada">
                                Canada
                            </option>
                        </select>
                    </label>
                </div>

                <div className="grid gap-8 lg:grid-cols-2">
                    <label className="block" htmlFor="postalCode">
                        <input className="input" type="text" placeholder="Postal Code" name="postalCode" />
                    </label>

                    <label className="block" htmlFor="state">
                        <select className="input-select" name="state" id="state">
                            <option>
                                State
                            </option>

                            <option value="Alabama">
                                Alabama
                            </option>

                            <option value="Quebec">
                                Quebec
                            </option>
                        </select>
                    </label>
                </div>

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
