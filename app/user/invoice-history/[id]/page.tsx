import InvoiceReceipt from "@/components/User/InvoiceReceipt";
import { Metadata } from "next";

type historyProps = {
    params: Promise<{
        id: string
    }>
};

export const metadata: Metadata = {
    title: "NestlyPay | Invoice History",
    description: "View your invoice history"
};

const Index: React.FC<historyProps> = ({params}: historyProps) => {
    console.log(params.id);

    return (
        <InvoiceReceipt />
    );
};

export default Index;
