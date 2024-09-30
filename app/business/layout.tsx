"use client";

import Link from "next/link";
import Image from "next/image";
import UserImage from "@/assets/img/user-img.jpg";
import BusinessNavLink from "@/components/Business/BusinessNavLink";
import SettingsDropdown from "@/components/User/SettingsDropdown";
import NotificationsDropdown from "@/components/User/NotificationsDropdown";
import { cn } from "@/lib/utils";
import { LayoutDashboardIcon, SearchIcon, XIcon } from "lucide-react";
import { useState, useEffect } from "react";

const BusinessLayout = ({ children }: { children: React.ReactNode; }): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);

    const [dropdownIsActive, setDropdownIsActive] = useState(false);

    const [notificationsIsActive, setNotificationIsActive] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.documentElement.classList.add("overflow-hidden");
        } else {
            document.documentElement.classList.remove("overflow-hidden");
        }
    }, [isOpen]);

    return (
        <>
            <header className="sticky top-0 z-[1024]">
                <div className="flex items-center gap-4 justify-between py-4 px-6 bg-white/100 border-b border-[rgba(241,_241,_241,_1)] lg:hidden">
                    <button className="bg-[#0c46d3]/[0.05] text-brand-blue rounded-lg p-1.5" type="button" aria-label="Toggle mobile navbar" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? (
                            <XIcon size={30} strokeWidth={0.8} />
                        ) : (
                            <LayoutDashboardIcon size={28} strokeWidth={0.8} />
                        )}
                    </button>

                    <div className="flex items-center gap-4 relative">
                        <button type="button" aria-label="Toggle notifications popup" onClick={() => {
                            setDropdownIsActive(false);
                            setNotificationIsActive(!notificationsIsActive)
                        }}>
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <circle cx="20" cy="20" r="20" fill="#0C46D3" fillOpacity="0.05" />
                                <g clipPath="url(#clip0_2475_692)">
                                    <path d="M19.9997 27.236C20.2797 27.2295 20.5483 27.1243 20.7582 26.9388C20.968 26.7534 21.1055 26.4997 21.1464 26.2227H18.8086C18.8506 26.5072 18.9945 26.7669 19.2136 26.9533C19.4327 27.1397 19.7121 27.2401 19.9997 27.236Z" fill="#0C46D3" />
                                    <path d="M26.4488 24.3691C26.0202 23.987 25.645 23.549 25.3332 23.0668C24.9929 22.4013 24.7889 21.6745 24.7332 20.9291V18.7335C24.7314 18.4668 24.7077 18.2007 24.6621 17.938C24.3123 17.868 23.9761 17.742 23.6666 17.5646C23.7846 17.9445 23.8445 18.3401 23.8444 18.738V20.9335C23.8988 21.8429 24.149 22.7297 24.5777 23.5335C24.8845 24.0197 25.2486 24.4674 25.6621 24.8668H14.2799C14.6934 24.4674 15.0575 24.0197 15.3644 23.5335C15.7931 22.7297 16.0432 21.8429 16.0977 20.9335V18.7335C16.0954 18.2191 16.1945 17.7094 16.3894 17.2334C16.5844 16.7574 16.8713 16.3245 17.2338 15.9596C17.5963 15.5946 18.0272 15.3048 18.5018 15.1066C18.9765 14.9084 19.4855 14.8058 19.9999 14.8046C20.7527 14.8052 21.4886 15.0278 22.1155 15.4446C22.0464 15.1908 22.0076 14.9298 21.9999 14.6668V14.3868C21.5358 14.1586 21.0373 14.0084 20.5244 13.9424V13.3824C20.5244 13.225 20.4618 13.0741 20.3506 12.9628C20.2393 12.8516 20.0884 12.7891 19.931 12.7891C19.7737 12.7891 19.6227 12.8516 19.5115 12.9628C19.4002 13.0741 19.3377 13.225 19.3377 13.3824V13.9646C18.1891 14.1266 17.1379 14.6987 16.3782 15.5753C15.6185 16.4518 15.2016 17.5736 15.2044 18.7335V20.9291C15.1487 21.6745 14.9447 22.4013 14.6044 23.0668C14.2981 23.5479 13.9289 23.9858 13.5066 24.3691C13.4592 24.4107 13.4212 24.462 13.3951 24.5195C13.3691 24.5769 13.3555 24.6393 13.3555 24.7024V25.3068C13.3555 25.4247 13.4023 25.5378 13.4856 25.6211C13.569 25.7045 13.682 25.7513 13.7999 25.7513H26.1555C26.2733 25.7513 26.3864 25.7045 26.4697 25.6211C26.5531 25.5378 26.5999 25.4247 26.5999 25.3068V24.7024C26.5998 24.6393 26.5863 24.5769 26.5603 24.5195C26.5342 24.462 26.4962 24.4107 26.4488 24.3691Z" fill="#0C46D3" />
                                    <path d="M25.3336 16.8898C26.5609 16.8898 27.5558 15.8948 27.5558 14.6675C27.5558 13.4402 26.5609 12.4453 25.3336 12.4453C24.1063 12.4453 23.1113 13.4402 23.1113 14.6675C23.1113 15.8948 24.1063 16.8898 25.3336 16.8898Z" fill="#EC1010" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2475_692">
                                        <rect width="16" height="16" fill="white" transform="translate(12 12)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>

                        <NotificationsDropdown isOpen={notificationsIsActive} />

                        <button type="button" aria-label="Toggle settings" onClick={() => {
                            setNotificationIsActive(false);
                            setDropdownIsActive(!dropdownIsActive);
                        }}>
                            <Image className="size-12 oject-center object-cover aspect-square rounded-full" src={UserImage} alt="Wisdom Ojimah" />
                        </button>

                        <SettingsDropdown isOpen={dropdownIsActive} />
                    </div>
                </div>

                <BusinessNavLink isOpen={isOpen} setIsOpen={setIsOpen} />
            </header>

            <div className="w-full z-50 lg:w-[calc(100%-20rem)] lg:ml-auto">
                <div className="bg-white/100 py-4 px-8 hidden lg:flex items-center justify-between gap-4 sticky z-[1024] top-0">
                    <form className="w-1/2">
                        <label className={cn("input", "w-full shrink-0 flex items-center py-0")}htmlFor="search">
                            <input className="py-3 focus:outline-none w-full" type="search" placeholder="Search" name="search" id="search" />

                            <SearchIcon className="text-[rgba(151,_151,_151,_1)]" size={18} />
                        </label>
                    </form>

                    <div className="flex items-center gap-8 relative">
                        <button type="button" aria-label="Toggle notifications popup" onClick={() => setNotificationIsActive(!notificationsIsActive)}>
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <circle cx="20" cy="20" r="20" fill="#0C46D3" fillOpacity="0.05" />
                                <g clipPath="url(#clip0_2475_692)">
                                    <path d="M19.9997 27.236C20.2797 27.2295 20.5483 27.1243 20.7582 26.9388C20.968 26.7534 21.1055 26.4997 21.1464 26.2227H18.8086C18.8506 26.5072 18.9945 26.7669 19.2136 26.9533C19.4327 27.1397 19.7121 27.2401 19.9997 27.236Z" fill="#0C46D3" />
                                    <path d="M26.4488 24.3691C26.0202 23.987 25.645 23.549 25.3332 23.0668C24.9929 22.4013 24.7889 21.6745 24.7332 20.9291V18.7335C24.7314 18.4668 24.7077 18.2007 24.6621 17.938C24.3123 17.868 23.9761 17.742 23.6666 17.5646C23.7846 17.9445 23.8445 18.3401 23.8444 18.738V20.9335C23.8988 21.8429 24.149 22.7297 24.5777 23.5335C24.8845 24.0197 25.2486 24.4674 25.6621 24.8668H14.2799C14.6934 24.4674 15.0575 24.0197 15.3644 23.5335C15.7931 22.7297 16.0432 21.8429 16.0977 20.9335V18.7335C16.0954 18.2191 16.1945 17.7094 16.3894 17.2334C16.5844 16.7574 16.8713 16.3245 17.2338 15.9596C17.5963 15.5946 18.0272 15.3048 18.5018 15.1066C18.9765 14.9084 19.4855 14.8058 19.9999 14.8046C20.7527 14.8052 21.4886 15.0278 22.1155 15.4446C22.0464 15.1908 22.0076 14.9298 21.9999 14.6668V14.3868C21.5358 14.1586 21.0373 14.0084 20.5244 13.9424V13.3824C20.5244 13.225 20.4618 13.0741 20.3506 12.9628C20.2393 12.8516 20.0884 12.7891 19.931 12.7891C19.7737 12.7891 19.6227 12.8516 19.5115 12.9628C19.4002 13.0741 19.3377 13.225 19.3377 13.3824V13.9646C18.1891 14.1266 17.1379 14.6987 16.3782 15.5753C15.6185 16.4518 15.2016 17.5736 15.2044 18.7335V20.9291C15.1487 21.6745 14.9447 22.4013 14.6044 23.0668C14.2981 23.5479 13.9289 23.9858 13.5066 24.3691C13.4592 24.4107 13.4212 24.462 13.3951 24.5195C13.3691 24.5769 13.3555 24.6393 13.3555 24.7024V25.3068C13.3555 25.4247 13.4023 25.5378 13.4856 25.6211C13.569 25.7045 13.682 25.7513 13.7999 25.7513H26.1555C26.2733 25.7513 26.3864 25.7045 26.4697 25.6211C26.5531 25.5378 26.5999 25.4247 26.5999 25.3068V24.7024C26.5998 24.6393 26.5863 24.5769 26.5603 24.5195C26.5342 24.462 26.4962 24.4107 26.4488 24.3691Z" fill="#0C46D3" />
                                    <path d="M25.3336 16.8898C26.5609 16.8898 27.5558 15.8948 27.5558 14.6675C27.5558 13.4402 26.5609 12.4453 25.3336 12.4453C24.1063 12.4453 23.1113 13.4402 23.1113 14.6675C23.1113 15.8948 24.1063 16.8898 25.3336 16.8898Z" fill="#EC1010" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2475_692">
                                        <rect width="16" height="16" fill="white" transform="translate(12 12)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>

                        <NotificationsDropdown isOpen={notificationsIsActive} />


                        <button type="button" aria-label="Toggle settings" onClick={() => setDropdownIsActive(!dropdownIsActive)}>
                            <Image className="size-12 oject-center object-cover aspect-square rounded-full" src={UserImage} alt="Wisdom Ojimah" />
                        </button>

                        <SettingsDropdown isOpen={dropdownIsActive} />
                    </div>
                </div>

                <main className="bg-[rgba(250,_250,_250,_1)] px-6 py-8 lg:px-8 min-h-screen">
                    {children}
                </main>
            </div>
        </>
    );
};

export default BusinessLayout;
