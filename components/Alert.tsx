"use client";

import SuccessIcon from "./SuccessIcon";
import FailedIcon from "./FailedIcon";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface IAlert {
	statusType: "success" | "error" | "";
	message: string;
}

const Alert: React.FC<IAlert> = ({ statusType, message }) => {
	const [status, setStatus] = useState(statusType);

    const [localParams, setLocalParams] = useState({
        message: message,
        status: statusType
    });

	useEffect(() => {
        setStatus(statusType);

        if (statusType === "") {
			setLocalParams((prev) => prev);
        } else {
            setLocalParams({
				message: message,
				status: status,
			});
        }
    }, [statusType, status, message]);

	return (
		<div
			className={cn(
				"bg-white shadow-[0px_5px_10px_0px_#0000000D] fixed top-6 left-6 w-[calc(100%-3rem)] isolate rounded-lg px-3.5 py-6 flex items-center gap-8 border-l-8 sm:right-[15%] transition-transform -translate-y-[150%] duration-300 ease-linear sm:left-auto sm:w-[calc(70%)] lg:right-16 lg:w-[calc(50%-12rem)] xl:right-[5%] xl:w-[calc(50%-25%)] 2xl:right-[10%]",
				{
					"border-brand-green": status === "success",
					"border-brand-red": status === "error",
					"translate-y-0": status !== "",
				},
			)}
		>
            {localParams.status === "success" && (
                <SuccessIcon className="shrink-0" />
            )}

            {localParams.status === "error" && (
				<FailedIcon className="shrink-0" />
			)}

			<div className="space-y-1">
				<h3 className="text-black text-lg">
					{localParams.status === "success" && "Success"}
					{localParams.status === "error" && "Error"}
				</h3>
				<p className="text-black/70 text-sm">{localParams.message}</p>
			</div>
		</div>
	);
};

export default Alert;
