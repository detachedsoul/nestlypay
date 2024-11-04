import useUserDetails from "@/hooks/useUserDetails";
import useAuth from "@/hooks/useAuth";
import { updateUserDetails } from "@/lib/userAction";
import { useState } from "react";

const useUpdateUserDetails = () => {
	const { setUserDetails } = useUserDetails();
    const { authInfo, setAuthInfo } = useAuth();

	const [resetStatus, setResetStatus] = useState<{
		status: "" | "success" | "error";
		message: string;
	}>({
		status: "",
		message: "",
	});

	const updateDetails = async (
		formValues: Record<string, string | null | boolean>,
	) => {
		const detailsParams = {
			sessionID: authInfo?.sessionID ?? "",
			userID: authInfo?.userID ?? "",
            email: authInfo?.email ?? "",
            name: authInfo?.name ?? ""
		};

		const { status, message, data } = await updateUserDetails(
			detailsParams,
			formValues,
		);

		if (status === "success" && data) {
			setUserDetails(data);

			setAuthInfo({
				sessionID: data?.sessionID ?? "",
				userID: data?.id ?? "",
				name: data?.fullName ?? "",
				email: data?.email ?? "",
			});
		}

        setResetStatus({ status, message });

		setTimeout(() => setResetStatus({ status: "", message: "" }), 5000);

		return { status, message };
	};

	return { updateDetails, resetStatus };
};

export default useUpdateUserDetails;
