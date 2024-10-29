import CreateAccount from "@/components/User/Auth/CreateAccount";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Create an Account",
    description: "Tell us a bit about you. Provide your legal name, work mail and home address."
};

const Index = (): JSX.Element => {
    return (
		<CreateAccount />
	);
};

export default Index;
