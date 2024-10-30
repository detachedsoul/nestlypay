import Link from "next/link";
import IndexCards from "@/components/User/IndexCards";
import TransactionHistory from "@/components/User/TransactionHistory";
import Statistics from "@/components/User/Statistics";
import IndexDatePicker from "@/components/User/IndexDatePicker";
import WelcomeText from "@/components/WelcomeText";
import { CircleAlertIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "NestlyPay | Business Dashboard",
    description: "NestlyPay - Connecting business for simplified payments"
};

const Index = (): JSX.Element => {
    return (
        <>
            <WelcomeText />

            <div className="space-y-16 mt-12">
                <IndexCards />

                <section className="space-y-7">
                    <div className="flex items-center flex-wrap gap-4 justify-between text-black/100">
                        <h2 className="font-bold text-xl/10 flex items-center gap-2">
                            Statistics

                            <CircleAlertIcon size={18} strokeWidth={1.5} />
                        </h2>

                        <IndexDatePicker />
                    </div>

                    <Statistics />
                </section>

                <section className="grid gap-7">
                    <div className="flex items-center gap-4 justify-between text-black/100">
                        <h2 className="font-bold text-xl/10 text-black/100">
                            Transaction History
                        </h2>

                        <Link className="underline-offset-8 hover:underline hover:decoration-wavy text-black/100" href="/business/transactions">
                            View All
                        </Link>
                    </div>

                    <TransactionHistory />
                </section>
            </div>
        </>
    );
};

export default Index;
