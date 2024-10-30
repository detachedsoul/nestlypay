const ProfilePreferences = (): JSX.Element => {
    return (
        <form className="lg:w-3/5 xl:w-1/2 lg:mx-auto settings-card">
            <h2 className="text-black/100 font-medium text-2xl/10">
                Payments Preferences
            </h2>

            <p className="mt-1">
                Accep payment via
            </p>

            <div className="space-y-6 mt-8">
                <div className="flex items-center justify-between gap-4">
                    <p>
                        Bank Transfer
                    </p>

                    <label className="cursor-pointer" htmlFor="bankTransfer" aria-label="Enable bank transfer">
                        <input className="input-checkbox" type="checkbox" name="bankTransfer" />
                    </label>
                </div>

                <div className="flex items-center justify-between gap-4">
                    <p>
                        Crypto Currency
                    </p>

                    <label className="cursor-pointer" htmlFor="bankTransfer" aria-label="Enable bank transfer">
                        <input className="input-checkbox" type="checkbox" name="bankTransfer" />
                    </label>
                </div>

                <div className="flex items-start justify-between gap-4">
                    <p>
                        Transfer Receipt
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <label className="cursor-pointer" htmlFor="sendToMe" aria-label="Send receipt to me">
                                <input className="input-checkbox" type="checkbox" name="sendToMe" />
                            </label>

                            <p>
                                Send to me
                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            <label className="cursor-pointer" htmlFor="sendToCustomer" aria-label="Send receipt to customer">
                                <input className="input-checkbox" type="checkbox" name="sendToCustomer" />
                            </label>

                            <p>
                                Send to customer
                            </p>
                        </div>
                    </div>
                </div>

                <button className="submit-btn" type="submit">
                    Update
                </button>
            </div>
        </form>
    );
};

export default ProfilePreferences;
