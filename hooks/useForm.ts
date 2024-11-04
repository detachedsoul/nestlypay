import { useEffect, useState, useActionState } from "react";

interface IForm {
	state: {
		status: "" | "success" | "error";
		message: string;
		data: any;
	};
	formAction: (
		payload: FormData | Record<string, string | null>,
		formValues?: Record<string, string | null>,
	) => void;
}

const initialState: {
    status: "" | "success" | "error",
    message: string,
    data: any
} = {
    status: "",
    message: "",
    data: undefined,
};

const useForm = (action: any, resetState: boolean = false): IForm => {
	const [getState, formAction] = useActionState(action, initialState);

	const [values, setValues] = useState(initialState);

	const state = resetState ? values : getState;

	useEffect(() => {
		if (state.status !== "" && resetState) {
			const timer = setTimeout(() => {
				setValues(initialState);
			}, 5000);

			return () => clearTimeout(timer);
		}
	}, [state, resetState, values]);

	useEffect(() => {
		if (getState.status !== "" && resetState) {
			setValues(getState);
		}
	}, [getState, resetState]);

	return {
		state,
		formAction,
	};
};

export default useForm;
