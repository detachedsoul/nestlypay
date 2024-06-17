import Profile from "@/components/User/Profile";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "NestlyPay | User Profile",
    description: "Edit your personal information"
};

const UserProfile = (): JSX.Element => {
    return (
        <section className="grid">
            <Profile />
        </section>
    );
};

export default UserProfile;
