import Link from "next/link";
import IndexCards from "@/components/User/IndexCards";
import TransactionHistory from "@/components/User/TransactionHistory";
import Statistics from "@/components/User/Statistics";
import IndexDatePicker from "@/components/User/IndexDatePicker";
import { CircleAlertIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "NestlyPay | User Dashboard",
    description: "NestlyPay - Connecting business for simplified payments"
};

const Index = (): JSX.Element => {
    return (
        <>
            <div className="flex items-center gap-6 flex-wrap justify-between">
                <div>
                    <h1 className="text-black/100 font-bold text-xl/10">
                        Welcome to NestlyPay, Wisdom 🎊
                    </h1>

                    <p>
                        Here are your invoices overview
                    </p>
                </div>

                <Link className={cn("btn bg-white/100 border-2 border-brand-blue font-medium text-brand-blue hover:bg-brand-blue hover:text-white hover:border-white py-4 rounded-xl inline-block")} href="/user">
                    Create Invoice
                </Link>
            </div>

            <div className="space-y-16 mt-12">
                <IndexCards />

                <section className="space-y-7">
                    <div className="flex items-center gap-4 justify-between text-black/100">
                        <h2 className="font-bold text-xl/10 flex items-center gap-2">
                            Statistics

                            <CircleAlertIcon size={18} strokeWidth={1.5} />
                        </h2>

                        <IndexDatePicker />
                    </div>

                    <Statistics />
                </section>

                <section className="space-y-7">
                    <div className="flex items-center gap-4 justify-between text-black/100">
                        <h2 className="font-bold text-xl/10 text-black/100">
                            Transaction History
                        </h2>

                        <Link className="underline-offset-8 hover:underline hover:decoration-wavy text-black/100" href="/user/transactions">
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
