import DraftInvoice from "./DraftInvoice";
import Invoices from "./Invoices";

const InvoiceContainer = () => {
    return (
		<section className="grid gap-10">
			<h1 className="font-bold text-xl/10 text-black/100">My Models</h1>

			<DraftInvoice />
			<Invoices />
		</section>
	);
};

export default InvoiceContainer;
