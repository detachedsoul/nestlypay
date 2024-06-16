import AccountHistory from "@/components/User/AccountHistory";
import { cn } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "NestlyPay | Invoice History",
    description: "View your invoice history"
};

const Index = (): JSX.Element => {
    return (
        <section className="grid gap-12">
            <div className="flex items-center gap-4 justify-between flex-wrap text-black/100">
                <h1 className="font-bold text-xl/10 text-black/100">
                    Account History
                </h1>

                <button className={cn("btn bg-white/100 border-2 border-brand-blue font-medium text-brand-blue hover:bg-brand-blue hover:text-white hover:border-white py-4 rounded-xl inline-block")} type="button">
                    Download CSV
                </button>
            </div>

            <AccountHistory />
        </section>
    );
};

export default Index;
