"use client";

import Alert from "@/components/Alert";
import useUserDetails from "@/hooks/useUserDetails";
import useUpdateUserDetails from "@/hooks/useUpdateUserDetails";
import Select, { SingleValue } from "react-select";
import useFetch from "@/hooks/useFetch";
import { useFormStatus } from "react-dom";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

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
		selectedOption: SingleValue<{ label: string; value: string }>,
	) => {
		setFormValues((prevValues) => ({
			...prevValues,
			country: selectedOption ? selectedOption.label : "",
		}));

		setCountryIso(selectedOption ? selectedOption.value : "");
	};

    const handleStateChange = (
		selectedOption: SingleValue<{ label: string; value: string }>,
	) => {
		setFormValues((prevValues) => ({
			...prevValues,
			state: selectedOption ? selectedOption.label : "",
		}));

		setStateIso(selectedOption ? selectedOption.value : "");
	};

    const handleCityChange = (
		selectedOption: SingleValue<{ label: string }>,
	) => {
		setFormValues((prevValues) => ({
			...prevValues,
			city: selectedOption ? selectedOption.label : "",
		}));
	};

    useEffect(() => {
        if (formValues.country) {
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
						<input
							className="input"
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
							<input
								className="input"
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
							{countries && (
								<Select
									value={
										countries?.find(
											(country: { name: string }) =>
												country.name ===
												formValues.country,
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
									onChange={handleCountryChange}
									options={countries?.map(
										(country: {
											name: string;
											iso2: string;
										}) => ({
											label: country.name,
											value: country.iso2,
										}),
									)}
									isSearchable
									className={cn(
										"input-select px-0 py-[0.6rem]",
									)}
									placeholder="Select country"
									styles={customStyles}
									name="country"
									noOptionsMessage={() =>
										"No country found. Try searching for another country"
									}
								/>
							)}

							{countriesIsLoading && (
								<div className="py-7 px-4 bg-brand-blue/20 animate-pulse rounded-lg"></div>
							)}

							{countriesError && (
								<Select
									isSearchable
									className={cn(
										"input-select px-0 py-[0.6rem]",
									)}
									placeholder="Select country"
									styles={customStyles}
									name="country"
									noOptionsMessage={() => countriesError}
								/>
							)}
						</label>
					</div>

					<div className="grid gap-4 lg:grid-cols-2">
						<label
							className="block"
							htmlFor="state"
						>
							{states && !states?.error && (
								<Select
									value={
										states?.find(
											(state: { name: string }) =>
												state.name === formValues.state,
										)
											? {
													label: formValues.state,
													value: states.find(
														(state: {
															name: string;
														}) =>
															state.name ===
															formValues.state,
													)?.iso2,
												}
											: null
									}
									onChange={handleStateChange}
									options={states?.map(
										(state: {
											name: string;
											iso2: string;
										}) => ({
											label: state.name,
											value: state.iso2,
										}),
									)}
									isSearchable
									className={cn(
										"input-select px-0 py-[0.6rem]",
									)}
									placeholder="Select state"
									styles={customStyles}
									name="state"
									noOptionsMessage={() =>
										"No state found. Try searching for another state"
									}
								/>
							)}

							{states?.error && (
								<Select
									isSearchable
									className={cn(
										"input-select px-0 py-[0.6rem]",
									)}
									placeholder="Select state"
									styles={customStyles}
									name="state"
									noOptionsMessage={() =>
										"Select a country to fetch cities or try searching for another state"
									}
								/>
							)}

							{statesError && (
								<Select
									isSearchable
									className={cn(
										"input-select px-0 py-[0.6rem]",
									)}
									placeholder="Select state"
									styles={customStyles}
									name="state"
									noOptionsMessage={() => statesError}
								/>
							)}

							{statesIsLoading && (
								<div className="py-7 px-4 bg-brand-blue/20 animate-pulse rounded-lg"></div>
							)}
						</label>

						<label
							className="block"
							htmlFor="city"
						>
							{cities && !cities?.error && (
								<Select
									value={
										cities?.find(
											(city: { name: string }) =>
												city.name === formValues.city,
										)
											? {
													label: cities.find(
														(city: {
															name: string;
														}) =>
															city.name ===
															formValues.city,
													)?.name,
													value: cities.find(
														(city: {
															name: string;
														}) =>
															city.name ===
															formValues.city,
													)?.name,
												}
											: null
									}
									onChange={handleCityChange}
									options={cities?.map(
										(city: { name: string }) => ({
											label: city.name,
											value: city.name,
										}),
									)}
									isSearchable
									className={cn(
										"input-select px-0 py-[0.6rem]",
									)}
									placeholder="Select city"
									styles={customStyles}
									name="city"
									noOptionsMessage={() =>
										"No city found. Try searching for another city"
									}
								/>
							)}

							{cities?.error && (
								<Select
									isSearchable
									className={cn(
										"input-select px-0 py-[0.6rem]",
									)}
									placeholder="Select city"
									styles={customStyles}
									name="city"
									noOptionsMessage={() =>
										"Select a country and state to fetch cities"
									}
								/>
							)}

							{citiesError && (
								<Select
									isSearchable
									className={cn(
										"input-select px-0 py-[0.6rem]",
									)}
									placeholder="Select city"
									styles={customStyles}
									name="city"
									noOptionsMessage={() => citiesError}
								/>
							)}

							{citiesIsLoading && (
								<div className="py-7 px-4 bg-brand-blue/20 animate-pulse rounded-lg"></div>
							)}
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
