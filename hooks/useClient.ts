import { useState } from "react";
import {
	createClientAccount,
	deleteClientAccount,
	updateClientAccount,
} from "@/actions/userClientsAction";

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

    const updateClient = async (formValues: {
		userName: string;
		userEmail: string;
		sessionID: string;
		userID: string;
		clientName: string;
		clientEmail: string;
		phoneNumber: string;
        clientID: string
	}) => {
		const { status, message } = await updateClientAccount(formValues);

		setResetStatus({ status, message });

		setTimeout(() => setResetStatus({ status: "", message: "" }), 5000);

		return { status, message };
    };

    const deleteClient = async (formValues: {
		userName: string;
		userEmail: string;
		sessionID: string;
		userID: string;
		clientID: string;
	}) => {
		const { status, message } = await deleteClientAccount(formValues);

		setResetStatus({ status, message });

		setTimeout(() => setResetStatus({ status: "", message: "" }), 5000);

		return { status, message };
	};

	return { createClient, deleteClient, updateClient, resetStatus };
};

export default useClient;
