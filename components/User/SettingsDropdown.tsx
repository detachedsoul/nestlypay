"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserIcon, SettingsIcon, LogOutIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Dispatch, SetStateAction } from "react";

type dropdownProps = {
    isOpen: boolean;
};

const SettingsDropdown: React.FC<dropdownProps> = ({ isOpen }: dropdownProps) => {
    const pathname = usePathname();

    return (
        <div className={`bg-white absolute space-y-2 w-max right-0 top-[calc(100%+1.5rem)] z-[1024] py-4 rounded-lg transition-transform ease-in-out duration-500 shadow-2xl ${isOpen ? "translate-y-0" : "-translate-y-[200%]"}`}>
            <Link className={cn("flex items-center gap-3 font-medium hover:bg-brand-blue/10 border-l-[6px] border-transparent hover:border-brand-blue pl-4 py-2.5 text-black/100 pr-16",{"border-brand-blue bg-brand-blue/10": pathname === "/user/profile"} )} href="/user/profile">
                <UserIcon strokeWidth={1.8} />

                Profile
            </Link>

            <Link className={cn("flex items-center gap-3 font-medium hover:bg-brand-blue/10 border-l-[6px] border-transparent hover:border-brand-blue pl-4 py-2.5 text-black/100 pr-16",{"border-brand-blue bg-brand-blue/10": pathname === "/user/settings"} )} href="/user/settings">
                <SettingsIcon strokeWidth={1.8} />

                Settings
            </Link>

            <Link className="flex items-center gap-3 font-medium hover:bg-brand-blue/10 border-l-[6px] border-transparent hover:border-brand-blue pl-4 py-2.5 pr-16 mt-8" href={pathname.split("/")[1] === "user" ? "/auth/personal/sign-in" : "/auth/business"}>
                <LogOutIcon strokeWidth={1.5} />

                Sign Out
            </Link>
        </div>
    );
};

export default SettingsDropdown;
