import Image from "next/image";
import Link from "next/link";
import InvoiceSample from "@/assets/img/invoice-sample.png";

const Invoices = () => {
    return (
		<div className="space-y-[30px]">
			<h2 className="font-medium text-lg/[36px] text-black/100">
				My Invoices
			</h2>

			<div className="grid gap-x-4 gap-y-8 grid-cols-2 md:gap-8 lg:grid-cols-4 lg:gap-[90px]">
				{Array.from({ length: 3 }).map((_, index: number) => (
					<Link
						className="space-y-4"
						key={index}
						href={`/user/my-invoices/${index}`}
					>
						<div className="rounded-[10px] w-full h-40">
							<Image
								className="rounded-[10px] w-full h-full"
								src={InvoiceSample}
								alt="Egocentric Pharmacy"
							/>
						</div>

						<p>Egocentric Pharmacy</p>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Invoices;
