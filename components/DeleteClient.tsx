"use client";

import useAuth from "@/hooks/useAuth";
import Alert from "@/components/Alert";
import useClient from "@/hooks/useClient";
import { Dispatch, SetStateAction, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface IDeleteClient {
	toggleModal: Dispatch<SetStateAction<boolean>>;
	clientID: string;
}

const DeleteClient: React.FC<IDeleteClient> = ({ toggleModal, clientID }) => {
	const { authInfo } = useAuth();

	const { deleteClient, resetStatus } = useClient();

	const [isLoading, setIsLoading] = useState(false);

	const handleDelete = async () => {
		const data = {
			userEmail: authInfo?.email ?? "",
			userName: authInfo?.name ?? "",
			sessionID: authInfo?.sessionID ?? "",
			userID: authInfo?.userID ?? "",
			clientID: clientID,
		};

		await deleteClient(data);
	};

	useEffect(() => {
		if (resetStatus.status === "success") {
            setTimeout(() => {
                toggleModal(false);
            }, 1000);
		}
	}, [resetStatus, toggleModal]);

	useEffect(() => {
		setIsLoading(false);
	}, [resetStatus]);

	return (
		<>
			<svg
				width="60"
				height="60"
				viewBox="0 0 70 70"
				fill="none"
			>
				<g opacity="0.9">
					<path
						d="M20.4173 11.6673C20.4173 10.1202 21.0319 8.63649 22.1259 7.54253C23.2198 6.44857 24.7036 5.83398 26.2507 5.83398H43.7506C45.2977 5.83398 46.7815 6.44857 47.8754 7.54253C48.9694 8.63649 49.584 10.1202 49.584 11.6673V17.5007H61.2506C62.0242 17.5007 62.7661 17.8079 63.313 18.3549C63.86 18.9019 64.1673 19.6438 64.1673 20.4173C64.1673 21.1909 63.86 21.9327 63.313 22.4797C62.7661 23.0267 62.0242 23.334 61.2506 23.334H58.1327L55.604 58.7481C55.4992 60.2199 54.8407 61.5972 53.761 62.6027C52.6813 63.6083 51.2607 64.1674 49.7852 64.1673H20.2132C18.7377 64.1674 17.3171 63.6083 16.2374 62.6027C15.1577 61.5972 14.4992 60.2199 14.3944 58.7481L11.8715 23.334H8.75065C7.9771 23.334 7.23524 23.0267 6.68826 22.4797C6.14128 21.9327 5.83398 21.1909 5.83398 20.4173C5.83398 19.6438 6.14128 18.9019 6.68826 18.3549C7.23524 17.8079 7.9771 17.5007 8.75065 17.5007H20.4173V11.6673ZM26.2507 17.5007H43.7506V11.6673H26.2507V17.5007ZM17.7165 23.334L20.2161 58.334H49.7881L52.2877 23.334H17.7165Z"
						fill="#979797"
					/>
				</g>
			</svg>

			<div>
				<h2 className="font-medium text-black/100 text-xl/10">
					Delete Client
				</h2>

				<p>
					Are you sure you want to delete this client? Once deleted it
					can’t be undone.
				</p>
			</div>

			<div className="flex items-center justify-between gap-4">
				<button
					className={cn(
						"btn bg-white/100 border-[1.5px] border-[rgba(151,_151,_151,_1)] font-medium hover:bg-[rgba(151,_151,_151,_1)] hover:text-white py-3 rounded-lg inline-block",
					)}
					type="button"
					onClick={() => toggleModal(false)}
				>
					Cancel
				</button>

				<button
					className={cn(
						"btn bg-brand-red text-white border-[1.5px] border-brand-red font-medium hover:bg-brand-red/60 hover:border-transparent py-3 rounded-lg inline-block",
						{
							"disabled:bg-brand-red/30 disabled:cursor-not-allowed border-transparent animate-pulse":
								isLoading,
						},
					)}
					type="button"
					onClick={() => {
						setIsLoading(true);
						handleDelete();
					}}
					disabled={isLoading}
				>
					{isLoading ? "Deleting client" : "Delete"}
				</button>
			</div>

			<Alert
				statusType={resetStatus.status}
				message={resetStatus.message}
			/>
		</>
	);
};

export default DeleteClient;
