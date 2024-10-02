import { useFormState } from "react-dom";
import { useEffect, useState } from "react";

const initialState = {
	status: "",
	message: "",
	data: undefined,
};

const useForm = (action: any, resetState: boolean = false) => {
	const [getState, formAction, isPending] = useFormState(
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
            // Delay must be greater than 5 sceonds to enable the alert component close before resetting the state
			const timer = setTimeout(() => {
				setValues(initialState);
			}, 7000);

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
		isPending,
	};
};

export default useForm;
