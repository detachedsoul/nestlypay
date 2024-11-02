import { z, ZodObject, ZodTypeAny, ZodEffects } from "zod";

interface IZodValidator<T> {
    name: keyof T;
    value: string;
    formValues: T;
    schema:
        | ZodObject<{ [key in keyof T]: ZodTypeAny }>
        | ZodEffects<ZodObject<{ [key in keyof T]: ZodTypeAny }>>;
}

const zodValidation = <T,>({ name, value, formValues, schema }: IZodValidator<T>) => {
    let initialErrors: Partial<Record<keyof T, string>> = {};

    const updatedFormValues = {
        ...formValues,
        [name]: value,
    };

    try {
        schema.parse(updatedFormValues);

        return {
            errors: {
                ...initialErrors,
                [name]: "",
            },
            formValue: updatedFormValues,
        };
    } catch (err) {
        if (err instanceof z.ZodError) {
            const fieldError = err.errors.find(e => e.path.includes(name as string))?.message;

            return {
                errors: {
                    ...initialErrors,
                    [name]: fieldError || "",
                },
                formValue: {
                    ...formValues,
                    [name]: "",
                },
            };
        }
    }

    return {
        errors: initialErrors,
        formValue: formValues,
    };
};

export default zodValidation;
