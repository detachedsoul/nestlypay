import PersonalInfo from "@/components/Business/Auth/PersonalInfo";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Personal Information",
	description: "Provide your legal name and work mail.",
};

const Index = (): JSX.Element => {
	return (
		<PersonalInfo />
	);
};

export default Index;
