import ProfileSettings from "@/components/User/ProfileSettings";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "NestlyPay | User Account Settings",
    description: "Edit your account setting"
};

const Settings = (): JSX.Element => {
    return (
        <ProfileSettings />
    );
};

export default Settings;
