const ProfileSettings = (): JSX.Element => {
    return (
        <form className="lg:w-3/5 xl:w-1/2 lg:mx-auto settings-card">
            <h2 className="text-black/100 font-medium text-2xl/10">
                Contact Information
            </h2>

            <p className="mt-1">
                Provide your legal name, home address and work mail.
            </p>

            <div className="space-y-4 mt-8">
                <label className="block" htmlFor="email">
                    <input className="input" type="email" placeholder="Email Address" name="email" />
                </label>

                <label className="block" htmlFor="homeAddress">
                    <input className="input" type="text" placeholder="Home Address" name="homeAddress" />
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
                    Update
                </button>
            </div>
        </form>
    );
};

export default ProfileSettings;
