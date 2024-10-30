const ProfileAccountSettings = (): JSX.Element => {
    return (
        <form className="lg:w-3/5 xl:w-1/2 lg:mx-auto settings-card">
            <h2 className="text-black/100 font-medium text-2xl/10">
                Banking Info
            </h2>

            <p className="mt-1">
                The name on your bank account should be the same as the one you filled in to ensure easy validation.
            </p>

            <div className="space-y-4 mt-8">
                <label className="block" htmlFor="bankName">
                    <input className="input" type="text" placeholder="Bank Name" name="bankName" />
                </label>

                <label className="block" htmlFor="accountNumber">
                    <input className="input" type="text" placeholder="Account Number" name="accountNumber" />
                </label>

                <label className="block" htmlFor="accountName">
                    <input className="input" type="text" placeholder="Account Name" name="accountName" />
                </label>

                <button className="submit-btn" type="submit">
                    Update
                </button>
            </div>
        </form>
    );
};

export default ProfileAccountSettings;
