import ClientsTable from "@/components/User/ClientsTable";
import { cn } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "NestlyPay | Clients",
    description: "View your client(s) info"
};

const Index = (): JSX.Element => {
    return (
        <section className="grid gap-12">
            <div className="flex items-center gap-4 justify-between flex-wrap text-black/100">
                <h1 className="font-bold text-xl/10 text-black/100">
                    Clients
                </h1>

                <button className={cn("btn bg-white/100 border-2 border-brand-blue font-medium text-brand-blue hover:bg-brand-blue hover:text-white hover:border-white py-4 rounded-xl inline-block")} type="button">
                    Add New Clients
                </button>
            </div>

            <ClientsTable />
        </section>
    );
};

export default Index;
