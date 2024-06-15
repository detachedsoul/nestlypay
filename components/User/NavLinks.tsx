"use client";

import Image from "next/image";
import Link from "next/link";
import DashboardLogo from "@/assets/img/dashboard-logo.png";
import { useId, useEffect, Dispatch, SetStateAction } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type link = {
    id: string;
    route: string;
    routeName: string;
    icon: JSX.Element;
};

type navLink = {
    id: string;
    route?: string;
    routeName?: string;
    icon?: JSX.Element;
    categoryName?: string;
    links?: link[];
};

type NavLinks = {
    isOpen: boolean,
    setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const NavLinks: React.FC<NavLinks> = ({isOpen, setIsOpen}: NavLinks) => {
    const pathname = usePathname();

    useEffect(() => {
        setIsOpen(false);

        // For some reasons Nextjs doesn't scroll to the top of the page when you navigate to a new page. This fixes it
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, [pathname]);

    const links: navLink[] = [
        {
            id: useId(),
            route: "/user",
            routeName: "Home",
            icon: (
                <svg width="35" height="35" viewBox="0 0 35 35" fill="none">
                    <circle cx="17.5" cy="17.5" r="17.5" fill="#0C46D3" fillOpacity="0.05" />
                    <g clipPath="url(#clip0_2475_446)">
                        <path d="M22.5208 22.95H19.8958C19.493 22.95 19.1667 22.6286 19.1667 22.2321V19.6474C19.1667 19.3301 18.9056 19.0731 18.5833 19.0731H17.4167C17.0944 19.0731 16.8333 19.3301 16.8333 19.6474V22.2321C16.8333 22.6286 16.507 22.95 16.1042 22.95H13.4792C13.0764 22.95 12.75 22.6286 12.75 22.2321V16.7507C12.75 16.0904 13.0574 15.4667 13.5839 15.0583L17.729 11.8422C17.888 11.7193 18.112 11.7193 18.2707 11.8422L22.4164 15.0583C22.9429 15.4667 23.25 16.0901 23.25 16.7501V22.2321C23.25 22.6286 22.9236 22.95 22.5208 22.95Z" fill="#0C46D3" />
                    </g>
                    <defs>
                        <clipPath id="clip0_2475_446">
                            <rect width="12" height="12" fill="white" transform="translate(12 11)" />
                        </clipPath>
                    </defs>
                </svg>
            )
        },
        {
            id: useId(),
            categoryName: "ACCOUNT",
            links: [
                {
                    id: useId(),
                    route: "/user/my-activities",
                    routeName: "My Activities",
                    icon: (
                        <svg width="35" height="35" viewBox="0 0 35 35" fill="none">
                            <circle cx="17.5" cy="17.5" r="17.5" fill="#0C46D3" fillOpacity="0.05" />
                            <g clipPath="url(#clip0_2475_437)">
                                <path d="M10.9395 12.2422V14.6664H13.3637" stroke="#0C46D3" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M10.333 18.0007C10.333 21.6826 13.3178 24.6673 16.9997 24.6673C20.6816 24.6673 23.6663 21.6826 23.6663 18.0007C23.6663 14.3188 20.6816 11.334 16.9997 11.334C14.5323 11.334 12.378 12.6744 11.2253 14.6667" stroke="#0C46D3" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M17.0014 14L17.001 18.0029L19.8274 20.8294" stroke="#0C46D3" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_2475_437">
                                    <rect width="16" height="16" fill="white" transform="translate(9 10)" />
                                </clipPath>
                            </defs>
                        </svg>
                    )
                },
                {
                    id: useId(),
                    route: "/user/my-invoices",
                    routeName: "My Invoices",
                    icon: (
                        <svg width="35" height="35" viewBox="0 0 35 35" fill="none">
                            <circle cx="17.5" cy="17.5" r="17.5" fill="#0C46D3" fillOpacity="0.05" />
                            <mask className="[mask-type:alpha]" id="mask0_2475_462" maskUnits="userSpaceOnUse" x="9" y="10" width="16" height="16">
                                <rect x="9" y="10" width="16" height="16" fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_2475_462)">
                                <path d="M13.8004 16.0004H20.2004V14.8004H13.8004V16.0004ZM13.8004 21.2004H18.6004V20.0004H13.8004V21.2004ZM13.8004 18.6004H20.2004V17.4004H13.8004V18.6004ZM12.6004 23.6004C12.2671 23.6004 11.9839 23.4836 11.7508 23.25C11.5172 23.0169 11.4004 22.7337 11.4004 22.4004V13.6004C11.4004 13.2671 11.5172 12.9839 11.7508 12.7508C11.9839 12.5172 12.2671 12.4004 12.6004 12.4004H21.4004C21.7337 12.4004 22.0169 12.5172 22.25 12.7508C22.4836 12.9839 22.6004 13.2671 22.6004 13.6004V22.4004C22.6004 22.7337 22.4836 23.0169 22.25 23.25C22.0169 23.4836 21.7337 23.6004 21.4004 23.6004H12.6004Z" fill="#0C46D3" />
                            </g>
                        </svg>
                    )
                },
            ]
        },
        {
            id: useId(),
            categoryName: "TRANSACTIONS",
            links: [
                {
                    id: useId(),
                    route: "/user/invoice-history",
                    routeName: "Invoice History",
                    icon: (
                        <svg width="35" height="35" viewBox="0 0 35 35" fill="none">
                            <circle cx="17.5" cy="17.5" r="17.5" fill="#0C46D3" fillOpacity="0.05" />
                            <mask className="[mask-type:alpha]" id="mask0_2475_454" maskUnits="userSpaceOnUse" x="9" y="10" width="16" height="16">
                                <rect x="9" y="10" width="16" height="16" fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_2475_454)">
                                <path d="M16.25 22.0004C16.25 22.3449 16.2863 22.6865 16.3588 23.0252C16.4308 23.3644 16.5447 23.6895 16.7004 24.0004H11.734C11.3452 24.0004 11.0145 23.8644 10.742 23.5924C10.47 23.3199 10.334 22.9892 10.334 22.6004V15.434C10.334 15.0447 10.47 14.714 10.742 14.442C11.0145 14.17 11.3452 14.034 11.734 14.034H14.234V12.734C14.234 12.3452 14.37 12.0145 14.642 11.742C14.914 11.47 15.2447 11.334 15.634 11.334H18.3668C18.7561 11.334 19.0868 11.47 19.3588 11.742C19.6308 12.0145 19.7668 12.3452 19.7668 12.734V14.034H22.2668C22.6556 14.034 22.9863 14.17 23.2588 14.442C23.5308 14.714 23.6668 15.0447 23.6668 15.434V18.0668C23.278 17.8001 22.8559 17.5975 22.4004 17.4588C21.9449 17.3196 21.4783 17.25 21.0004 17.25C19.6895 17.25 18.57 17.714 17.642 18.642C16.714 19.57 16.25 20.6895 16.25 22.0004ZM15.634 14.034H18.3668V12.734H15.634V14.034ZM21.0004 25.3508C20.0783 25.3508 19.2895 25.0228 18.634 24.3668C17.978 23.7113 17.65 22.9225 17.65 22.0004C17.65 21.0671 17.978 20.2753 18.634 19.6252C19.2895 18.9751 20.0783 18.65 21.0004 18.65C21.9337 18.65 22.7255 18.9751 23.3756 19.6252C24.0257 20.2753 24.3508 21.0671 24.3508 22.0004C24.3508 22.9225 24.0228 23.7113 23.3668 24.3668C22.7113 25.0228 21.9225 25.3508 21.0004 25.3508ZM22.1004 23.6836L22.5668 23.2172L21.2836 21.9508V20.0172H20.634V22.2004L22.1004 23.6836Z" fill="#0C46D3" />
                            </g>
                        </svg>
                    )
                },
                {
                    id: useId(),
                    route: "/user/clients",
                    routeName: "Client",
                    icon: (
                        <svg width="35" height="35" viewBox="0 0 35 35" fill="none">
                            <circle cx="17.5" cy="17.5" r="17.5" fill="#0C46D3" fillOpacity="0.05" />
                            <mask className="[mask-type:alpha]" id="mask0_2475_470" maskUnits="userSpaceOnUse" x="9" y="10" width="16" height="16">
                                <rect x="9" y="10" width="16" height="16" fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_2475_470)">
                                <path d="M12.934 21.334C13.5004 20.8673 14.1308 20.5172 14.8252 20.2836C15.5196 20.0505 16.2447 19.934 17.0004 19.934C17.7561 19.934 18.4812 20.0505 19.1756 20.2836C19.87 20.5172 20.506 20.8673 21.0836 21.334C21.4505 20.878 21.7396 20.3695 21.9508 19.8084C22.1615 19.2473 22.2668 18.6447 22.2668 18.0004C22.2668 16.5337 21.7559 15.2892 20.734 14.2668C19.7116 13.2449 18.4671 12.734 17.0004 12.734C15.5449 12.734 14.3033 13.2449 13.2756 14.2668C12.2479 15.2892 11.734 16.5337 11.734 18.0004C11.734 18.6447 11.8423 19.2473 12.0588 19.8084C12.2753 20.3695 12.5671 20.878 12.934 21.334ZM17.0004 18.7004C16.3449 18.7004 15.7895 18.4727 15.334 18.0172C14.878 17.5617 14.65 17.0063 14.65 16.3508C14.65 15.6948 14.878 15.1391 15.334 14.6836C15.7895 14.2281 16.3449 14.0004 17.0004 14.0004C17.6559 14.0004 18.2113 14.2281 18.6668 14.6836C19.1228 15.1391 19.3508 15.6948 19.3508 16.3508C19.3508 17.0063 19.1228 17.5617 18.6668 18.0172C18.2113 18.4727 17.6559 18.7004 17.0004 18.7004ZM17.0004 24.6668C16.0783 24.6668 15.2116 24.4919 14.4004 24.142C13.5892 23.7921 12.8836 23.3172 12.2836 22.7172C11.6836 22.1172 11.2087 21.4116 10.8588 20.6004C10.5089 19.7892 10.334 18.9225 10.334 18.0004C10.334 17.0783 10.5089 16.2116 10.8588 15.4004C11.2087 14.5892 11.6836 13.8836 12.2836 13.2836C12.8836 12.6836 13.5892 12.2087 14.4004 11.8588C15.2116 11.5089 16.0783 11.334 17.0004 11.334C17.9225 11.334 18.7892 11.5089 19.6004 11.8588C20.4116 12.2087 21.1172 12.6836 21.7172 13.2836C22.3172 13.8836 22.7921 14.5892 23.142 15.4004C23.4919 16.2116 23.6668 17.0783 23.6668 18.0004C23.6668 18.9225 23.4919 19.7892 23.142 20.6004C22.7921 21.4116 22.3172 22.1172 21.7172 22.7172C21.1172 23.3172 20.4116 23.7921 19.6004 24.142C18.7892 24.4919 17.9225 24.6668 17.0004 24.6668Z" fill="#0C46D3" />
                            </g>
                        </svg>
                    )
                },
                {
                    id: useId(),
                    route: "/user/payouts",
                    routeName: "Payouts",
                    icon: (
                        <svg width="35" height="35" viewBox="0 0 35 35" fill="none">
                            <circle cx="17.5" cy="17.5" r="17.5" fill="#0C46D3" fillOpacity="0.05" />
                            <mask className="[mask-type:alpha]" id="mask0_2475_478" maskUnits="userSpaceOnUse" x="10" y="9" width="16" height="16">
                                <rect x="10" y="9" width="16" height="16" fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_2475_478)">
                                <path d="M13.333 20.3327V15.666H14.6663V20.3327H13.333ZM17.333 20.3327V15.666H18.6663V20.3327H17.333ZM11.333 22.9993V21.666H24.6663V22.9993H11.333ZM21.333 20.3327V15.666H22.6663V20.3327H21.333ZM11.333 14.3327V12.9993L17.9997 9.66602L24.6663 12.9993V14.3327H11.333ZM14.2997 12.9993H21.6997L17.9997 11.166L14.2997 12.9993Z" fill="#0C46D3" />
                            </g>
                        </svg>
                    )
                },
            ]
        }
    ];

    return (
        <div className={cn("fixed w-full overflow-y-auto h-[calc(100%-4.55rem)] transition-all ease-in-out duration-500 z-50 custom-scrollbar lg:w-80 lg:bottom-0 lg:h-full lg:block", { "bottom-0": isOpen, "-bottom-full": !isOpen })}>
            <div className="px-[10%] sticky top-0 hidden bg-white/100 py-4 lg:block">
                <div className="flex items-center gap-4">
                    <Image className="w-14 h-auto" src={DashboardLogo} alt="NestlyPay" quality={100} />

                    <div className="-space-y-1">
                        <p className="font-medium text-black/100 text-lg/8">
                            Wisdom Ojimah
                        </p>

                        <p className="text-sm">
                            ojimah@nestlypay.co
                        </p>
                    </div>
                </div>
            </div>

            <nav className="grid gap-8 lg:pt-8 pb-5 bg-white/100">
                {links.map((navLink: navLink): JSX.Element =>
                    navLink?.categoryName ? (
                        <div className="space-y-4" key={navLink.id}>
                            <p className="font-medium text-black/50 text-xs/6 px-[calc(1.5rem+6px)] lg:px-[calc(2rem+6px)]">
                                {navLink.categoryName}
                            </p>

                            <ul className="grid gap-1">
                                {navLink!.links!.map((link: link): JSX.Element => (
                                    <li key={link.id}>
                                        <Link className={
                                            cn(
                                                "dashboard-link", {
                                                "bg-dashboard-navlink border-l-[6px] border-brand-blue": pathname === link.route
                                            }
                                            )
                                        } href={link.route}>
                                            {link.icon}

                                            {link.routeName}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ) : (
                        <Link className={
                            cn(
                                "dashboard-link", {
                                "bg-dashboard-navlink border-l-[6px] border-brand-blue": pathname === navLink.route
                            })
                        } href={navLink.route ? navLink.route : ""} key={navLink.id}>
                            {navLink.icon}

                            {navLink.routeName}
                        </Link>
                    )
                )}
            </nav>
        </div>
    );
};

export default NavLinks;
