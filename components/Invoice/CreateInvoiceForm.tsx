"use client";

import Image from "next/image";
import FormInput from "@/components/FormInput";
import BluePlusIcon from "@/components/BluePlusIcon";
import useUserDetails from "@/hooks/useUserDetails";
import InvoiceDate from "./InvoiceDate";
import { useState, ChangeEvent } from "react";

interface FormField {
	[key: string]: string;
}

const CreateInvoiceForm = () => {
	const { userDetails } = useUserDetails();

	const [issueDate, setIssueDate] = useState<Date | string>("");
	const [dueDate, setDueDate] = useState<Date | string>("");

	const [imageUrl, setImageUrl] = useState<string | null>(null);

	const [formValues, setFormValues] = useState<{
		phoneNumber: string;
		clientName: string;
		clientEmail: string;
		clientPhoneNumber: string;
	}>({
		phoneNumber: userDetails?.phoneNumber ?? "",
		clientName: "",
		clientEmail: "",
		clientPhoneNumber: "",
	});

	// Items state
	const [invoiceItem, setInvoiceItem] = useState<{
		itemName: string;
		itemDescription: string;
		quantity: string;
		amount: string;
	}>({
		itemName: "",
		itemDescription: "",
		quantity: "",
		amount: "",
	});

	// Added form fields
	const [items, setItems] = useState<FormField[]>([]);

	const addField = () => {
        setItems((prev) => {
            return [
                ...prev,

                { name: "", value: "" },
            ];
        });
	};

	const handleItemChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const { name, value } = e.target;

		setItems((prev) => {
            const fields = [...prev];

            fields[index].name = name;
            fields[index].value = value;

            const updatedFields = [...fields];

            updatedFields[index][name] = value;

            return [
                ...updatedFields
            ];
		});
    };

	const showUploadedImage = (fileInputSelector: HTMLInputElement) => {
		const reader = new FileReader();

		reader.onload = (e: ProgressEvent<FileReader>) => {
			const target = e.target as FileReader;
			setImageUrl(target.result as string);
		};

		if (fileInputSelector.files && fileInputSelector.files[0]) {
			reader.readAsDataURL(fileInputSelector.files[0]);
		}
	};

	const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
		const fileInputSelector = e.target as HTMLInputElement;
		showUploadedImage(fileInputSelector);
    };

    const handleChange = (
		e: React.ChangeEvent<HTMLInputElement>,
	) => {
		const { name, value } = e.target;

		if (value === "") {
			setFormValues((prevValues) => {
				return {
					...prevValues,
					[name]: value,
				};
			});

			return;
		}

		setFormValues((prevValues) => {
			return {
				...prevValues,
				[name]: value,
			};
		});
	};

    const handleInvoiceItemChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		if (value === "") {
			setInvoiceItem((prevValues) => {
				return {
					...prevValues,
					[name]: value,
				};
			});

			return;
		}

		setInvoiceItem((prevValues) => {
			return {
				...prevValues,
				[name]: value,
			};
		});
	};

	return (
		<form className="bg-white/100 rounded-[1.875rem] space-y-11 py-10 px-8">
			<div className="grid gap-5 items-center sm:grid-cols-2">
				<div className="w-auto md:mr-auto inline-block relative cursor-pointer rounded-[0.313rem] hover:bg-[#979797]/5 hover:text-[#979797] transition-colors ease-in-out duration-300 group">
					<label
						className="rounded-[0.313rem] cursor-pointer relative block dashed-border"
						htmlFor="logo"
					>
						<span className="sr-only">Upload logo</span>

						<div className="flex items-center gap-3 py-3.5 px-6 relative">
							<div className="shrink-0">
								<svg
									width="22"
									height="16"
									viewBox="0 0 22 16"
									fill="none"
								>
									<path
										className="fill-[#979797] group-hover:fill-[#979797]"
										d="M5.5 16C3.98333 16 2.68767 15.475 1.613 14.425C0.537667 13.375 0 12.0917 0 10.575C0 9.275 0.391667 8.11667 1.175 7.1C1.95833 6.08333 2.98333 5.43333 4.25 5.15C4.66667 3.61667 5.5 2.375 6.75 1.425C8 0.475 9.41667 0 11 0C12.95 0 14.604 0.679 15.962 2.037C17.3207 3.39567 18 5.05 18 7C19.15 7.13333 20.1043 7.629 20.863 8.487C21.621 9.34567 22 10.35 22 11.5C22 12.75 21.5627 13.8127 20.688 14.688C19.8127 15.5627 18.75 16 17.5 16H12C11.45 16 10.9793 15.8043 10.588 15.413C10.196 15.021 10 14.55 10 14V8.85L8.4 10.4L7 9L11 5L15 9L13.6 10.4L12 8.85V14H17.5C18.2 14 18.7917 13.7583 19.275 13.275C19.7583 12.7917 20 12.2 20 11.5C20 10.8 19.7583 10.2083 19.275 9.725C18.7917 9.24167 18.2 9 17.5 9H16V7C16 5.61667 15.5127 4.43733 14.538 3.462C13.5627 2.48733 12.3833 2 11 2C9.61667 2 8.43767 2.48733 7.463 3.462C6.48767 4.43733 6 5.61667 6 7H5.5C4.53333 7 3.70833 7.34167 3.025 8.025C2.34167 8.70833 2 9.53333 2 10.5C2 11.4667 2.34167 12.2917 3.025 12.975C3.70833 13.6583 4.53333 14 5.5 14H8V16H5.5Z"
									/>
								</svg>
							</div>

							<div>
								<p className="font-[450] text-sm/6">
									Upload Logo
								</p>

								<p className="text-[0.625rem]/[1.125rem]">
									Recommended size 300x90 (png, jpg)
								</p>
							</div>
						</div>

						<input
							type="file"
							accept=".png,.jpg"
							className="h-full cursor-pointer opacity-0 absolute inset-0 w-full rounded-[0.313rem] z-50"
							id="logo"
							name="logo"
							onChange={handleImageChange}
						/>

						{imageUrl && (
							<Image
								className="absolute inset-0 w-full h-full object-cover object-center rounded-[0.313rem] cursor-pointer aspect-square"
								src={imageUrl ?? ""}
								fill
								alt=""
							/>
						)}
					</label>
				</div>

				<div className="grid gap-5 grid-cols-2">
					<InvoiceDate
						text="Issue Date"
						date={issueDate}
						setDate={setIssueDate}
					/>
					<InvoiceDate
						text="Due Date"
						date={dueDate}
						setDate={setDueDate}
					/>
				</div>
			</div>

			<div className="grid gap-8 sm:grid-cols-2 md:gap-10 lg:gap-20">
				<div className="grid gap-4">
					<h2 className="font-bold text-xl/10 text-black/100">
						Bill From
					</h2>

					<input
						className="input"
						name="name"
						value={userDetails?.fullName ?? ""}
						type="text"
						placeholder="Full Name"
						disabled
					/>

					<input
						className="input"
						name="email"
						value={userDetails?.email ?? ""}
						type="email"
						placeholder="Email Address"
						disabled
					/>

					<FormInput
						name="phoneNumber"
						value={formValues?.phoneNumber ?? ""}
						type="text"
						placeholder="Phone Number"
						onChange={handleChange}
					/>
				</div>

				<div className="grid gap-4">
					<h2 className="font-bold text-xl/10 text-black/100">
						Client Information
					</h2>

					<FormInput
						name="clientName"
						value={formValues?.clientName}
						type="text"
						placeholder="Client or Company Name"
						onChange={handleChange}
					/>

					<FormInput
						name="clientEmail"
						value={formValues?.clientEmail}
						type="text"
						placeholder="Client or Company Email"
						onChange={handleChange}
					/>

					<FormInput
						name="clientPhoneNumber"
						value={formValues?.clientPhoneNumber}
						type="text"
						placeholder="Client or Company Phone Number"
						onChange={handleChange}
					/>
				</div>
			</div>

			<div className="space-y-4">
				<h2 className="font-bold text-xl/10 text-black/100">
					Item Details
				</h2>

				<div className="grid gap-4">
					<div className="grid grid-cols-12 gap-4 border-b border-[rgba(241,_241,_241,_1)] last:border-0 pb-4 md:pb-0 md:border-0">
						<FormInput
							className="col-span-12 sm:col-span-2 md:col-span-3"
							name="itemName"
							value={invoiceItem.itemName}
							type="text"
							placeholder="Item Name"
							onChange={handleInvoiceItemChange}
						/>

						<FormInput
							className="col-span-12 sm:col-span-2 md:col-span-5"
							name="itemDescription"
							value={invoiceItem.itemDescription}
							type="text"
							placeholder="Item Description"
							onChange={handleInvoiceItemChange}
						/>

						<FormInput
							className="col-span-6 sm:col-span-2"
							name="quantity"
							value={invoiceItem.quantity}
							type="text"
							placeholder="Quantity"
							onChange={handleInvoiceItemChange}
						/>

						<FormInput
							className="col-span-6 sm:col-span-2"
							name="amount"
							value={invoiceItem.amount}
							type="text"
							placeholder="Amount"
							onChange={handleInvoiceItemChange}
						/>
					</div>

					{items.map((field: FormField, index: number) => (
						<div
							className="grid grid-cols-12 gap-4 border-b border-[rgba(241,_241,_241,_1)] last:border-0 pb-4 md:pb-0 md:border-0"
							key={index}
						>
							<FormInput
								className="col-span-12 sm:col-span-2 md:col-span-3"
								name={`ItemName-${index + 1}`}
								value={`${field[`ItemName-${index + 1}`] ?? ""}`}
								type="text"
								placeholder="Item Name"
								onChange={(e) => handleItemChange(e, index)}
							/>

							<FormInput
								className="col-span-12 sm:col-span-2 md:col-span-5"
								name={`itemDescription-${index + 1}`}
								value={`${field[`itemDescription-${index + 1}`] ?? ""}`}
								type="text"
								placeholder="Item Description"
								onChange={(e) => handleItemChange(e, index)}
							/>

							<FormInput
								className="col-span-6 sm:col-span-2"
								name={`quantity-${index + 1}`}
								value={`${field[`quantity-${index + 1}`] ?? ""}`}
								type="text"
								placeholder="Quantity"
								onChange={(e) => handleItemChange(e, index)}
							/>

							<FormInput
								className="col-span-6 sm:col-span-2"
								name={`amount-${index + 1}`}
								value={`${field[`amount-${index + 1}`] ?? ""}`}
								type="text"
								placeholder="Amount"
								onChange={(e) => handleItemChange(e, index)}
							/>
						</div>
					))}
				</div>
			</div>

			<div className="grid place-content-end">
				<button
					type="button"
					aria-label="Add more items"
					onClick={addField}
				>
					<BluePlusIcon />
				</button>
			</div>

			<div className="rounded-md bg-[rgba(245,_245,_245,_1)] p-4 mt-24 lg:mt-32 space-y-4 lg:w-2/5 lg:ml-auto">
				<div className="flex items-center gap-4 justify-between text-sm">
					<p>Net Worth</p>

					<p className="font-medium text-black/80">₦ 900,00.00</p>
				</div>

				<div className="flex items-center gap-4 justify-between text-xs">
					<p>Sub</p>

					<p className="font-medium text-black/80">₦ 200,00.00</p>
				</div>

				<div className="flex items-center gap-4 justify-between">
					<p className="font-medium text-black/100">TOTAL</p>

					<p className="font-medium text-black/100">₦ 200,00.00</p>
				</div>
			</div>

			<div className="flex items-center gap-4 flex-wrap mt-8 place-content-end">
				<button
					className="btn bg-white/100 border-2 border-brand-blue font-medium text-brand-blue hover:bg-brand-blue hover:text-white hover:border-transparent py-3.5 px-8 rounded-lg inline-block"
					type="button"
					onClick={() => console.log("Got here")}
				>
					Preview
				</button>

				<button
					className="btn bg-brand-blue border-2 border-transparent font-medium text-white hover:bg-brand-blue/70 hover:text-white hover:border-transparent py-3.5 px-8 rounded-lg inline-block"
					type="button"
				>
					Send
				</button>
			</div>
		</form>
	);
};

export default CreateInvoiceForm;
