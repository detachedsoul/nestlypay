import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/img/hero-image.png";

const InvoicePreview = () => {
	return (
		<div className="fixed inset-0 h-screen bg-black/50 z-[1024] backdrop-blur-[2px] flex flex-col place-content-center overflow-y-auto custom-scrollbar p-4">
			<div className="h-screen lg:mx-auto lg:w-1/2">
				<div className="w-full bg-white">
					<div className="bg-[rgba(0,_153,_70,_1)] h-[0.625rem]"></div>

					<div className="p-[1.875rem]">
						<div className="flex items-center gap-4 justify-between mb-6">
							<Image
								className="w-32 h-14 object-center aspect-video"
								src={Logo}
								alt="NestlyPay"
							/>

							<p className="font-medium text-sm/5 -tracking-[5%] text-[rgba(34,_34,_52,_1)]">
								Date: 04/07/2022
							</p>
						</div>

						<div className="border-y border-black/100 grid grid-cols-2 mb-11">
							<div className="py-4 pr-4 border-r space-y-9 border-black/100">
								<h3 className="font-medium text-black/100 text-sm">
									Billing From:
								</h3>

								<div className="space-y-[0.375rem]">
									<p className="text-[rgba(34,_34,_52,_1)] text-sm/5 font-medium">
										Dominic Praise
									</p>

									<p className="text-[rgba(34,_34,_52,_1)] text-xs font-[450]">
										dominic@nestlypay.co
									</p>

									<p className="text-brand-green text-xs">
										+234900000000
									</p>
								</div>
							</div>

							<div className="py-4 pl-4 text-white space-y-9 grid place-content-center">
								<h3 className="font-medium text-black/100 text-sm">
									Billing To:
								</h3>

								<div className="space-y-[0.375rem]">
									<p className="text-[rgba(34,_34,_52,_1)] text-sm/5 font-medium">
										The Hype Agency
									</p>

									<p className="text-[rgba(34,_34,_52,_1)] text-xs font-[450]">
										hello@thehypehq.com
									</p>

									<p className="text-brand-green text-xs">
										+234800000000
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
										<tr className="border border-[rgba(235,_242,_254,_1)] last:border-t-0">
											<td className="py-3 px-4 text-black/80">
												Brand Design
											</td>

											<td className="py-3 px-4 text-black/80">
												Design
											</td>

											<td className="py-3 px-4 text-black/80">
												1
											</td>

											<td className="py-3 px-4 text-black/80">
												₦ 150,000.00
											</td>
										</tr>

										<tr className="border border-[rgba(235,_242,_254,_1)] last:border-t-0">
											<td className="py-3 px-4 text-black/80">
												Graphic Design
											</td>

											<td className="py-3 px-4 text-black/80">
												Design
											</td>

											<td className="py-3 px-4 text-black/80">
												1
											</td>

											<td className="py-3 px-4 text-black/80">
												₦ 150,000.00
											</td>
										</tr>

										<tr className="border border-[rgba(235,_242,_254,_1)] last:border-t-0">
											<td className="py-3 px-4 text-black/80">
												Mobile App Development
											</td>

											<td className="py-3 px-4 text-black/80">
												Engineering
											</td>

											<td className="py-3 px-4 text-black/80">
												5
											</td>

											<td className="py-3 px-4 text-black/80">
												₦ 150,000.00
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>

						<div className="rounded-md bg-[rgba(245,_245,_245,_1)] p-4 mt-16 lg:mt-24 space-y-4 lg:w-1/2 lg:ml-auto">
							<div className="flex items-center gap-4 justify-between text-sm">
								<p>Net Worth</p>

								<p className="font-medium text-black/80">
									₦ 900,00.00
								</p>
							</div>

							<div className="flex items-center gap-4 justify-between text-xs">
								<p>Sub</p>

								<p className="font-medium text-black/80">
									₦ 200,00.00
								</p>
							</div>

							<div className="flex items-center gap-4 justify-between">
								<p className="font-medium text-black/100">
									TOTAL
								</p>

								<p className="font-medium text-black/100">
									₦ 200,00.00
								</p>
							</div>
						</div>

						<div className="flex items-center gap-4 justify-between mt-16 lg:mt-24">
							<p className="font-medium text-sm/4 text-[rgba(25,_24,_26,_1)]">
								Thanks for being a NestlyPay customer 😅
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

				<div className="flex items-center gap-4 flex-wrap mt-16 place-content-end">
					<button
						className="btn bg-white/100 border-2 border-brand-blue font-medium text-brand-blue hover:bg-brand-blue hover:text-white hover:border-transparent py-3.5 px-8 rounded-lg inline-block"
						type="button"
						onClick={() => console.log("Got here")}
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
