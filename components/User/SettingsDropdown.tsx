import Link from "next/link";
import { UserIcon, SettingsIcon, LogOutIcon } from "lucide-react";

type dropdownProps = {
    isOpen: boolean;
};

const SettingsDropdown: React.FC<dropdownProps> = ({isOpen}: dropdownProps) => {
    return (
        <div className={`bg-white absolute space-y-2 w-max right-0 top-[calc(100%+1.5rem)] py-4 rounded-lg transition-transform ease-in-out duration-500 shadow-2xl ${isOpen ? "translate-y-0" : "-translate-y-[200%]"}`}>
            <Link className="flex items-center gap-3 font-medium hover:bg-brand-blue/10 border-l-[6px] border-transparent hover:border-brand-blue pl-4 py-2.5 text-black/100 pr-16" href="/users/profile">
                <UserIcon strokeWidth={1.8} />

                Profile
            </Link>

            <Link className="flex items-center gap-3 font-medium hover:bg-brand-blue/10 border-l-[6px] border-transparent hover:border-brand-blue pl-4 py-2.5 text-black/100 pr-16" href="/users/settings">
                <SettingsIcon strokeWidth={1.8} />

                Settings
            </Link>

            <Link className="flex items-center gap-3 font-medium hover:bg-brand-blue/10 border-l-[6px] border-transparent hover:border-brand-blue pl-4 py-2.5 pr-16 mt-8" href="">
                <LogOutIcon strokeWidth={1.5} />

                Sign Out
            </Link>
        </div>
    );
};

export default SettingsDropdown;
