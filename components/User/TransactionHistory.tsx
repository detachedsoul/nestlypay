

const TransactionHistory = (): JSX.Element => {
    return (
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
                    <tr className="cursor-pointer">
                        <td className="font-medium pb-8 pr-6 last:pb-0">
                            <div className="bg-brand-yellow text-white w-10 h-10 rounded-full font-black grid place-content-center">
                                W
                            </div>
                        </td>

                        <td className="pb-8 pr-8 text-black/80 last:pb-0">
                            Wisdom Ojimah
                        </td>

                        <td className="pb-8 pr-8 text-black/80 last:pb-0">
                            ojimahwisdom01@gmail.com
                        </td>

                        <td className="pb-8 pr-8 text-black/80 last:pb-0">
                            ₦ 39,000.00
                        </td>

                        <td className="pb-8 pr-8 text-black/80 last:pb-0">
                            13/06/2024
                        </td>

                        <td className="pb-8 pr-8 text-black/80">
                            <p className="bg-brand-yellow/10 text-brand-yellow py-2.5 px-5 rounded-[5px] text-sm font-medium">
                                Pending
                            </p>
                        </td>
                    </tr>

                    <tr className="cursor-pointer">
                        <td className="font-medium pb-8 pr-6 last:pb-0">
                            <div className="bg-brand-green text-white w-10 h-10 rounded-full font-black grid place-content-center">
                                J
                            </div>
                        </td>

                        <td className="pb-8 pr-8 text-black/80 last:pb-0">
                            Jane Ojimah
                        </td>

                        <td className="pb-8 pr-8 text-black/80 last:pb-0">
                            janeojimah@gmail.com
                        </td>

                        <td className="pb-8 pr-8 text-black/80 last:pb-0">
                            ₦ 39,000.00
                        </td>

                        <td className="pb-8 pr-8 text-black/80 last:pb-0">
                            13/06/2024
                        </td>

                        <td className="pb-8 pr-8 text-black/80">
                            <p className="bg-brand-green/10 text-brand-green py-2.5 px-5 rounded-[5px] text-sm font-medium">
                                Success
                            </p>
                        </td>
                    </tr>

                    <tr className="cursor-pointer">
                        <td className="font-medium pb-8 pr-6 last:pb-0">
                            <div className="bg-brand-red text-white w-10 h-10 rounded-full font-black grid place-content-center">
                                D
                            </div>
                        </td>

                        <td className="pb-8 pr-8 text-black/80 last:pb-0">
                            Dominic Praise
                        </td>

                        <td className="pb-8 pr-8 text-black/80 last:pb-0">
                            dom@nestlypay.com
                        </td>

                        <td className="pb-8 pr-8 text-black/80 last:pb-0">
                            ₦ 39,000.00
                        </td>

                        <td className="pb-8 pr-8 text-black/80 last:pb-0">
                            13/06/2024
                        </td>

                        <td className="pb-8 pr-8 text-black/80">
                            <p className="bg-brand-red/10 text-brand-red py-2.5 px-5 rounded-[5px] text-sm font-medium">
                                Success
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default TransactionHistory;
