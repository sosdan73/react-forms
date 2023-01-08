import {useReducer} from "react";

const initialInputState = {
	value: '',
	isTouched: false,
}

const inputStateReducer = (state, action) => {
	if (action.type === 'INPUT') {
		return { value: action.value, isTouched: state.isTouched }
	}
	if (action.type === 'BLUR') {
		return { value: state.value, isTouched: true }
	}
	if (action.type === 'RESET') {
		return { value: '', isTouched: false }
	}
	return initialInputState
}

const useInput = (validateValue) => {
	const [inputState, dispatch] = useReducer(inputStateReducer, initialInputState)

    const valueIsValid = validateValue(inputState.value);
    const hasError = !valueIsValid && inputState.isTouched;

    const handleInputChange = e => {
        dispatch({type: 'INPUT', value: e.target.value})
    }
    const handleInputBlur = e => {
		dispatch({type: 'BLUR'})
    }
    const reset = () => {
		dispatch({type: 'RESET'})
    }

    const inputClasses = hasError
        ? 'form-control invalid'
        : 'form-control';
    
    return {
        value: inputState.value,
        hasError,
        isValid: valueIsValid,
        inputClasses,
        handleInputChange,
        handleInputBlur,
        reset,
    }
}

export default useInput;