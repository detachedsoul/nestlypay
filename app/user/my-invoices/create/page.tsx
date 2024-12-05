import CreateInvoiceForm from "@/components/Invoice/CreateInvoiceForm";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "NestlyPay | Create Invoice",
	description: "Create a new invoice",
};

const CreateInvoice = () => {
    return (
        <CreateInvoiceForm />
    );
};

export default CreateInvoice;
