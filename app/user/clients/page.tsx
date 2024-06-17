import ClientsTable from "@/components/User/ClientsTable";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "NestlyPay | Clients",
    description: "View your client(s) info"
};

const Index = (): JSX.Element => {
    return (
        <section className="grid gap-12">
            <ClientsTable />
        </section>
    );
};

export default Index;
