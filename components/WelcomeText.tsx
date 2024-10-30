"use client";

import Link from "next/link";
import useAuth from "@/hooks/useAuth";
import { usePathname } from "next/navigation";

const WelcomeText = () => {
    const { authInfo } = useAuth();

    const pathname = usePathname();

    return (
        <div className="flex items-center gap-6 flex-wrap justify-between">
            <div>
                <h1 className="text-black/100 font-bold text-2xl/10">
                    Welcome to NestlyPay, {authInfo?.name?.split(" ")[0]} 🎊
                </h1>

                <p>
                    Here are your invoices overview
                </p>
            </div>

            <Link className="btn bg-white/100 border-2 border-brand-blue font-medium text-brand-blue hover:bg-brand-blue hover:text-white hover:border-white py-4 rounded-xl inline-block" href={`${pathname}/create-invoice`}>
                Create Invoice
            </Link>
        </div>
    );
};

export default WelcomeText;
