import useAuth from "./useAuth";
import { getUserDetails } from "@/lib/userAction";
import { useEffect, useState } from "react";

const useUserDetails = () => {
    const { authInfo } = useAuth();

    const [userDetails, setUserDetails] = useState({
        status: "",
        message: "",
        data: null
    });

    useEffect(() => {
        const fetchUserDetails = async () => {
            if (!authInfo) {
                return;
            }

            const {status, message, data} = await getUserDetails(authInfo);

            setUserDetails({
                status,
                message,
                data: data as keyof typeof data
            });
        };

        fetchUserDetails();
    }, [authInfo]);

    return { details: userDetails };
};

export default useUserDetails;
