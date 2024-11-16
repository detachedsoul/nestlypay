const formatDate = (date: Date): string => {
	const options: Intl.DateTimeFormatOptions = {
		weekday: "short",
		year: "numeric",
		month: "short",
		day: "2-digit",
		hour: "2-digit",
		minute: "2-digit",
		hour12: true,
	};

	const formatter = new Intl.DateTimeFormat("en-US", options);
	const parts = formatter.formatToParts(date);

	const partMap: { [key: string]: string } = Object.fromEntries(
		parts.map((part) => [part.type, part.value]),
    );

    const formattedDate = `${partMap.weekday}, ${partMap.month} ${partMap.day}, ${partMap.year}`;

	const formattedTime = `${partMap.hour}:${partMap.minute}${partMap.dayPeriod?.toUpperCase() ?? ""}`;

	return `${formattedDate} : ${formattedTime}`;
};

export default formatDate;
