import BusinessInfo from "@/components/Business/Auth/BusinessInfo";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Business Information",
    description: "Provide your business name, business mail and company address."
};

const Index = (): JSX.Element => {
    return (
		<BusinessInfo />
	);
};

export default Index;
