const ProfileSecuritySettings = (): JSX.Element => {
    return (
        <form className="lg:w-3/5 xl:w-1/2 lg:mx-auto settings-card">
            <h2 className="text-black/100 font-medium text-2xl/10">
                Security Setup
            </h2>

            <p className="mt-1">
                Avoid using easily guessable password, and make sure it is easy to remember.
            </p>

            <div className="space-y-4 mt-8">
                <label className="block" htmlFor="oldPassword">
                    <input className="input" type="password" placeholder="Old Password" name="oldPassword" />
                </label>

                <label className="block" htmlFor="newPassword">
                    <input className="input" type="text" placeholder="New Password" name="newPassword" />
                </label>

                <label className="block" htmlFor="confirmPassword">
                    <input className="input" type="text" placeholder="Confirm Password" name="confirmPassword" />
                </label>

                <button className="submit-btn" type="submit">
                    Update
                </button>
            </div>
        </form>
    );
};

export default ProfileSecuritySettings;
