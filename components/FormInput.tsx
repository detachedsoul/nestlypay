"use client";

import { DetailedHTMLProps, InputHTMLAttributes, useState } from "react";
import { EyeOffIcon, EyeIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface IFormInput
	extends DetailedHTMLProps<
		InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	type: string;
	value: string;
	name: string;
	error?: string;
    className?: string;
	placeholder: string;
	onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const FormInput: React.FC<IFormInput> = ({
	type,
	value,
	onChange,
	name,
	placeholder,
    error,
    className,
    ...props
}) => {
    const [passwordIsVisible, setPasswordIsVisible] = useState(false);

	return (
		<>
			<input
                className={cn("input", className)}
				type={
					type !== "password"
						? type
						: passwordIsVisible
							? "text"
							: "password"
				}
				placeholder={placeholder}
				name={name}
				value={value}
                onChange={onChange}
                {...props}
			/>

			{type === "password" && (
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
			)}

			{error && <p className="text-brand-red mt-2">{error}</p>}
		</>
	);
};

export default FormInput;
