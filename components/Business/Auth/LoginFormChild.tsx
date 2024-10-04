"use client";

import { useFormStatus } from "react-dom";
import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";

const LoginFormChild = () => {
    const [passwordIsVisible, setPasswordIsVisible] = useState(false);

	const [formValues, setFormValues] = useState({
		email: "",
		password: "",
    });

    const { pending } = useFormStatus();

    return (
		<div className="space-y-8 mt-8">
			<label
				className="block"
				htmlFor="email"
			>
				<input
					className="input"
					type="email"
					placeholder="Email Address"
					name="email"
					value={formValues.email}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setFormValues({
							...formValues,
							email: e.target.value,
						})
					}
				/>
			</label>

			<label
				className="block relative"
				htmlFor="password"
			>
				<input
					className="input pr-16"
					type={passwordIsVisible ? "text" : "password"}
					placeholder="Password"
					name="password"
					value={formValues.password}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setFormValues({
							...formValues,
							password: e.target.value,
						})
					}
				/>

				<button
					className="right-6 top-4 absolute"
					type="button"
					aria-label="Toggle password visibility"
					onClick={() => setPasswordIsVisible(!passwordIsVisible)}
				>
					{passwordIsVisible ? (
						<EyeIcon strokeWidth={1} />
					) : (
						<EyeOffIcon strokeWidth={1} />
					)}
				</button>
			</label>

			<button
				className="submit-btn"
				type="submit"
				disabled={
					!Object.values(formValues).every((value) => value !== "") ||
					pending
				}
			>
				{pending ? "Signing In..." : "Sign In"}
			</button>
		</div>
	);
};

export default LoginFormChild;
