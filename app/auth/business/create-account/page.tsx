import CreateBusinessAccount from "@/components/Business/Auth/CreateBusinessAccount";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "One Last Step",
    description: "Avoid easily guessable password, and make sure it is easy to remember."
};

const Index = (): JSX.Element => {
    return (
        <CreateBusinessAccount />
    );
};

export default Index;
