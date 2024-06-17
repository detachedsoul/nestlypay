import ProfileSecuritySettings from "@/components/User/ProfileSecuritySettings";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "NestlyPay | User Security Settings",
    description: "Edit your account security setting"
};

const Security = (): JSX.Element => {
    return (
        <ProfileSecuritySettings />
    );
};

export default Security;
