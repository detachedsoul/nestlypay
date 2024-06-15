import { Trash2Icon, FilePenLineIcon } from "lucide-react";

const ClientsTable = (): JSX.Element => {
    return (
        <div className="overflow-x-auto custom-scrollbar">
            <table className="w-full border-collapse whitespace-nowrap table-auto">
                <thead className="text-left">
                    <tr>
                        <th className="text-black/100 font-medium pb-6 pr-8">

                        </th>

                        <th className="text-black/100 font-medium pb-6 pr-8">
                            Name
                        </th>

                        <th className="text-black/100 font-medium pb-6 pr-8">
                            Email Address
                        </th>

                        <th className="text-black/100 font-medium pb-6 pr-8">
                            Phone
                        </th>

                        <th className="text-black/100 font-medium pb-6 pr-8">
                            Action
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td className="font-medium pb-6 pr-4 last:pb-0">
                            <div className="bg-purple-500 text-white w-10 h-10 rounded-full font-black grid place-content-center">
                                A
                            </div>
                        </td>

                        <td className="pb-6 pr-8 text-black/80 last:pb-0">
                            Ayo John
                        </td>

                        <td className="pb-6 pr-8 text-black/80 no-underline last:pb-0">
                            john@gmail.com
                        </td>

                        <td className="pb-6 pr-8 text-black/80 last:pb-0">
                            +234 900 000 0000
                        </td>

                        <td className="pb-6 pr-8 text-black/80 flex items-center gap-6">
                            <button type="button" aria-label="Edit user">
                                <FilePenLineIcon strokeWidth={1.5} />
                            </button>

                            <button type="button" aria-label="Delete user">
                                <Trash2Icon strokeWidth={1.5} />
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ClientsTable;
