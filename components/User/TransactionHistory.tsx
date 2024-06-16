"use client";

import PopupWrapper from "@/components/PopupWrapper";
import { useState } from "react";

const TransactionHistory = (): JSX.Element => {
    const [popupIsActive, setPopupIsActive] = useState(false);

    return (
        <>
            <div className="overflow-x-auto custom-scrollbar">
                <table className="w-full border-collapse whitespace-nowrap table-auto">
                    <thead className="text-left">
                        <tr>
                            <th className="text-black/100 font-medium pb-6 pr-8">

                            </th>

                            <th className="text-black/100 font-medium pb-6 pr-8">
                                Client Name
                            </th>

                            <th className="text-black/100 font-medium pb-6 pr-8">
                                Email Address
                            </th>

                            <th className="text-black/100 font-medium pb-6 pr-8">
                                Amount
                            </th>

                            <th className="text-black/100 font-medium pb-6 pr-8">
                                Date
                            </th>

                            <th className="text-black/100 font-medium pb-6 pr-8">
                                Status
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr className="cursor-pointer" onClick={() => setPopupIsActive(!popupIsActive)}>
                            <td className="font-medium pb-6 pr-6 last:pb-0">
                                <div className="bg-brand-yellow text-white w-10 h-10 rounded-full font-black grid place-content-center">
                                    W
                                </div>
                            </td>

                            <td className="pb-6 pr-8 text-black/80 last:pb-0">
                                Wisdom Ojimah
                            </td>

                            <td className="pb-6 pr-8 text-black/80 no-underline last:pb-0">
                                ojimahwisdom01@gmail.com
                            </td>

                            <td className="pb-6 pr-8 text-black/80 last:pb-0">
                                ₦ 39,000.00
                            </td>

                            <td className="pb-6 pr-8 text-black/80 last:pb-0">
                                13/06/2024
                            </td>

                            <td className="pb-6 pr-8 text-black/80">
                                <p className="bg-brand-yellow/10 text-brand-yellow py-2.5 px-5 rounded-[5px] text-sm font-medium text-center">
                                    Pending
                                </p>
                            </td>
                        </tr>

                        <tr className="cursor-pointer" onClick={() => setPopupIsActive(!popupIsActive)}>
                            <td className="font-medium pb-6 pr-6 last:pb-0">
                                <div className="bg-brand-green text-white w-10 h-10 rounded-full font-black grid place-content-center">
                                    J
                                </div>
                            </td>

                            <td className="pb-6 pr-8 text-black/80 last:pb-0">
                                Jane Ojimah
                            </td>

                            <td className="pb-6 pr-8 text-black/80 no-underline last:pb-0">
                                janeojimah@gmail.com
                            </td>

                            <td className="pb-6 pr-8 text-black/80 last:pb-0">
                                ₦ 39,000.00
                            </td>

                            <td className="pb-6 pr-8 text-black/80 last:pb-0">
                                13/06/2024
                            </td>

                            <td className="pb-6 pr-8 text-black/80">
                                <p className="bg-brand-green/10 text-brand-green py-2.5 px-5 rounded-[5px] text-sm font-medium text-center">
                                    Success
                                </p>
                            </td>
                        </tr>

                        <tr className="cursor-pointer" onClick={() => setPopupIsActive(!popupIsActive)}>
                            <td className="font-medium pb-6 pr-6 last:pb-0">
                                <div className="bg-brand-red text-white w-10 h-10 rounded-full font-black grid place-content-center">
                                    D
                                </div>
                            </td>

                            <td className="pb-6 pr-8 text-black/80 last:pb-0">
                                Dominic Praise
                            </td>

                            <td className="pb-6 pr-8 text-black/80 no-underline last:pb-0">
                                dom@nestlypay.com
                            </td>

                            <td className="pb-6 pr-8 text-black/80 last:pb-0">
                                ₦ 39,000.00
                            </td>

                            <td className="pb-6 pr-8 text-black/80 last:pb-0">
                                13/06/2024
                            </td>

                            <td className="pb-6 pr-8 text-black/80">
                                <p className="bg-brand-red/10 text-brand-red py-2.5 px-5 rounded-[5px] text-sm font-medium text-center">
                                    Cancelled
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <PopupWrapper isActive={popupIsActive} toggleIsActive={() => setPopupIsActive(false)}>
                <div className="space-y-16">
                    <div className="grid place-content-center">
                        <div className="flex items-center gap-4">
                            <div className="bg-[rgba(255,_184,_0,_1)] rounded-xl grid place-content-center px-4 py-3.5 text-xl text-white/100 font-bold">
                                W
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
                    </div>

                    <div className="space-y-12">
                        <div className="flex items-center justify-between gap-8">
                            <p className="font-medium text-black/100">
                                INVOICE ID
                            </p>

                            <p>
                                056847383NESPAY
                            </p>
                        </div>

                        <div className="flex items-center justify-between gap-8">
                            <p className="font-medium text-black/100">
                                Date
                            </p>

                            <p>
                                June 15, 2024
                            </p>
                        </div>

                        <div className="flex items-center justify-between gap-8">
                            <p className="font-medium text-black/100">
                                Payment Method
                            </p>

                            <p>
                                Bank Transfer
                            </p>
                        </div>

                        <button className="submit-btn" type="button" onClick={() => setPopupIsActive(false)}>
                            Back
                        </button>
                    </div>
                </div>
            </PopupWrapper>
        </>
    );
};

export default TransactionHistory;
