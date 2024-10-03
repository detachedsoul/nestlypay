import { useFormState } from "react-dom";
import { useEffect, useState } from "react";

const initialState: {
    status: "" | "success" | "error",
    message: string,
    data: any
} = {
	status: "",
	message: "",
	data: undefined,
};

const useForm = (action: any, resetState: boolean = false) => {
	const [getState, formAction] = useFormState(
		action,
		initialState,
    );

	const [values, setValues] = useState(initialState);

	const state = resetState ? values : getState;

	useEffect(() => {
		if (
			state.status !== "" &&
			resetState
		) {
			const timer = setTimeout(() => {
				setValues(initialState);
			}, 5000);

			return () => clearTimeout(timer);
		}
	}, [state, resetState, values]);

	useEffect(() => {
		if (
			getState.status !== "" &&
			resetState
		) {
			setValues(getState);
		}
	}, [getState, resetState]);

	return {
		state,
		formAction,
	};
};

export default useForm;
