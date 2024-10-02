"use client";

import SuccessIcon from "./SuccessIcon";
import FailedIcon from "./FailedIcon";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface IAlert {
	statusType: "success" | "error" | string;
	message: string;
}

const Alert: React.FC<IAlert> = ({ statusType, message }) => {
	const [status, setStatus] = useState({
		status: statusType,
		isActive: false,
	});

	useEffect(() => {
		if (statusType !== "") {
			setStatus({
				isActive: true,
				status: statusType,
			});
		}
	}, [statusType]);

	useEffect(() => {
		if (status.status !== "") {
			const timer = setTimeout(() => {
				setStatus({
					isActive: false,
					status: "",
				});
			}, 5000);

			return () => clearTimeout(timer);
		}
	}, [status.status]);

	return (
		<div
			className={cn(
				"bg-white shadow-[0px_5px_10px_0px_#0000000D] fixed top-4 left-6 w-[calc(100%-3rem)] isolate rounded-lg px-3.5 py-6 flex items-center gap-9 border-l-8 sm:translate-x-full sm:right-12 sm:w-max transition-transform -translate-y-[150%]",
				{
					"border-brand-green": status.status === "success",
					"border-brand-red": status.status === "error",
					"translate-y-0": !status.isActive,
				},
			)}
		>
			{status.status === "success" ? (
				<SuccessIcon className="shrink-0" />
			) : (
				<FailedIcon className="shrink-0" />
			)}

			<div className="space-y-1">
				<h3 className="text-black text-lg">
					{status.status === "success" ? "Success" : "Error"}
				</h3>
				<p className="text-black/70 text-sm">{message}</p>
			</div>
		</div>
	);
};

export default Alert;
