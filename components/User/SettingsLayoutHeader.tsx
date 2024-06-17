"use client";

import Link from "next/link";
import { useId } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type navLinks = {
    id: string,
    routeName: string,
    route: string
};

const SettingsLayoutHeader = (): JSX.Element => {
    const pathname = usePathname();

    const links: navLinks[] = [
        {
            id: useId(),
            routeName: "Overview",
            route: "/user/settings"
        },
        {
            id: useId(),
            routeName: "Account",
            route: "/user/settings/account"
        },
        {
            id: useId(),
            routeName: "Security",
            route: "/user/settings/security"
        },
        {
            id: useId(),
            routeName: "Preference",
            route: "/user/settings/preference"
        },
    ];

    return (
        <div className="space-y-5">
            <h1 className="font-bold text-xl/10 text-black/100">
                Account Settings
            </h1>

            <ul className="flex items-center justify-between gap-4 min-w-full overflow-x-auto custom-scrollbar bg-brand-blue/[0.02] rounded-2xl py-7 px-4">
                {links.map((link: navLinks): JSX.Element => (
                    <li className="shrink-0" key={link.id}>
                        <Link className={cn("btn py-5 text-black/100 rounded-xl hover:bg-brand-blue hover:text-white", {"bg-brand-blue text-white": pathname === link.route})} href={link.route}>
                            {link.routeName}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SettingsLayoutHeader;
