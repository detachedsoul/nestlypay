import EmptyModelIcon from "@/components/EmptyModelcon";
import Link from "next/link";

const EmptyInvoice = () => {
    return (
		<div className="grid pt-12 place-content-center text-center">
			<div className="mx-auto mb-5">
				<EmptyModelIcon />
			</div>

			<p className="text-black font-bold text-xl leading-10">
				Oops! You don’t have any invoice yet.
			</p>

			<p className="text-sm leading-7 font-[450] text-black/70">
				Create one{" "}
				<Link
					className="text-brand-blue hover:underline hover:decoration-wavy transition-all duration-300 ease-in-out underline-offset-4"
					href="/user/my-invoices/create"
				>
					here.
				</Link>
			</p>
		</div>
	);
};

export default EmptyInvoice;
