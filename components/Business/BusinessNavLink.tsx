"use client";

import Image from "next/image";
import Link from "next/link";
import DashboardLogo from "@/assets/img/dashboard-logo.png";
import { useId, useEffect, Dispatch, SetStateAction } from "react";
import { usePathname, useSelectedLayoutSegments } from "next/navigation";
import { cn } from "@/lib/utils";

type link = {
	id: string;
	route: string;
	routeName: string;
	icon: JSX.Element;
	relatedLinks?: string[];
};

type navLink = {
	id: string;
	route?: string;
	routeName?: string;
	icon?: JSX.Element;
	categoryName?: string;
	links?: link[];
	relatedLinks?: string[];
};

type BusinessNavLink = {
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const BusinessNavLink: React.FC<BusinessNavLink> = ({
	isOpen,
	setIsOpen,
}: BusinessNavLink) => {
	const pathname = usePathname();

	const segment = useSelectedLayoutSegments();

	console.log(pathname, segment);

	useEffect(() => {
		setIsOpen(false);

		// For some reasons Nextjs doesn't scroll to the top of the page when you navigate to a new page. This fixes it
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}, [pathname]);

	const links: navLink[] = [
		{
			id: useId(),
			route: "/user",
			routeName: "Home",
			icon: (
				<svg
					width="35"
					height="35"
					viewBox="0 0 35 35"
					fill="none"
				>
					<circle
						cx="17.5"
						cy="17.5"
						r="17.5"
						fill="#0C46D3"
						fillOpacity="0.05"
					/>
					<g clipPath="url(#clip0_2475_446)">
						<path
							d="M22.5208 22.95H19.8958C19.493 22.95 19.1667 22.6286 19.1667 22.2321V19.6474C19.1667 19.3301 18.9056 19.0731 18.5833 19.0731H17.4167C17.0944 19.0731 16.8333 19.3301 16.8333 19.6474V22.2321C16.8333 22.6286 16.507 22.95 16.1042 22.95H13.4792C13.0764 22.95 12.75 22.6286 12.75 22.2321V16.7507C12.75 16.0904 13.0574 15.4667 13.5839 15.0583L17.729 11.8422C17.888 11.7193 18.112 11.7193 18.2707 11.8422L22.4164 15.0583C22.9429 15.4667 23.25 16.0901 23.25 16.7501V22.2321C23.25 22.6286 22.9236 22.95 22.5208 22.95Z"
							fill="#0C46D3"
						/>
					</g>
					<defs>
						<clipPath id="clip0_2475_446">
							<rect
								width="12"
								height="12"
								fill="white"
								transform="translate(12 11)"
							/>
						</clipPath>
					</defs>
				</svg>
			),
			relatedLinks: ["/business/transactions"],
		},
		{
			id: useId(),
			categoryName: "ACCOUNT",
			links: [
				{
					id: useId(),
					route: "/business/my-models",
					routeName: "My Models",
					icon: (
						<svg
							width="35"
							height="35"
							viewBox="0 0 35 35"
							fill="none"
						>
							<circle
								cx="17.5"
								cy="17.5"
								r="17.5"
								fill="#0C46D3"
								fillOpacity="0.05"
							/>
							<mask
								className="[mask-type:alpha]"
								id="mask0_2475_462"
								maskUnits="userSpaceOnUse"
								x="9"
								y="10"
								width="16"
								height="16"
							>
								<rect
									x="9"
									y="10"
									width="16"
									height="16"
									fill="#D9D9D9"
								/>
							</mask>
							<g mask="url(#mask0_2475_462)">
								<path
									d="M13.8004 16.0004H20.2004V14.8004H13.8004V16.0004ZM13.8004 21.2004H18.6004V20.0004H13.8004V21.2004ZM13.8004 18.6004H20.2004V17.4004H13.8004V18.6004ZM12.6004 23.6004C12.2671 23.6004 11.9839 23.4836 11.7508 23.25C11.5172 23.0169 11.4004 22.7337 11.4004 22.4004V13.6004C11.4004 13.2671 11.5172 12.9839 11.7508 12.7508C11.9839 12.5172 12.2671 12.4004 12.6004 12.4004H21.4004C21.7337 12.4004 22.0169 12.5172 22.25 12.7508C22.4836 12.9839 22.6004 13.2671 22.6004 13.6004V22.4004C22.6004 22.7337 22.4836 23.0169 22.25 23.25C22.0169 23.4836 21.7337 23.6004 21.4004 23.6004H12.6004Z"
									fill="#0C46D3"
								/>
							</g>
						</svg>
					),
				},
				{
					id: useId(),
					route: "/business/my-activities",
					routeName: "My Activities",
					icon: (
						<svg
							width="35"
							height="35"
							viewBox="0 0 35 35"
							fill="none"
						>
							<circle
								cx="17.5"
								cy="17.5"
								r="17.5"
								fill="#0C46D3"
								fillOpacity="0.05"
							/>
							<g clipPath="url(#clip0_2475_437)">
								<path
									d="M10.9395 12.2422V14.6664H13.3637"
									stroke="#0C46D3"
									strokeWidth="1.66667"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M10.333 18.0007C10.333 21.6826 13.3178 24.6673 16.9997 24.6673C20.6816 24.6673 23.6663 21.6826 23.6663 18.0007C23.6663 14.3188 20.6816 11.334 16.9997 11.334C14.5323 11.334 12.378 12.6744 11.2253 14.6667"
									stroke="#0C46D3"
									strokeWidth="1.66667"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M17.0014 14L17.001 18.0029L19.8274 20.8294"
									stroke="#0C46D3"
									strokeWidth="1.66667"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</g>
							<defs>
								<clipPath id="clip0_2475_437">
									<rect
										width="16"
										height="16"
										fill="white"
										transform="translate(9 10)"
									/>
								</clipPath>
							</defs>
						</svg>
					),
				},
			],
		},
		{
			id: useId(),
			categoryName: "TRANSACTIONS",
			links: [
				{
					id: useId(),
					route: "/business/invoice-history",
					routeName: "Invoice History",
					icon: (
						<svg
							width="35"
							height="35"
							viewBox="0 0 35 35"
							fill="none"
						>
							<circle
								cx="17.5"
								cy="17.5"
								r="17.5"
								fill="#0C46D3"
								fillOpacity="0.05"
							/>
							<mask
								className="[mask-type:alpha]"
								id="mask0_2475_454"
								maskUnits="userSpaceOnUse"
								x="9"
								y="10"
								width="16"
								height="16"
							>
								<rect
									x="9"
									y="10"
									width="16"
									height="16"
									fill="#D9D9D9"
								/>
							</mask>
							<g mask="url(#mask0_2475_454)">
								<path
									d="M16.25 22.0004C16.25 22.3449 16.2863 22.6865 16.3588 23.0252C16.4308 23.3644 16.5447 23.6895 16.7004 24.0004H11.734C11.3452 24.0004 11.0145 23.8644 10.742 23.5924C10.47 23.3199 10.334 22.9892 10.334 22.6004V15.434C10.334 15.0447 10.47 14.714 10.742 14.442C11.0145 14.17 11.3452 14.034 11.734 14.034H14.234V12.734C14.234 12.3452 14.37 12.0145 14.642 11.742C14.914 11.47 15.2447 11.334 15.634 11.334H18.3668C18.7561 11.334 19.0868 11.47 19.3588 11.742C19.6308 12.0145 19.7668 12.3452 19.7668 12.734V14.034H22.2668C22.6556 14.034 22.9863 14.17 23.2588 14.442C23.5308 14.714 23.6668 15.0447 23.6668 15.434V18.0668C23.278 17.8001 22.8559 17.5975 22.4004 17.4588C21.9449 17.3196 21.4783 17.25 21.0004 17.25C19.6895 17.25 18.57 17.714 17.642 18.642C16.714 19.57 16.25 20.6895 16.25 22.0004ZM15.634 14.034H18.3668V12.734H15.634V14.034ZM21.0004 25.3508C20.0783 25.3508 19.2895 25.0228 18.634 24.3668C17.978 23.7113 17.65 22.9225 17.65 22.0004C17.65 21.0671 17.978 20.2753 18.634 19.6252C19.2895 18.9751 20.0783 18.65 21.0004 18.65C21.9337 18.65 22.7255 18.9751 23.3756 19.6252C24.0257 20.2753 24.3508 21.0671 24.3508 22.0004C24.3508 22.9225 24.0228 23.7113 23.3668 24.3668C22.7113 25.0228 21.9225 25.3508 21.0004 25.3508ZM22.1004 23.6836L22.5668 23.2172L21.2836 21.9508V20.0172H20.634V22.2004L22.1004 23.6836Z"
									fill="#0C46D3"
								/>
							</g>
						</svg>
					),
					relatedLinks: [`/business/invoice-history/${segment[1]}`],
				},
				{
					id: useId(),
					route: "/business/clients",
					routeName: "Clients",
					icon: (
						<svg
							width="35"
							height="35"
							viewBox="0 0 35 35"
							fill="none"
						>
							<circle
								cx="17.5"
								cy="17.5"
								r="17.5"
								fill="#0C46D3"
								fillOpacity="0.05"
							/>
							<mask
								className="[mask-type:alpha]"
								id="mask0_2475_470"
								maskUnits="userSpaceOnUse"
								x="9"
								y="10"
								width="16"
								height="16"
							>
								<rect
									x="9"
									y="10"
									width="16"
									height="16"
									fill="#D9D9D9"
								/>
							</mask>
							<g mask="url(#mask0_2475_470)">
								<path
									d="M12.934 21.334C13.5004 20.8673 14.1308 20.5172 14.8252 20.2836C15.5196 20.0505 16.2447 19.934 17.0004 19.934C17.7561 19.934 18.4812 20.0505 19.1756 20.2836C19.87 20.5172 20.506 20.8673 21.0836 21.334C21.4505 20.878 21.7396 20.3695 21.9508 19.8084C22.1615 19.2473 22.2668 18.6447 22.2668 18.0004C22.2668 16.5337 21.7559 15.2892 20.734 14.2668C19.7116 13.2449 18.4671 12.734 17.0004 12.734C15.5449 12.734 14.3033 13.2449 13.2756 14.2668C12.2479 15.2892 11.734 16.5337 11.734 18.0004C11.734 18.6447 11.8423 19.2473 12.0588 19.8084C12.2753 20.3695 12.5671 20.878 12.934 21.334ZM17.0004 18.7004C16.3449 18.7004 15.7895 18.4727 15.334 18.0172C14.878 17.5617 14.65 17.0063 14.65 16.3508C14.65 15.6948 14.878 15.1391 15.334 14.6836C15.7895 14.2281 16.3449 14.0004 17.0004 14.0004C17.6559 14.0004 18.2113 14.2281 18.6668 14.6836C19.1228 15.1391 19.3508 15.6948 19.3508 16.3508C19.3508 17.0063 19.1228 17.5617 18.6668 18.0172C18.2113 18.4727 17.6559 18.7004 17.0004 18.7004ZM17.0004 24.6668C16.0783 24.6668 15.2116 24.4919 14.4004 24.142C13.5892 23.7921 12.8836 23.3172 12.2836 22.7172C11.6836 22.1172 11.2087 21.4116 10.8588 20.6004C10.5089 19.7892 10.334 18.9225 10.334 18.0004C10.334 17.0783 10.5089 16.2116 10.8588 15.4004C11.2087 14.5892 11.6836 13.8836 12.2836 13.2836C12.8836 12.6836 13.5892 12.2087 14.4004 11.8588C15.2116 11.5089 16.0783 11.334 17.0004 11.334C17.9225 11.334 18.7892 11.5089 19.6004 11.8588C20.4116 12.2087 21.1172 12.6836 21.7172 13.2836C22.3172 13.8836 22.7921 14.5892 23.142 15.4004C23.4919 16.2116 23.6668 17.0783 23.6668 18.0004C23.6668 18.9225 23.4919 19.7892 23.142 20.6004C22.7921 21.4116 22.3172 22.1172 21.7172 22.7172C21.1172 23.3172 20.4116 23.7921 19.6004 24.142C18.7892 24.4919 17.9225 24.6668 17.0004 24.6668Z"
									fill="#0C46D3"
								/>
							</g>
						</svg>
					),
				},
			],
		},
		{
			id: useId(),
			categoryName: "BUSINESS",
			links: [
				{
					id: useId(),
					route: "/business/sub-merchant",
					routeName: "Sub Merchant",
					icon: (
						<svg
							width="35"
							height="35"
							viewBox="0 0 35 35"
							fill="none"
						>
							<circle
								cx="17.5"
								cy="17.5"
								r="17.5"
								fill="#0C46D3"
								fillOpacity="0.05"
							/>
							<mask
								className="[mask-type:alpha]"
								id="mask0_2629_3536"
								maskUnits="userSpaceOnUse"
								x="9"
								y="10"
								width="16"
								height="16"
							>
								<rect
									x="9"
									y="10"
									width="16"
									height="16"
									fill="#D9D9D9"
								/>
							</mask>
							<g mask="url(#mask0_2629_3536)">
								<path
									d="M10.5996 22.7999V21.2663C10.5996 20.9778 10.6689 20.714 10.8076 20.4751C10.9468 20.2362 11.1385 20.0444 11.3828 19.8999C11.9828 19.5442 12.6191 19.2719 13.2916 19.0831C13.9636 18.8943 14.6663 18.7999 15.3996 18.7999C16.1329 18.7999 16.8356 18.8943 17.5076 19.0831C18.1801 19.2719 18.8164 19.5442 19.4164 19.8999C19.6607 20.0444 19.8524 20.2362 19.9916 20.4751C20.1303 20.714 20.1996 20.9778 20.1996 21.2663V22.7999H10.5996ZM21.3996 22.7999V21.2663C21.3996 20.7996 21.2913 20.3663 21.0748 19.9663C20.8583 19.5663 20.5665 19.2386 20.1996 18.9831C20.6327 19.0722 21.0521 19.1916 21.458 19.3415C21.8633 19.4914 22.2495 19.6775 22.6164 19.8999C22.8607 20.0444 23.0524 20.2362 23.1916 20.4751C23.3303 20.714 23.3996 20.9778 23.3996 21.2663V22.7999H21.3996ZM15.3996 17.9999C14.7329 17.9999 14.1663 17.7666 13.6996 17.2999C13.2329 16.8332 12.9996 16.2666 12.9996 15.5999C12.9996 14.9332 13.2329 14.3666 13.6996 13.8999C14.1663 13.4332 14.7329 13.1999 15.3996 13.1999C16.0663 13.1999 16.6329 13.4332 17.0996 13.8999C17.5663 14.3666 17.7996 14.9332 17.7996 15.5999C17.7996 16.2666 17.5663 16.8332 17.0996 17.2999C16.6329 17.7666 16.0663 17.9999 15.3996 17.9999ZM18.5996 17.9999C18.5105 17.9999 18.4273 17.9972 18.35 17.9919C18.2721 17.986 18.1887 17.9722 18.0996 17.9503C18.3775 17.6276 18.5969 17.2692 18.758 16.8751C18.9191 16.4804 18.9996 16.0554 18.9996 15.5999C18.9996 15.1444 18.9191 14.7194 18.758 14.3247C18.5969 13.9306 18.3775 13.5722 18.0996 13.2495C18.1887 13.2276 18.2721 13.2138 18.35 13.2079C18.4273 13.2026 18.5105 13.1999 18.5996 13.1999C19.2663 13.1999 19.8329 13.4332 20.2996 13.8999C20.7663 14.3666 20.9996 14.9332 20.9996 15.5999C20.9996 16.2666 20.7663 16.8332 20.2996 17.2999C19.8329 17.7666 19.2663 17.9999 18.5996 17.9999Z"
									fill="#0C46D3"
								/>
							</g>
						</svg>
					),
				},
				{
					id: useId(),
					route: "/business/catalog",
					routeName: "Catelog",
					icon: (
						<svg
							width="35"
							height="35"
							viewBox="0 0 35 35"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle
								cx="17.5"
								cy="17.5"
								r="17.5"
								fill="#0C46D3"
								fillOpacity="0.05"
							/>
							<mask
								className="[mask-type:alpha]"
								id="mask0_2629_3544"
								maskUnits="userSpaceOnUse"
								x="9"
								y="10"
								width="16"
								height="16"
							>
								<rect
									x="9"
									y="10"
									width="16"
									height="16"
									fill="#D9D9D9"
								/>
							</mask>
							<g mask="url(#mask0_2629_3544)">
								<path
									d="M15.0336 14.0168H18.9832C18.9832 13.4834 18.7888 13.025 18.4 12.6416C18.0112 12.2581 17.5501 12.0664 17.0168 12.0664C16.4723 12.0664 16.0056 12.2581 15.6168 12.6416C15.228 13.025 15.0336 13.4834 15.0336 14.0168ZM17 19.4336C17.9333 19.4336 18.7307 19.1056 19.392 18.4496C20.0528 17.7941 20.3832 16.9997 20.3832 16.0664H18.9832C18.9832 16.5997 18.7888 17.0608 18.4 17.4496C18.0112 17.8389 17.5501 18.0336 17.0168 18.0336C16.4723 18.0336 16.0056 17.8389 15.6168 17.4496C15.228 17.0608 15.0336 16.5997 15.0336 16.0664H13.6336C13.6336 16.9997 13.9613 17.7941 14.6168 18.4496C15.2723 19.1056 16.0667 19.4336 17 19.4336ZM21.6 24.6664H12.4C12.0112 24.6664 11.6805 24.5304 11.408 24.2584C11.136 23.9858 11 23.6552 11 23.2664V15.4168C11 15.028 11.136 14.6973 11.408 14.4248C11.6805 14.1528 12.0112 14.0168 12.4 14.0168H13.6336C13.6336 13.0834 13.9613 12.2917 14.6168 11.6416C15.2723 10.9914 16.0667 10.6664 17 10.6664C17.9333 10.6664 18.7307 10.9914 19.392 11.6416C20.0528 12.2917 20.3832 13.0834 20.3832 14.0168H21.6C21.9888 14.0168 22.3195 14.1528 22.592 14.4248C22.864 14.6973 23 15.028 23 15.4168V23.2664C23 23.6552 22.864 23.9858 22.592 24.2584C22.3195 24.5304 21.9888 24.6664 21.6 24.6664Z"
									fill="#0C46D3"
								/>
							</g>
						</svg>
					),
				},
				{
					id: useId(),
					route: "/business/draft",
					routeName: "Draft",
					icon: (
						<svg
							width="35"
							height="35"
							viewBox="0 0 35 35"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle
								cx="17.5"
								cy="17.5"
								r="17.5"
								fill="#0C46D3"
								fillOpacity="0.05"
							/>
							<mask
								className="[mask-type:alpha]"
								id="mask0_2629_3552"
								maskUnits="userSpaceOnUse"
								x="9"
								y="10"
								width="16"
								height="16"
							>
								<rect
									x="9"
									y="10"
									width="16"
									height="16"
									fill="#D9D9D9"
								/>
							</mask>
							<g mask="url(#mask0_2629_3552)">
								<path
									d="M13.4002 24.4C13.0669 24.4 12.7837 24.2832 12.5506 24.0496C12.317 23.8165 12.2002 23.5333 12.2002 23.2V12.8C12.2002 12.4666 12.317 12.1834 12.5506 11.9504C12.7837 11.7168 13.0669 11.6 13.4002 11.6H18.6002L21.8002 14.8V17.7L17.0002 22.4832V24.4H13.4002ZM18.2002 24.4V22.9664L21.5338 19.6496L22.9506 21.0664L19.617 24.4H18.2002ZM23.517 20.5L22.1002 19.0832L22.6666 18.5168C22.7557 18.4277 22.8586 18.3888 22.9754 18.4C23.0922 18.4112 23.1949 18.4613 23.2834 18.5504L24.0834 19.3664C24.1725 19.4442 24.2197 19.5333 24.225 19.6336C24.2309 19.7333 24.1949 19.8221 24.117 19.9L23.517 20.5ZM17.8002 15.6H20.6002L17.8002 12.8V15.6Z"
									fill="#0C46D3"
								/>
							</g>
						</svg>
					),
				},
			],
		},
	];

	return (
		<div
			className={cn(
				"fixed w-full overflow-y-auto h-[calc(100%-4.55rem)] transition-all ease-in-out duration-500 z-50 custom-scrollbar lg:w-80 lg:bottom-0 lg:h-full lg:block",
				{ "bottom-0": isOpen, "-bottom-full": !isOpen },
			)}
		>
			<div className="px-[10%] sticky top-0 hidden bg-white/100 py-4 lg:block">
				<div className="flex items-center gap-4">
					<Image
						className="w-14 h-auto"
						src={DashboardLogo}
						alt="NestlyPay"
						quality={100}
					/>

					<div className="-space-y-1">
						<p className="font-medium text-black/100 text-lg/8">
							Wisdom Ojimah
						</p>

						<p className="text-sm">ojimah@nestlypay.co</p>
					</div>
				</div>
			</div>

			<nav className="grid gap-8 lg:pt-8 pb-5 bg-white/100">
				{links.map(
					(navLink: navLink): JSX.Element =>
						navLink?.categoryName ? (
							<div
								className="space-y-4"
								key={navLink.id}
							>
								<p className="font-medium text-black/50 text-xs/6 px-[calc(1.5rem+6px)] lg:px-[calc(2rem+6px)]">
									{navLink.categoryName}
								</p>

								<ul className="grid gap-1">
									{navLink?.links?.map(
										(link: link): JSX.Element => (
											<li key={link.id}>
												<Link
													className={cn(
														"dashboard-link",
														{
															"bg-dashboard-navlink border-l-[6px] border-brand-blue":
																pathname ===
																	link.route ||
																link?.relatedLinks?.includes(
																	pathname,
																),
														},
													)}
													href={link.route}
												>
													{link.icon}

													{link.routeName}
												</Link>
											</li>
										),
									)}
								</ul>
							</div>
						) : (
							<Link
								className={cn("dashboard-link", {
									"bg-dashboard-navlink border-l-[6px] border-brand-blue":
										pathname === navLink.route ||
										navLink?.relatedLinks?.includes(
											pathname,
										),
								})}
								href={navLink.route ? navLink.route : ""}
								key={navLink.id}
							>
								{navLink.icon}

								{navLink.routeName}
							</Link>
						)
				)}
			</nav>
		</div>
	);
};

export default BusinessNavLink;
