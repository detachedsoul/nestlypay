import ProfileAccountSettings from "@/components/User/ProfileAccountSettings";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "NestlyPay | User Account Settings",
    description: "Edit your account setting"
};

const Account = (): JSX.Element => {
    return (
        <ProfileAccountSettings />
    );
};

export default Account;
