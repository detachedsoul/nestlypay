import ProfileSettings from "@/components/User/ProfileSettings";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "NestlyPay | User Profile Settings",
    description: "Edit your profile setting"
};

const Settings = (): JSX.Element => {
    return (
        <ProfileSettings />
    );
};

export default Settings;
