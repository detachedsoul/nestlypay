import { cn } from "@/lib/utils";
import Select, { SingleValue } from "react-select";

const customStyles = {
	control: (base: any, state: any) => ({
		...base,
		color: "rgba(0, 0, 0, 0.7)",
		backgroundColor: "rgba(255, 255, 255, 1)",
		border: "none",
		borderRadius: "0.5rem",
		paddingLeft: "1rem",
		paddingRight: "1rem",
		paddingTop: "0",
		paddingBottom: "0",
		width: "100%",
		fontWeight: "500",
		cursor: "pointer",
		boxShadow: state.isFocused ? "none" : "none",
	}),
	option: (base: any, state: any) => ({
		...base,
		"backgroundColor": state.isSelected
			? "rgba(12, 70, 211, 0.08)"
			: "white",
		"color": state.isSelected
			? "rgb(0 0 0 / 0.7)"
			: "rgba(151, 151, 151, 1)",
		"cursor": "pointer",
		"paddingLeft": "1.5rem",
		"paddingRight": "1.5rem",
		"paddingTop": "0.75rem",
		"paddingBottom": "0.75rem",
		"&:hover": {
			backgroundColor: "rgba(12, 70, 211, 0.08)",
			color: "rgb(0 0 0 / 0.7)",
		},
	}),
	singleValue: (base: any) => ({
		...base,
		color: "rgba(0, 0, 0, 0.7)",
	}),
	placeholder: (base: any) => ({
		...base,
		color: "rgba(151, 151, 151, 1)",
	}),
	menu: (base: any) => ({
		...base,
		borderRadius: "0.5rem",
		border: "1px solid rgba(12, 70, 211, 0.2)",
		boxShadow: "none",
		overflow: "hidden",
		zIndex: 50,
	}),
};

interface IFormSelect<T> {
	noOptionsMessage: string;
	value: { label: string; value?: string } | null;
	errorMsg: string | undefined;
	isLoading: boolean;
	onChange: (selectedOption: SingleValue<Record<string, any>>) => void;
	data: T;
	placeholder: string;
	name: string;
	errorObjectMsg?: string;
	displayValues: { label: keyof T; value: keyof T };
}

const FormSelect = <T extends Record<string, any>>({
	noOptionsMessage,
	value,
	errorMsg,
	isLoading,
	onChange,
	data,
	placeholder,
	name,
	errorObjectMsg,
	displayValues,
}: IFormSelect<T>) => {
	return (
		<>
			{Array.isArray(data) && (
				<Select
					value={value}
					onChange={onChange}
					options={data.map((option: T) => ({
						label: option[displayValues.label as string],
						value: option[displayValues.value as string],
					}))}
					isSearchable
					className={cn("input-select px-0 py-[0.52rem]")}
					placeholder={placeholder}
					styles={customStyles}
					name={name}
					noOptionsMessage={() => noOptionsMessage}
				/>
			)}

			{isLoading && (
				<div className="py-7 px-4 bg-brand-blue/20 animate-pulse rounded-lg"></div>
			)}

			{(errorMsg || data?.error) && (!Array.isArray(data) && !isLoading) && (
				<Select
					isSearchable
					className={cn("input-select px-0 py-[0.52rem]")}
					placeholder={placeholder}
					styles={customStyles}
					name={name}
					noOptionsMessage={() => errorObjectMsg ? errorObjectMsg : errorMsg}
				/>
			)}
		</>
	);
};

export default FormSelect;
