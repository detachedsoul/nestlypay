"use client";

import { CalendarDaysIcon } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";

interface IDate {
    text: string;
    date: Date | string,
    setDate: Dispatch<SetStateAction<Date | string>>
};

const InvoiceDate: React.FC<IDate> = ({ text, date, setDate }) => {
    return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					variant={"outline"}
					className={cn(
						"btn py-7 bg-white/100 border-black/10 text-base px-10 font-medium text-[#979797] hover:bg-[#979797]/5 hover:text-[#979797] lg:py-6 group",
						{
							"text-muted-foreground": !date,
						},
					)}
				>
					{date ? (
						<span>{format(date, "MMM d, yyyy")}</span>
					) : (
						<p className="flex items-center gap-4 justify-between text-[rgba(151,_151,_151,_1)] group-hover:text-inherit font-[450] text-sm/[1.875rem]">
							<span>{text}</span>

							<CalendarDaysIcon strokeWidth={1.5} />
						</p>
					)}
				</Button>
			</PopoverTrigger>

			<PopoverContent className="w-auto p-0">
				<Calendar
					mode="single"
					selected={date as Date}
					onSelect={
						setDate as Dispatch<SetStateAction<Date | undefined>>
					}
					initialFocus
				/>
			</PopoverContent>
		</Popover>
	);
};

export default InvoiceDate;
