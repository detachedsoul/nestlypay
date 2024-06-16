import Link from "next/link";
import { UserIcon, SettingsIcon, LogOutIcon } from "lucide-react";

type notificationProps = {
    isOpen: boolean;
};

const NotificatonsDropdown: React.FC<notificationProps> = ({ isOpen }: notificationProps) => {
    return (
        <div className={`bg-white absolute space-y-4 w-[calc(100vw-3rem)] right-0 top-[calc(100%+1.5rem)] p-4 z-[1024] rounded-lg transition-transform ease-in-out duration-500 shadow-2xl lg:w-[calc(100vw-50rem)] ${isOpen ? "translate-y-0" : "-translate-y-[300%]"}`}>
            <div className="flex items-center gap-4 pb-2 border-b-2 border-black/[0.05]">
                <div className="grid place-content-center w-12 h-12 bg-brand-green text-white font-bold rounded-full shrink-0">
                    W
                </div>

                <div className="space-y-1 w-full">
                    <div className="flex items-center gap-4 justify-between">
                        <p className="font-bold text-black/100">
                            Account Verification
                        </p>

                        <p className="text-xs text-black/50">
                            Today, 8:56pm
                        </p>
                    </div>

                    <p className="text-sm text-[rgba(77,_77,_77,_0.75)]">
                        Hi Wisdom! We have recieved your verification request.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NotificatonsDropdown;
