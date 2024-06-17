

const TransactionHistory = (): JSX.Element => {
    return (
        <div className="overflow-x-auto custom-scrollbar">
            <table className="w-full border-collapse whitespace-nowrap table-auto">
                <thead className="text-left">
                    <tr>
                        <th className="text-black/100 font-medium py-3 pr-8">

                        </th>

                        <th className="text-black/100 font-medium py-3 pr-8">
                            Transaction
                        </th>

                        <th className="text-black/100 font-medium py-3 pr-8">
                            Receipt ID
                        </th>

                        <th className="text-black/100 font-medium py-3 pr-8">
                            Amount
                        </th>

                        <th className="text-black/100 font-medium py-3 pr-8">
                            Date
                        </th>

                        <th className="text-black/100 font-medium py-3 pr-8">
                            Status
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td className="font-medium py-3 pr-6">
                            <div className="bg-brand-yellow text-white w-10 h-10 rounded-full font-black grid place-content-center">
                                W
                            </div>
                        </td>

                        <td className="py-3 pr-8 text-black/80">
                            Withrawal to Wisdom Ojimah
                        </td>

                        <td className="py-3 pr-8 text-black/80">
                            PAYNES/837/e38
                        </td>

                        <td className="py-3 pr-8 text-black/80">
                            ₦ 39,000.00
                        </td>

                        <td className="py-3 pr-8 text-black/80">
                            13/06/2024
                        </td>

                        <td className="py-3 pr-8 text-black/80">
                            <p className="bg-brand-yellow/10 text-brand-yellow py-2.5 px-5 rounded-[5px] text-sm font-medium text-center">
                                Pending
                            </p>
                        </td>
                    </tr>

                    <tr>
                        <td className="font-medium py-3 pr-6">
                            <div className="bg-brand-green text-white w-10 h-10 rounded-full font-black grid place-content-center">
                                J
                            </div>
                        </td>

                        <td className="py-3 pr-8 text-black/80">
                            Withdrawal to Jane Doe
                        </td>

                        <td className="py-3 pr-8 text-black/80">
                            PAYNES/837/e38
                        </td>

                        <td className="py-3 pr-8 text-black/80">
                            ₦ 39,000.00
                        </td>

                        <td className="py-3 pr-8 text-black/80">
                            13/06/2024
                        </td>

                        <td className="py-3 pr-8 text-black/80">
                            <p className="bg-brand-green/10 text-brand-green py-2.5 px-5 rounded-[5px] text-sm font-medium text-center">
                                Success
                            </p>
                        </td>
                    </tr>

                    <tr>
                        <td className="font-medium py-3 pr-6">
                            <div className="bg-brand-red text-white w-10 h-10 rounded-full font-black grid place-content-center">
                                D
                            </div>
                        </td>

                        <td className="py-3 pr-8 text-black/80">
                            Withdrawal to Dominic Praise
                        </td>

                        <td className="py-3 pr-8 text-black/80">
                            PAYNES/837/e38
                        </td>

                        <td className="py-3 pr-8 text-black/80">
                            ₦ 39,000.00
                        </td>

                        <td className="py-3 pr-8 text-black/80">
                            13/06/2024
                        </td>

                        <td className="py-3 pr-8 text-black/80">
                            <p className="bg-brand-red/10 text-brand-red py-2.5 px-5 rounded-[5px] text-sm font-medium text-center">
                                Cancelled
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default TransactionHistory;
