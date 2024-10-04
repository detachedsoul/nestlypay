import { create } from "zustand";
import { persist } from "zustand/middleware";

type AuthInfo = {
	userID: string | null;
	sessionID: string | null;
};

type AuthInfoState = {
	authInfo: AuthInfo;
	setAuthInfo: (info: AuthInfo) => void;
};

const useAuth = create<AuthInfoState>()(
	persist(
		(set) => ({
			authInfo: {
				sessionID: null,
				userID: null,
			},

			setAuthInfo: (info: AuthInfo) =>
				set((state) => ({
					...state,
					authInfo: info,
				})),
		}),
		{
			name: "auth-info",
		},
	),
);

export default useAuth;
