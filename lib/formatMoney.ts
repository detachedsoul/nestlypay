const formatCurrency = (amount: string) => {
	const formattedValue = new Intl.NumberFormat("en-NG", {
		style: "currency",
		currency: "NGN",
	}).format(Number(amount));

	return formattedValue;
};

export default formatCurrency;
