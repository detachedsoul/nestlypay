import { cn } from "@/lib/utils";
import { XCircle } from "lucide-react";
import { useEffect } from "react";

interface PopupWrapper {
    isActive: boolean;
    toggleIsActive: (activeState: boolean) => void;
    className?: string;
    children: React.ReactNode;
}

const PopWrapper: React.FC<PopupWrapper> = ({
    isActive,
    toggleIsActive,
    className,
    children,
}) => {
    useEffect(() => {
        isActive
            ? (document.querySelector("body")!.style!.overflow = "hidden")
            : (document.querySelector("body")!.style!.overflow = "auto");
    }, [isActive]);

    return (
        <div className={`fixed inset-0 z-[1024] custom-scrollbar overflow-y-auto h-full w-full place-items-center gap-4 bg-black/50 backdrop-blur-[2px] transition-all duration-500 ease-in-out ${isActive ? "animate-fadeIn grid" : "animate-fadeOut hidden"}`}>
            <div
                className={cn(
                    "h-auto z-[1024] my-6 w-[calc(100%-10%)] grid gap-8 rounded-xl bg-white lg:p-8 text-black p-6 min-[500px]:w-3/5 lg:w-[40%] xl:w-1/3",
                    className
                )}
            >
                <div className="relative mb-4">
                    <button
                        className="absolute right-0"
                        type="button"
                        onClick={() => toggleIsActive(false)}
                        aria-label="Close modal"
                    >
                        <XCircle size={30} strokeWidth={1} />
                    </button>
                </div>

                {children}
            </div>
        </div>
    );
};

export default PopWrapper;
