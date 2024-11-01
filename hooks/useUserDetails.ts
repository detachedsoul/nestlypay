import { create } from "zustand";
import { persist } from "zustand/middleware";

type UserDetails = {
    id: string;
    fullName: string;
    email: string;
    password: string;
    sessionID: string;
    address: string | null;
    city: string | null;
    phoneNumber: string | null;
    country: string | null;
    postalCode: string | null;
    state: string | null;
    bankName: string | null;
    accountNumber: string | null;
    accountName: string | null;
    acceptTransfer: boolean;
    acceptCrypto: boolean;
    receiveReceipt: boolean;
    customerReceiveReceipt: boolean;
} | null;

type UserDetailsState = {
	userDetails: UserDetails;
	setUserDetails: (info: UserDetails) => void;
};

const useAuth = create<UserDetailsState>()(
	persist(
		(set) => ({
			userDetails: {
				id: "",
				fullName: "",
				email: "",
				password: "",
				sessionID: "",
				address: null,
				city: null,
				phoneNumber: null,
				country: null,
				postalCode: null,
				state: null,
				bankName: null,
				accountNumber: null,
				accountName: null,
				acceptTransfer: false,
				acceptCrypto: false,
				receiveReceipt: false,
				customerReceiveReceipt: false,
			},

			setUserDetails: (details: UserDetails) =>
				set((state) => ({
					...state,
					userDetails: details,
				})),

			resetUserDetails: () =>
				set((state) => ({
					...state,
					userDetails: {
						id: "",
						fullName: "",
						email: "",
						password: "",
						sessionID: "",
						address: null,
						city: null,
						phoneNumber: null,
						country: null,
						postalCode: null,
						state: null,
						bankName: null,
						accountNumber: null,
						accountName: null,
						acceptTransfer: false,
						acceptCrypto: false,
						receiveReceipt: false,
						customerReceiveReceipt: false,
					},
				})),
		}),
		{
			name: "user-details",
		},
	),
);

export default useAuth;
