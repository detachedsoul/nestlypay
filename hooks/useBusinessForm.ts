import { create } from "zustand";
import { persist } from "zustand/middleware";

type BusinessInfo = {
	firstName: string;
	lastName: string;
	email: string;
	companyName: string;
	companyEmail: string;
	address: string;
	city: string;
	state: string;
	postalCode: string;
	country: string;
	website?: string;
	password: string;
	confirmPassword: string;
};

type BusinessInfoState = {
	businessInfo: BusinessInfo;
	setBusinessInfo: (info: BusinessInfo) => void;
};

const useBusinessForm = create<BusinessInfoState>()(
	persist(
		(set) => ({
			businessInfo: {
				firstName: "",
				lastName: "",
				email: "",
				companyName: "",
				companyEmail: "",
				address: "",
				city: "",
				state: "",
				postalCode: "",
				country: "",
				website: "",
				password: "",
				confirmPassword: "",
			},

			setBusinessInfo: (info: BusinessInfo) =>
				set((state) => ({
					...state,
					businessInfo: info,
				})),
		}),
		{
			name: "business-info",
		},
	),
);

export default useBusinessForm;
