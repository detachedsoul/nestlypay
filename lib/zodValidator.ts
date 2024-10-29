import { z, ZodObject, ZodTypeAny } from "zod";

interface IZodValidator<T> {
	name: keyof T;
	value: string;
	formValues: T;
	schema: ZodObject<{ [key in keyof T]: ZodTypeAny }>;
};

const zodValidation = <T,>({ name, value, formValues, schema }: IZodValidator<T>) => {
    let initialErrors: Partial<Record<keyof T, string>> = {};

	const initialValue = formValues;

	try {
		schema.shape[name].parse(value);

		const errors = {
			...initialErrors,
			[name]: "",
		};

		const formValue = {
			...initialValue,
			[name]: value,
		};

        return {
			errors: errors,
			formValue: formValue,
		};
	} catch (err) {
		if (err instanceof z.ZodError) {
			const fieldError = err.errors[0]?.message;

            const errors = {
				...initialErrors,
				[name]: fieldError,
			};

            const formValue = {
				...initialValue,
				[name]: "",
			};

            return {
				errors: errors,
				formValue: formValue,
			};
		}
    }

    return {
		errors: initialErrors,
		formValue: initialValue,
	};
};

export default zodValidation;
