import TransactionHistory from "@/components/User/TransactionHistory";
import { cn } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "NestlyPay | Transaction History",
    description: "View your transaction history"
};

const Index = (): JSX.Element => {
    return (
        <section className="space-y-10">
            <h1 className="font-bold text-xl/10 text-black/100">
                My Activities
            </h1>

            <div className="space-y-8">
                <div className="flex items-center justify-between gap-16 min-w-full overflow-x-auto custom-scrollbar">
                    <div className="flex items-center gap-6 shrink-0">
                        <div className="bg-brand-red text-white w-10 h-10 rounded-full font-black grid place-content-center">
                            D
                        </div>

                        <div className="space-y-2">
                            <p className="text-black/100">
                                Wisdom Ojimah
                            </p>

                            <p className="text-sm">
                                You just added a client
                            </p>
                        </div>
                    </div>

                    <p className="text-black/100 shrink-0">
                        07-07-2022
                    </p>
                </div>

                <div className="flex items-center justify-between gap-16 min-w-full overflow-x-auto custom-scrollbar">
                    <div className="flex items-center gap-6 shrink-0">
                        <div className="bg-brand-yellow text-white w-10 h-10 rounded-full font-black grid place-content-center">
                            D
                        </div>

                        <div className="space-y-2">
                            <p className="text-black/100">
                                Wisdom Ojimah
                            </p>

                            <p className="text-sm">
                                You just created an invoice
                            </p>
                        </div>
                    </div>

                    <p className="text-black/100 shrink-0">
                        07-07-2022
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Index;
