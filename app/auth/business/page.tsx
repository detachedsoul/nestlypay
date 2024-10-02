import LoginForm from "@/components/Business/LoginForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Welcome Back",
	description: "Pick up where you left off.",
};


const Index = async (): Promise<JSX.Element> => {
	return (
		<LoginForm />
	);
};

export default Index;
