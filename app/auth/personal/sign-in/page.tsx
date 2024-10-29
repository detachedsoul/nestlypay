import LoginForm from "@/components/User/Auth/LoginForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Welcome Back",
	description: "Pick up where you left off.",
};

const Index = (): JSX.Element => {
	return (
		<LoginForm />
	);
};

export default Index;
