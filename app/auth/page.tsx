import Link from "next/link";
import Image from "next/image";
import PersonalAuth from "@/assets/img/auth-personal.svg";
import BusinessAuth from "@/assets/img/auth-business.svg";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Choose your account type",
    description: "Choose an account type to continue"
};

const Index = (): JSX.Element => {
    return (
        <div className="w-full">
            <h1 className="text-black/100 font-medium text-2xl/10">
                Choose your account type
            </h1>

            <p className="mt-1">
                Get a downloadable receipt on every invoice payment as a reference to help your business in management and accounting.
            </p>

            <div className="space-y-8 mt-12">
                <Link className="flex items-center gap-4 rounded-xl border-[1.5px] border-transparent bg-white/100 shadow-[0px_5px_10px_0px_rgba(0,_0,_0,_0.05)] hover:shadow-none hover:border-brand-blue/100 hover:bg-brand-blue/10 transition-colors duration-300 ease-in-out p-2" href="/auth/business">
                    <Image className="w-[3.6rem] h-[3.6rem] lg:w-12 lg:h-12" src={BusinessAuth} alt="" />

                    <div>
                        <p className="text-black/100 font-medium">
                            Business
                        </p>

                        <p>
                            Create invoices as a business.
                        </p>
                    </div>
                </Link>

                <Link className="flex items-center gap-4 rounded-xl border-[1.5px] border-transparent bg-white/100 shadow-[0px_5px_10px_0px_rgba(0,_0,_0,_0.05)] hover:shadow-none hover:border-brand-blue/100 hover:bg-brand-blue/10 transition-colors duration-300 ease-in-out p-2" href="/auth/personal">
                    <Image className="w-[3.6rem] h-[3.6rem] lg:w-12 lg:h-12" src={PersonalAuth} alt="" />

                    <div>
                        <p className="text-black/100 font-medium">
                            Personal
                        </p>

                        <p>
                            Create a one-time invoice as a freelancer.
                        </p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Index;
