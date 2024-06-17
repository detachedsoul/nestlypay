"use client";

import PopupWrapper from "@/components/PopupWrapper";
import { cn } from "@/lib/utils";
import { useState } from "react";

const InvoiceReceipt = (): JSX.Element => {
    const [popupIsActive, setPopupIsActive] = useState(false);

    return (
        <>
            <section className="lg:w-3/4 xl:w-3/5 lg:my-[5%] mx-auto">
                <div className="bg-white/100 p-8 relative z-10">
                    <svg className="absolute right-2 top-2" width="50" height="50" viewBox="0 0 50 50" fill="none">
                        <circle cx="25" cy="25" r="25" fill="#0C46D3" fillOpacity="0.05" />
                        <path d="M20 19.0625V20H19.375C18.5462 20 17.7513 20.3292 17.1653 20.9153C16.5792 21.5013 16.25 22.2962 16.25 23.125V27.8125C16.25 28.3927 16.4805 28.9491 16.8907 29.3593C17.3009 29.7695 17.8573 30 18.4375 30H19.375V30.9375C19.375 31.5177 19.6055 32.0741 20.0157 32.4843C20.4259 32.8945 20.9823 33.125 21.5625 33.125H28.4375C29.0177 33.125 29.5741 32.8945 29.9843 32.4843C30.3945 32.0741 30.625 31.5177 30.625 30.9375V30H31.5625C32.1427 30 32.6991 29.7695 33.1093 29.3593C33.5195 28.9491 33.75 28.3927 33.75 27.8125V23.125C33.75 22.2962 33.4208 21.5013 32.8347 20.9153C32.2487 20.3292 31.4538 20 30.625 20H30V19.0625C30 18.4823 29.7695 17.9259 29.3593 17.5157C28.9491 17.1055 28.3927 16.875 27.8125 16.875H22.1875C21.6073 16.875 21.0509 17.1055 20.6407 17.5157C20.2305 17.9259 20 18.4823 20 19.0625ZM22.1875 18.125H27.8125C28.0611 18.125 28.2996 18.2238 28.4754 18.3996C28.6512 18.5754 28.75 18.8139 28.75 19.0625V20H21.25V19.0625C21.25 18.8139 21.3488 18.5754 21.5246 18.3996C21.7004 18.2238 21.9389 18.125 22.1875 18.125ZM20.625 27.1875C20.625 26.9389 20.7238 26.7004 20.8996 26.5246C21.0754 26.3488 21.3139 26.25 21.5625 26.25H28.4375C28.6861 26.25 28.9246 26.3488 29.1004 26.5246C29.2762 26.7004 29.375 26.9389 29.375 27.1875V30.9375C29.375 31.1861 29.2762 31.4246 29.1004 31.6004C28.9246 31.7762 28.6861 31.875 28.4375 31.875H21.5625C21.3139 31.875 21.0754 31.7762 20.8996 31.6004C20.7238 31.4246 20.625 31.1861 20.625 30.9375V27.1875Z" fill="#0C46D3" />
                    </svg>

                    <div className="mt-12 space-y-8 lg:mt-8">
                        <div className="flex items-start gap-8 flex-wrap justify-between">
                            <div className="flex items-center gap-4">
                                <div className="bg-brand-blue rounded-xl grid place-content-center p-5 text-xl text-white/100 font-bold">
                                    <span className="bg-white/100 w-4 h-4 lgg:w-8 lh:h-8 rounded-full"></span>
                                </div>

                                <div className="space-y-1">
                                    <p className="text-black/100 font-medium text-lg">
                                        Wisdom Ojimah
                                    </p>

                                    <p>
                                        ojimah@gmail.com
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-12">
                                <p className="text-black/100 font-bold text-sm">
                                    Billing To:
                                </p>

                                <div className="space-y-2">
                                    <p className="text-[rgba(34,_34,_52,_1)] text-sm font-medium">
                                        The Hype Agency
                                    </p>

                                    <p className="text-[rgba(34,_34,_52,_1)] text-xs">
                                        hello@thehypehq.com
                                    </p>

                                    <p className="text-brand-green text-xs">
                                        +234 810 500 8304
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
                    </div>

                    <div className="rounded-md bg-[rgba(245,_245,_245,_1)] p-4 mt-24 lg:mt-32 space-y-4 lg:w-1/2 lg:ml-auto">
                        <div className="flex items-center gap-4 justify-between text-sm">
                            <p>
                                Net Worth
                            </p>

                            <p className="font-medium text-black/80">
                                ₦ 900,00.00
                            </p>
                        </div>

                        <div className="flex items-center gap-4 justify-between text-xs">
                            <p>
                                Sub
                            </p>

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
                </div>

                <div className="flex items-center gap-4 flex-wrap mt-8 place-content-end">
                    <button className={cn("btn bg-white/100 border-2 border-brand-blue font-medium text-brand-blue hover:bg-brand-blue hover:text-white hover:border-transparent py-4 px-8 rounded-lg inline-block")} type="button" onClick={() => setPopupIsActive(true)}>
                        Share
                    </button>

                    <button className={cn("btn bg-brand-blue border-2 border-transparent font-medium text-white hover:bg-brand-blue/70 hover:text-white hover:border-transparent py-4 rounded-lg inline-block")} type="button">
                        Download
                    </button>
                </div>
            </section>

            <PopupWrapper isActive={popupIsActive} toggleIsActive={() => setPopupIsActive(false)}>
                <div className="space-y-8">
                    <div>
                        <h2 className="font-medium text-xl/10 text-black/100">
                            Share Invoice
                        </h2>

                        <p>
                            You can invite anyone to view this invoice
                        </p>
                    </div>

                    <form className="w-full flex gap-4">
                        <label className="w-full" htmlFor="email">
                            <input className="input" type="email" placeholder="Email Address" name="email" />
                        </label>

                        <button className="submit-btn w-auto shrink-0" type="submit">
                            Send Invite
                        </button>
                    </form>

                    <button className="flex items-center gap-1 mx-auto" type="button" aria-label="Copy invoice ID">
                        invoices.nestlypay.co/9823nubwxsay

                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M8.74875 1.25C8.08571 1.25 7.44982 1.51339 6.98098 1.98223C6.51214 2.45107 6.24875 3.08696 6.24875 3.75V13.75C6.24875 14.413 6.51214 15.0489 6.98098 15.5178C7.44982 15.9866 8.08571 16.25 8.74875 16.25H15C15.663 16.25 16.2989 15.9866 16.7678 15.5178C17.2366 15.0489 17.5 14.413 17.5 13.75V6.875H17.4975V5.5175C17.4974 5.02057 17.3 4.544 16.9487 4.1925L14.5563 1.79875C14.2048 1.44748 13.7282 1.25011 13.2312 1.25H8.7475H8.74875ZM15 15H8.74875C8.41723 15 8.09929 14.8683 7.86487 14.6339C7.63045 14.3995 7.49875 14.0815 7.49875 13.75V3.75C7.49875 3.41848 7.63045 3.10054 7.86487 2.86612C8.09929 2.6317 8.41723 2.5 8.74875 2.5H12.4987V4.375C12.4987 4.87228 12.6963 5.34919 13.0479 5.70083C13.3996 6.05246 13.8765 6.25 14.3737 6.25H16.2487V7.57625H16.25V13.75C16.25 14.0815 16.1183 14.3995 15.8839 14.6339C15.6495 14.8683 15.3315 15 15 15ZM15.9888 5H14.3725C14.2067 5 14.0478 4.93415 13.9306 4.81694C13.8133 4.69973 13.7475 4.54076 13.7475 4.375V2.75875L15.9888 5ZM3.75 5C3.75 4.66848 3.8817 4.35054 4.11612 4.11612C4.35054 3.8817 4.66848 3.75 5 3.75V13.75C5 14.7446 5.39509 15.6984 6.09835 16.4017C6.80161 17.1049 7.75544 17.5 8.75 17.5H15C15 17.8315 14.8683 18.1495 14.6339 18.3839C14.3995 18.6183 14.0815 18.75 13.75 18.75H8.4875C7.23104 18.75 6.02604 18.2509 5.13758 17.3624C4.24913 16.474 3.75 15.269 3.75 14.0125V5Z" fill="black"/>
                        </svg>
                    </button>

                    <button className="flex items-center gap-1 mx-auto text-[rgba(151,_151,_151,_1)]" type="button">
                        Export as QR Code
                    </button>
                </div>
            </PopupWrapper>
        </>
    );
};

export default InvoiceReceipt;
