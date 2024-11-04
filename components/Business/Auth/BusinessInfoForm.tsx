"use client";

import useFetch from "@/hooks/useFetch";
import FormInput from "@/components/FormInput";
import FormSelect from "@/components/FormSelect";
import useBusinessForm from "@/hooks/useBusinessForm";
import formHasErrors from "@/lib/formHasErrors";
import isFormFieldsComplete from "@/lib/isFormFieldsComplete";
import zodValidator from "@/lib/zodValidator";
import { useFormStatus } from "react-dom";
import { useState, useEffect } from "react";
import { z } from "zod";
import { SingleValue } from "react-select";

const schema = z.object({
	companyName: z.string().min(1, "Company name is required"),
	companyEmail: z.string().email("Invalid email address"),
	address: z.string().min(1, "Company address is required"),
	country: z.string().min(1, "Country is required"),
	city: z.string().min(1, "City is required"),
	postalCode: z.string().min(1, "Postal code is required"),
	state: z.string().min(1, "State is required"),
	website: z.string().url().optional().nullable()
});

type FormValues = {
	companyName: string;
	companyEmail: string;
	address: string;
	country: string;
	city: string;
	postalCode: string;
	state: string;
	website: string;
};

const fetcher = async (url: string) => {
	const headers = new Headers();
	headers.append(
		"X-CSCAPI-KEY",
		"RHNZWU0zb1JVaHNjbzYwU3JPZm42MUlyYUh2TlpQWmZncXdIN2FPSA==",
	);

	const res = await fetch(url, {
		headers: headers,
		method: "GET",
		redirect: "follow",
	});

	const data = await res.json();

	return data;
};

const BusinessInfoForm = () => {
    const { pending } = useFormStatus();

	const { businessInfo, setBusinessInfo } = useBusinessForm();

	const [formValues, setFormValues] = useState<FormValues>({
		companyName: "",
		companyEmail: "",
		address: "",
		country: "",
		city: "",
		postalCode: "",
        state: "",
        website: "",
    });

    const [countryIso, setCountryIso] = useState("");
	const [stateIso, setStateIso] = useState("");

	const [errors, setErrors] = useState<Partial<FormValues>>({
		companyName: "",
		companyEmail: "",
		address: "",
		country: "",
		city: "",
		postalCode: "",
        state: "",
        website: "",
	});

	const handleBlur = (
		e: React.FocusEvent<HTMLInputElement> | React.FocusEvent<HTMLSelectElement>,
	) => {
		const { name, value } = e.target;

		const { errors, formValue } = zodValidator({
			name: name as keyof FormValues,
			value: value,
			formValues: formValues,
			schema: schema,
		});

		setErrors(errors);

		if (!errors[name as keyof FormValues]) {
			setBusinessInfo({
				...businessInfo,
				[name]: value,
			});
		} else {
			setBusinessInfo({
				...businessInfo,
				[name]: "",
			});
		}
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>,
	) => {
		const { name, value } = e.target;

		setFormValues((prevValues) => ({
			...prevValues,
			[name]: value,
		}));

		const { errors } = zodValidator({
			name: name as keyof FormValues,
			value: value,
			formValues: formValues,
			schema: schema,
		});

		setErrors(errors);

		if (!errors[name as keyof FormValues]) {
			setBusinessInfo({
				...businessInfo,
				[name]: value,
			});
		} else {
			setBusinessInfo({
				...businessInfo,
				[name]: "",
			});
		}
	};

    const hasErrors = formHasErrors(errors);

	const isFormComplete = isFormFieldsComplete([
		formValues.companyName,
		formValues.companyEmail,
		formValues.address,
		formValues.country,
		formValues.city,
		formValues.postalCode,
		formValues.state,
    ]);

    const {
		data: countries,
		error: countriesError,
		isLoading: countriesIsLoading,
	} = useFetch(`https://api.countrystatecity.in/v1/countries`, fetcher);

	const {
		data: states,
		error: statesError,
		isLoading: statesIsLoading,
	} = useFetch(
		`https://api.countrystatecity.in/v1/countries/${countryIso}/states`,
		fetcher,
	);

	const {
		data: cities,
		error: citiesError,
		isLoading: citiesIsLoading,
	} = useFetch(
		`https://api.countrystatecity.in/v1/countries/${countryIso}/states/${stateIso}/cities`,
		fetcher,
	);

	const handleCountryChange = (
		selectedOption: SingleValue<Record<string, any>>,
	) => {
		setFormValues((prevValues) => ({
			...prevValues,
			country: selectedOption ? selectedOption.label : "",
		}));

		setCountryIso(selectedOption ? selectedOption.value : "");

        if (!errors["country" as keyof FormValues]) {
			setBusinessInfo({
				...businessInfo,
				["country"]: selectedOption?.label ?? "",
			});
		} else {
			setBusinessInfo({
				...businessInfo,
				country: "",
			});
		}
	};

	const handleStateChange = (
		selectedOption: SingleValue<Record<string, any>>,
	) => {
		setFormValues((prevValues) => ({
			...prevValues,
			state: selectedOption ? selectedOption.label : "",
		}));

        setStateIso(selectedOption ? selectedOption.value : "");

        if (!errors["state" as keyof FormValues]) {
			setBusinessInfo({
				...businessInfo,
				["state"]: selectedOption?.label ?? "",
			});
		} else {
			setBusinessInfo({
				...businessInfo,
				state: "",
			});
		}
	};

	const handleCityChange = (
		selectedOption: SingleValue<Record<string, any>>,
	) => {
		setFormValues((prevValues) => ({
			...prevValues,
			city: selectedOption ? selectedOption.label : "",
		}));

        if (!errors["city" as keyof FormValues]) {
			setBusinessInfo({
				...businessInfo,
				["city"]: selectedOption?.label ?? "",
			});
		} else {
			setBusinessInfo({
				...businessInfo,
				city: "",
			});
		}
	};

	useEffect(() => {
		if (formValues.country && countries) {
			setCountryIso(
				countries?.find(
					(country: { name: string }) =>
						country.name === formValues.country,
				)?.iso2,
			);
		}
	}, [countries, formValues]);

	useEffect(() => {
		if (formValues.state && !states?.error) {
			setStateIso(
				states?.find(
					(state: { name: string }) =>
						state.name === formValues.state,
				)?.iso2,
			);
		}
	}, [states, formValues, countryIso]);

	useEffect(() => {
		if (formValues.city && !states?.error) {
			setStateIso(
				states?.find(
					(state: { name: string }) =>
						state.name === formValues.state,
				)?.iso2,
			);
		}
	}, [states, formValues, stateIso]);

    return (
		<>
			<label
				className="block"
				htmlFor="companyName"
			>
				<FormInput
					type="text"
					placeholder="Company Name"
					name="companyName"
					value={formValues.companyName}
					onChange={handleChange}
					onBlur={handleBlur}
					error={errors.companyName}
				/>
			</label>

			<label
				className="block"
				htmlFor="companyEmail"
			>
				<FormInput
					type="email"
					placeholder="Company Email"
					name="companyEmail"
					value={formValues.companyEmail}
					onChange={handleChange}
					onBlur={handleBlur}
					error={errors.companyEmail}
				/>
			</label>

			<label
				className="block sm:col-span-2"
				htmlFor="address"
			>
				<FormInput
					type="text"
					placeholder="Address"
					name="address"
					value={formValues.address}
					onChange={handleChange}
					onBlur={handleBlur}
					error={errors.address}
				/>
			</label>

			<div className="grid gap-8 sm:col-span-2 sm:grid-cols-2">
				<label
					className="block"
					htmlFor="country"
				>
					<FormSelect
						data={countries}
						displayValues={{
							label: "name",
							value: "iso2",
						}}
						onChange={handleCountryChange}
						value={
							countries?.find(
								(country: { name: string }) =>
									country.name === formValues.country,
							)
								? {
										label: formValues.country,
										value: countries.find(
											(country: { name: string }) =>
												country.name ===
												formValues.country,
										)?.iso2,
									}
								: null
						}
						placeholder="Select country"
						name="country"
						noOptionsMessage="No country found. Try searching for another country"
						errorMsg={String(countriesError)}
						isLoading={countriesIsLoading}
					/>
				</label>

				<label
					className="block"
					htmlFor="state"
				>
					<FormSelect
						data={states}
						displayValues={{
							label: "name",
							value: "iso2",
						}}
						onChange={handleStateChange}
						value={
							!states?.error &&
							states?.find(
								(state: { name: string }) =>
									state.name === formValues.state,
							)
								? {
										label: formValues.state,
										value: states.find(
											(state: { name: string }) =>
												state.name === formValues.state,
										)?.iso2,
									}
								: null
						}
						placeholder="Select state"
						name="state"
						noOptionsMessage="Select a country to fetch states or try searching for another state"
						errorMsg={String(statesError)}
						isLoading={statesIsLoading}
						errorObjectMsg="Select a country to fetch states"
					/>
				</label>
			</div>

			<div className="grid gap-8 sm:col-span-2 sm:grid-cols-2">
				<label
					className="block"
					htmlFor="city"
				>
					<FormSelect
						data={cities}
						displayValues={{
							label: "name",
							value: "name",
						}}
						onChange={handleCityChange}
						value={
							!cities?.error &&
							cities?.find(
								(city: { name: string }) =>
									city.name === formValues.city,
							)
								? {
										label: formValues.city,
										value: cities.find(
											(city: { name: string }) =>
												city.name === formValues.city,
										)?.name,
									}
								: null
						}
						placeholder="Select city"
						name="city"
						noOptionsMessage="No city found. Try searching for another city"
						errorMsg={String(citiesError)}
						isLoading={citiesIsLoading}
						errorObjectMsg="Select a country and state to fetch cities"
					/>
				</label>

				<label
					className="block"
					htmlFor="postalCode"
				>
					<FormInput
						type="text"
						placeholder="Postal Code"
						name="postalCode"
						value={formValues.postalCode}
						onChange={handleChange}
						onBlur={handleBlur}
						error={errors.postalCode}
					/>
				</label>
			</div>

			<label
				className="block sm:col-span-2"
				htmlFor="website"
			>
				<FormInput
					type="text"
					placeholder="Website (Optional)"
					name="website"
					value={formValues.website}
					onChange={handleChange}
					onBlur={handleBlur}
					error={errors.website}
				/>
			</label>

			<button
				className="submit-btn sm:col-span-2"
				type="submit"
				disabled={hasErrors || !isFormComplete || pending}
			>
				{pending ? "Verifying company email and name" : "Continue"}
			</button>
		</>
	);
};

export default BusinessInfoForm;
