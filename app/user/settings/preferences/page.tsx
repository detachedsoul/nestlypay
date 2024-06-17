import ProfilePreferences from "@/components/User/ProfilePreferences";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "NestlyPay | User Account Preferences",
    description: "Edit your account account preferences"
};

const Preferences = (): JSX.Element => {
    return (
        <ProfilePreferences />
    );
};

export default Preferences;
