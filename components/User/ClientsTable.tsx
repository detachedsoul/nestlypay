"use client";

import PopupWrapper from "@/components/PopupWrapper";
import TableLoading from "@/components/TableLoading";
import useAuth from "@/hooks/useAuth";
import AddClient from "@/components/AddClient";
import DeleteClient from "@/components/DeleteClient";
import EditClient from "@/components/EditClient";
import NotFoundIcon from "@/assets/img/not-found-danger-icon.svg";
import Image from "next/image";
import formatDate from "@/lib/formatDate";
import { usePrismaFetch } from "@/hooks/useFetch";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Trash2Icon, FilePenLineIcon } from "lucide-react";
import { fetchClient } from "@/actions/userClientsAction";

const fetch = async ({
	userEmail,
	sessionID,
	userName,
	userID,
}: {
	userEmail: string;
	sessionID: string;
	userName: string;
	userID: string;
}) => {
	const { data, status, message } = await fetchClient({
		userEmail: userEmail,
		sessionID: sessionID,
		userName: userName,
		userID: userID,
	});

	return { data, status, message };
};

const ClientsTable = () => {
	const { authInfo } = useAuth();

	const [popupIsActive, setPopupIsActive] = useState(false);
	const [modalType, setModalType] = useState<
		"Delete" | "Edit" | "Add Client" | ""
	>("");

	const [selectedClient, setSelectedClient] = useState<{
		email: string;
		id: string;
		fullName: string;
		phoneNumber: string;
		createdAt: Date;
		updatedAt: Date;
		customerID: string;
	}>({
		email: "",
		id: "",
		fullName: "",
		phoneNumber: "",
		createdAt: new Date(),
		updatedAt: new Date(),
		customerID: "",
	});

	const {
		data: clients,
		error,
		isLoading,
	} = usePrismaFetch({
		key: [
			"fetchClient",
			authInfo?.email,
			authInfo?.sessionID,
			authInfo?.name,
			authInfo?.userID,
		],
		fetcher: () =>
			fetch({
				userEmail: authInfo?.email ?? "",
				sessionID: authInfo?.sessionID ?? "",
				userName: authInfo?.name ?? "",
				userID: authInfo?.userID ?? "",
			}),
		refreshInterval: 1000,
	});

	return (
		<>
			<div className="flex items-center gap-4 justify-between flex-wrap text-black/100">
				<h1 className="font-bold text-xl/10 text-black/100">Clients</h1>

				<button
					className={cn(
						"btn bg-white/100 border-2 border-brand-blue font-medium text-brand-blue hover:bg-brand-blue hover:text-white hover:border-white py-4 rounded-xl inline-block",
					)}
					type="button"
					onClick={() => {
						setModalType("Add Client");
						setPopupIsActive(true);
					}}
				>
					Add New Client
				</button>
			</div>

			{(error || clients?.status === "error") && (
				<div className="sm:w-4/5 md:w-3/5 sm:mx-auto grid gap-6 gap-x-6 text-center translate-y-1/3 sm:translate-y-0">
					<Image
						className="w-32 h-auto mx-auto"
						src={NotFoundIcon}
						alt=""
					/>

					<p className="text-brand-red font-medium rounded py-1 px-3 inline-block mx-auto bg-brand-red/10 duration-500 animate-pulse w-fit backdrop-blur-2xl text-lg text-center">
						An error occured
					</p>

					<p className="text-brand-red">
						{String(error ?? clients.message)}
					</p>
				</div>
			)}

			{isLoading && !clients?.data && !error && (
				<TableLoading
					row={6}
					col={6}
				/>
			)}

			{clients?.data &&
				!isLoading &&
				!error &&
				clients?.data?.length > 0 && (
					<div className="overflow-x-auto custom-scrollbar">
						<table className="w-full border-collapse whitespace-nowrap table-auto">
							<thead className="text-left">
								<tr>
									<th className="text-black/100 font-medium py-3 pr-8">
										{""}
									</th>

									<th className="text-black/100 font-medium py-3 pr-8">
										Name
									</th>

									<th className="text-black/100 font-medium py-3 pr-8">
										Email Address
									</th>

									<th className="text-black/100 font-medium py-3 pr-8">
										Phone
									</th>

									<th className="text-black/100 font-medium py-3 pr-8">
										Created Date
									</th>

									<th className="text-black/100 font-medium py-3 pr-8">
										Last Updated
									</th>

									<th className="text-black/100 font-medium py-3 pr-8">
										Action
									</th>
								</tr>
							</thead>

							<tbody>
								{clients?.data?.map(
									(client: {
										email: string;
										id: string;
										fullName: string;
										phoneNumber: string;
										createdAt: Date;
										updatedAt: Date;
										customerID: string;
									}) => (
										<tr key={client.id}>
											<td className="font-medium py-3 pr-4">
												<div className="bg-brand-blue text-white w-10 h-10 rounded-full font-black grid place-content-center place-items-center">
													{client.fullName.charAt(0)}
												</div>
											</td>

											<td className="py-3 pr-8 text-black/80">
												{client.fullName}
											</td>

											<td className="py-3 pr-8 text-black/80 no-underline">
												{client.email}
											</td>

											<td className="py-3 pr-8 text-black/80">
												{client.phoneNumber}
											</td>

											<td className="py-3 pr-8 text-black/80">
												{formatDate(client.createdAt)}
											</td>

											<td className="py-3 pr-8 text-black/80">
												{formatDate(client.updatedAt)}
											</td>

											<td className="py-3 pr-8 text-black/80">
												<button
													className="mr-6"
													type="button"
													aria-label="Edit user"
													onClick={() => {
														setModalType("Edit");

														setPopupIsActive(true);

														setSelectedClient(
															client,
														);
													}}
												>
													<FilePenLineIcon
														strokeWidth={1.5}
													/>
												</button>

												<button
													type="button"
													aria-label="Delete user"
													onClick={() => {
														setModalType("Delete");

														setPopupIsActive(true);

														setSelectedClient(
															client,
														);
													}}
												>
													<Trash2Icon
														strokeWidth={1.5}
													/>
												</button>
											</td>
										</tr>
									),
								)}
							</tbody>
						</table>
					</div>
				)}

			{clients?.data?.length < 1 && (
				<div className="sm:w-4/5 md:w-3/5 sm:mx-auto grid gap-6 gap-x-6 text-center translate-y-1/3 sm:translate-y-0">
					<Image
						className="w-32 h-auto mx-auto"
						src={NotFoundIcon}
						alt=""
					/>

					<h1 className="text-2xl lg:text-4xl text-brand-red font-bold">
						You don’t have any client yet.
					</h1>

					<p>
						Use the{" "}
						<button
							className={cn(
								"font-medium text-brand-blue  inline-block underline underline-offset-4 decoration-wavy",
							)}
							type="button"
							onClick={() => {
								setModalType("Add Client");
								setPopupIsActive(true);
							}}
						>
							Add New Client
						</button>{" "}
						button to add a client.
					</p>
				</div>
			)}

			<PopupWrapper
				isActive={popupIsActive}
				toggleIsActive={() => setPopupIsActive(false)}
				className="lg:w-1/3"
			>
				<div className="space-y-8">
					{modalType === "Delete" && (
						<DeleteClient
							toggleModal={setPopupIsActive}
							clientID={selectedClient.id}
						/>
					)}

					{modalType === "Edit" && (
						<EditClient
							toggleModal={setPopupIsActive}
							selectedClient={selectedClient}
						/>
					)}

					{modalType === "Add Client" && (
						<AddClient toggleModal={setPopupIsActive} />
					)}
				</div>
			</PopupWrapper>
		</>
	);
};

export default ClientsTable;
