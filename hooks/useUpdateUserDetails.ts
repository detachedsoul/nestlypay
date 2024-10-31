// import useUserDetails from "@/hooks/useUserDetails";
// import useAuth from "@/hooks/useAuth";
// import { updateUserDetails } from "@/lib/userAction";

// const useUpdateUserDetails = async (
// 	formValues: Record<string, string | null | boolean>,
// ) => {
// 	const { setUserDetails } = useUserDetails();
// 	const { authInfo, setAuthInfo } = useAuth();

//     const detailsParams = {
// 		sessionID: authInfo?.sessionID ?? "",
// 		userID: authInfo?.userID ?? "",
// 		name: authInfo?.name ?? "",
// 		email: authInfo?.email ?? "",
// 	};

//     const { status, message, data } = await updateUserDetails(detailsParams, formValues);

//     if (status === "success") {
//         setUserDetails(data as keyof typeof data);

//         setAuthInfo({
// 			sessionID: (await data)?.sessionID ?? "",
// 			userID: (await data)?.id ?? "",
// 			name: (await data)?.fullName ?? "",
// 			email: (await data)?.email ?? "",
// 		});
//     }

//     console.log(status, message, data );

//     return { status, message };
// };

// export default useUpdateUserDetails;


// hooks/useUpdateUserDetails.ts
import useUserDetails from "@/hooks/useUserDetails";
import useAuth from "@/hooks/useAuth";
import { updateUserDetails } from "@/lib/userAction";

const useUpdateUserDetails = () => {
	const { setUserDetails } = useUserDetails();
	const { authInfo, setAuthInfo } = useAuth();

	const updateDetails = async (formValues: Record<string, string | null | boolean>) => {
		const detailsParams = {
			sessionID: authInfo?.sessionID ?? "",
			userID: authInfo?.userID ?? "",
			name: authInfo?.name ?? "",
			email: authInfo?.email ?? "",
		};

		const { status, message, data } = await updateUserDetails(
			detailsParams,
			formValues,
		);

        console.log(status, message, data);

		if (status === "success" && data) {
            setUserDetails((await data));

			setAuthInfo({
				sessionID: (await data)?.sessionID ?? "",
				userID: (await data)?.id ?? "",
				name: (await data)?.fullName ?? "",
				email: (await data)?.email ?? "",
			});
		}

		return { status, message };
	};

	return { updateDetails };
};

export default useUpdateUserDetails;
