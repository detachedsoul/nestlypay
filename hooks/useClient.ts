import { useState } from "react";
import { createClientAccount } from "@/actions/userClientsAction";

const useClient = () => {
	const [resetStatus, setResetStatus] = useState<{
		status: "" | "success" | "error";
		message: string;
	}>({
		status: "",
		message: "",
	});

	const createClient = async (formValues: {
		userName: string;
		userEmail: string;
		sessionID: string;
		userID: string;
		clientName: string;
		clientEmail: string;
		phoneNumber: string;
	}) => {
		const { status, message } = await createClientAccount(formValues);

		setResetStatus({ status, message });

		setTimeout(() => setResetStatus({ status: "", message: "" }), 5000);

		return { status, message };
	};

	return { createClient, resetStatus };
};

export default useClient;
