"use client";

import Alert from "@/components/Alert";
import useUserDetails from "@/hooks/useUserDetails";
import useUpdateUserDetails from "@/hooks/useUpdateUserDetails";
import { SingleValue } from "react-select";
import useFetch from "@/hooks/useFetch";
import FormInput from "@/components/FormInput";
import FormSelect from "@/components/FormSelect";
import { useFormStatus } from "react-dom";
import { useState, useEffect } from "react";

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

const ProfileSettings = (): JSX.Element => {
	const { userDetails } = useUserDetails();
	const { updateDetails, resetStatus } = useUpdateUserDetails();

	const [formValues, setFormValues] = useState({
		address: userDetails?.address ?? "",
		city: userDetails?.city ?? "",
		postalCode: userDetails?.postalCode ?? "",
		country: userDetails?.country ?? "",
		state: userDetails?.state ?? "",
	});

	const [countryIso, setCountryIso] = useState("");
	const [stateIso, setStateIso] = useState("");

	useEffect(() => {
		if (userDetails) {
			setFormValues({
				address: userDetails.address ?? "",
				city: userDetails.city ?? "",
				postalCode: userDetails.postalCode ?? "",
				country: userDetails.country ?? "",
				state: userDetails.state ?? "",
			});
		}
	}, [userDetails]);

	const handleUpdate = async () => {
		await updateDetails(formValues);
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
	) => {
		const { name, value } = e.target;

		setFormValues((prevValues) => ({
			...prevValues,
			[name]: value,
		}));
	};

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
	};

	const handleStateChange = (
		selectedOption: SingleValue<Record<string, any>>,
	) => {
		setFormValues((prevValues) => ({
			...prevValues,
			state: selectedOption ? selectedOption.label : "",
		}));

		setStateIso(selectedOption ? selectedOption.value : "");
	};

	const handleCityChange = (
		selectedOption: SingleValue<Record<string, any>>,
	) => {
		setFormValues((prevValues) => ({
			...prevValues,
			city: selectedOption ? selectedOption.label : "",
		}));
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
			<form
				className="lg:w-3/5 xl:w-1/2 lg:mx-auto settings-card"
				action={handleUpdate}
			>
				<h2 className="text-black/100 font-medium text-2xl/10">
					Contact Information
				</h2>

				<p className="mt-1">
					Provide your legal name, home address and work mail.
				</p>

				<div className="space-y-4 mt-8">
					<label
						className="block"
						htmlFor="email"
					>
						<input
							className="input"
							type="email"
							placeholder="Email Address"
							name="email"
							value={userDetails?.email}
							disabled
						/>
					</label>

					<label
						className="block"
						htmlFor="address"
					>
						<FormInput
							type="text"
							placeholder="Home Address"
							name="address"
							value={String(formValues.address)}
							onChange={handleChange}
						/>
					</label>

					<div className="grid gap-4 lg:grid-cols-2">
						<label
							className="block"
							htmlFor="postalCode"
						>
							<FormInput
								type="text"
								placeholder="Postal Code"
								name="postalCode"
								value={String(formValues.postalCode)}
								onChange={handleChange}
							/>
						</label>

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
													(country: {
														name: string;
													}) =>
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
					</div>

					<div className="grid gap-4 lg:grid-cols-2">
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
														state.name ===
														formValues.state,
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
														city.name ===
														formValues.city,
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
					</div>

					<SubmitButton />
				</div>
			</form>

			<Alert
				statusType={resetStatus.status}
				message={resetStatus.message}
			/>
		</>
	);
};

export const SubmitButton = () => {
	const { pending } = useFormStatus();

	return (
		<button
			className="submit-btn sm:col-span-2"
			type="submit"
			disabled={pending}
		>
			{pending ? "Updating profile..." : "Update"}
		</button>
	);
};

export default ProfileSettings;
