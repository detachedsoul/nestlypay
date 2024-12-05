import EmptyInvoice from "@/components/Invoice/EmptyInvoice";
import InvoiceContainer from "@/components/Invoice/InvoiceContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "NestlyPay | Invoices",
	description: "View your invoices",
};

const MyInvoice = () => {
    return (
        <>
            <EmptyInvoice />

            <InvoiceContainer />
        </>
    );
};

export default MyInvoice;
