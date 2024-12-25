"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/img/hero-image.png";
import formatMoney from "@/lib/formatMoney";
import { Dispatch, SetStateAction, useEffect } from "react";
import { cn } from "@/lib/utils";

interface IInvoicePreview {
	isOpen: boolean;
	toggleIsOpen: Dispatch<SetStateAction<boolean>>;
	data: {
		userInfo: {
			name: string;
			email: string;
			phoneNumber: string;
		};
		clientInfo: {
			name: string;
			email: string;
			phoneNumber: string;
		};
		items:
			| [
					{
						itemName: string;
						itemDescription: string;
						quantity: string;
						amount: number;
					},
			  ]
			| {
					itemName: string;
					itemDescription: string;
					quantity: string;
					amount: number;
			  }[];
		imageSrc: string;
		issueDate: string;
		netWorth: number;
		totalAmount: number;
	} | null;
};

const InvoicePreview: React.FC<IInvoicePreview> = ({isOpen, toggleIsOpen, data}) => {
    useEffect(() => {
        isOpen
            ? (document.querySelector("body")!.style!.overflow = "hidden")
            : (document.querySelector("body")!.style!.overflow = "auto");
    }, [isOpen]);

	return (
		<div
			className={cn(
				"fixed inset-0 h-full bg-black/50 z-[1024] backdrop-blur-[2px] place-content-center",
				{
					"animate-fadeIn grid": isOpen,
					"animate-fadeOut hidden": !isOpen,
				},
			)}
		>
			<div className="h-svh p-4 w-svw overflow-y-auto custom-scrollbar lg:px-0">
				<div className="w-full bg-white lg:mx-auto lg:w-1/2">
					<div className="bg-[rgba(0,_153,_70,_1)] h-[0.625rem]"></div>

					<div className="p-[1.875rem]">
						<div className="flex items-center gap-4 justify-between mb-6">
							<Image
								className="w-32 h-14 object-center aspect-video object-cover"
								src={data?.imageSrc || Logo}
								alt="NestlyPay"
								width={128}
								height={100}
							/>

							<p className="font-medium text-sm/5 -tracking-[5%] text-[rgba(34,_34,_52,_1)]">
								Date: {data?.issueDate || ""}
							</p>
						</div>

						<div className="border-y border-black/100 grid grid-cols-2 mb-11">
							<div className="py-4 pr-4 border-r space-y-9 border-black/100">
								<h3 className="font-medium text-black/100 text-sm">
									Billing From:
								</h3>

								<div className="space-y-[0.375rem]">
									<p className="text-[rgba(34,_34,_52,_1)] text-sm/5 font-medium">
										{data?.userInfo?.name}
									</p>

									<p className="text-[rgba(34,_34,_52,_1)] text-xs font-[450]">
										{data?.userInfo?.email}
									</p>

									<p className="text-brand-green text-xs">
										{data?.userInfo?.phoneNumber}
									</p>
								</div>
							</div>

							<div className="py-4 pl-4 text-white space-y-9 grid place-content-center">
								<h3 className="font-medium text-black/100 text-sm">
									Billing To:
								</h3>

								<div className="space-y-[0.375rem]">
									<p className="text-[rgba(34,_34,_52,_1)] text-sm/5 font-medium">
										{data?.clientInfo?.name}
									</p>

									<p className="text-[rgba(34,_34,_52,_1)] text-xs font-[450]">
										{data?.clientInfo?.email}
									</p>

									<p className="text-brand-green text-xs">
										{data?.clientInfo?.phoneNumber}
									</p>
								</div>
							</div>
						</div>

						<div className="space-y-1">
							<h1 className="font-bold text-xl/10 text-white py-1 px-3.5 bg-[rgba(17,_17,_24,_1)]">
								Cost Breakdown
							</h1>

							<div className="overflow-x-auto custom-scrollbar">
								<table className="w-full border-collapse whitespace-nowrap table-auto">
									<thead className="text-left">
										<tr className="bg-[rgba(237,_252,_242,_1)] border border-[rgba(235,_242,_254,_1)] last:border-b-0">
											<th className="text-black/100 font-medium py-3 px-4">
												Deliverable
											</th>

											<th className="text-black/100 font-medium py-3 px-4">
												Item Description
											</th>

											<th className="text-black/100 font-medium py-3 px-4">
												Quantity
											</th>

											<th className="text-black/100 font-medium py-3 px-4">
												Cost
											</th>
										</tr>
									</thead>

									<tbody>
										{data?.items?.map((item) => (
											<tr
												className="border border-[rgba(235,_242,_254,_1)] last:border-t-0"
												key={item.itemName}
											>
												<td className="py-3 px-4 text-black/80">
													{item.itemName}
												</td>

												<td className="py-3 px-4 text-black/80">
													{item.itemDescription}
												</td>

												<td className="py-3 px-4 text-black/80">
													{item.quantity}
												</td>

												<td className="py-3 px-4 text-black/80">
													{formatMoney(item.amount)}
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>

						<div className="rounded-md bg-[rgba(245,_245,_245,_1)] p-4 mt-16 lg:mt-24 space-y-4 lg:w-1/2 lg:ml-auto">
							<div className="flex items-center gap-4 justify-between text-sm">
								<p>Net Worth</p>

								<p className="font-medium text-black/80">
									{formatMoney(String(data?.netWorth || ""))}
								</p>
							</div>

							<div className="flex items-center gap-4 justify-between">
								<p>Tax</p>

								<p className="font-medium text-black/80">1%</p>
							</div>

							<div className="flex items-center gap-4 justify-between">
								<p className="font-medium text-black/100">
									TOTAL
								</p>

								<p className="font-medium text-black/100">
									{formatMoney(
										String(data?.totalAmount || ""),
									)}
								</p>
							</div>
						</div>

						<div className="flex items-center gap-4 justify-between mt-16 lg:mt-24">
							<p className="font-medium text-sm/4 text-[rgba(25,_24,_26,_1)]">
								Thanks for being a NestlyPay customer 🤗
							</p>

							<p className="text-sm/4">
								<span className="font-medium text-[rgba(25,_24,_26,_1)]">
									Need Help?
								</span>{" "}
								<Link
									className="font-[450] hover:underline decoration-wavy underline-offset-4 hover:text-brand-blue"
									href="mailto:ojimahwisdom01@gmail.com"
									target="_blank"
									rel="noopener noreferrer"
								>
									ojimahwisdom01@gmail
								</Link>
							</p>
						</div>
					</div>
				</div>

				<div className="flex items-center gap-4 flex-wrap mt-16 place-content-end lg:mx-auto lg:w-1/2">
					<button
						className="btn bg-white/100 border-2 border-brand-blue font-medium text-brand-blue hover:bg-brand-blue hover:text-white hover:border-transparent py-3.5 px-8 rounded-lg inline-block"
						type="button"
						onClick={() => toggleIsOpen(false)}
					>
						Edit
					</button>

					<button
						className="btn bg-brand-blue border-2 border-transparent font-medium text-white hover:bg-brand-blue/70 hover:text-white hover:border-transparent py-3.5 px-8 rounded-lg inline-block"
						type="button"
					>
						Send
					</button>
				</div>
			</div>
		</div>
	);
};

export default InvoicePreview;
