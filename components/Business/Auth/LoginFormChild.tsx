"use client";

import isFormFieldsComplete from "@/lib/isFormFieldsComplete";
import FormInput from "@/components/FormInput";
import { useFormStatus } from "react-dom";
import { useState } from "react";

const LoginFormChild = () => {
	const [formValues, setFormValues] = useState({
		email: "",
		password: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		setFormValues((prevValues) => ({
			...prevValues,
			[name]: value,
		}));
	};

    const isFormComplete = isFormFieldsComplete(formValues);

    const { pending } = useFormStatus();

    return (
		<div className="space-y-8 mt-8">
			<label
				className="block"
				htmlFor="email"
			>
				<FormInput
					type="email"
					placeholder="Email Address"
					name="email"
					value={formValues.email}
					onChange={handleChange}
				/>
			</label>

			<label
				className="block relative"
				htmlFor="password"
			>
				<FormInput
					type="password"
					placeholder="Password"
					name="password"
					value={formValues.password}
					onChange={handleChange}
				/>
			</label>

			<button
				className="submit-btn"
				type="submit"
				disabled={!isFormComplete || pending}
			>
				{pending ? "Signing In..." : "Sign In"}
			</button>
		</div>
	);
};

export default LoginFormChild;
