import { create } from "zustand";
import { persist } from "zustand/middleware";

type AuthInfo = {
	userID: string | null;
	sessionID: string | null;
    name: string | null;
    email: string | null;
};

type AuthInfoState = {
	authInfo: AuthInfo;
	setAuthInfo: (info: AuthInfo) => void;
	resetAuthInfo: () => void;
};

const useAuth = create<AuthInfoState>()(
	persist(
		(set) => ({
			authInfo: {
				sessionID: null,
				userID: null,
				name: null,
				email: null,
			},

			setAuthInfo: (info: AuthInfo) =>
				set((state) => ({
					...state,
					authInfo: info,
				})),

			resetAuthInfo: () =>
				set((state) => ({
					...state,
					authInfo: {
						sessionID: null,
						userID: null,
						name: null,
						email: null,
					},
				})),
		}),
		{
			name: "auth-info",
		},
	),
);

export default useAuth;
