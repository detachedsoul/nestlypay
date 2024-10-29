import InvoiceReceipt from "@/components/User/InvoiceReceipt";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "NestlyPay | Invoice History",
	description: "View your invoice history",
};

const Index = async ({ params }: { params: Promise<{ id: string }> }) => {
	console.log((await params).id);

	return <InvoiceReceipt />;
};

export default Index;
