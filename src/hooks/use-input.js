import {useState} from "react";

const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && isTouched;

    const handleInputChange = e => {
        setEnteredValue(e.target.value)
    }
    const handleInputBlur = e => {
        setIsTouched(true);
    }
    
    const reset = () => {
      setEnteredValue('');
      setIsTouched(false)
    }

    const inputClasses = hasError
        ? 'form-control invalid'
        : 'form-control';
    
    return {
        value: enteredValue,
        hasError,
        isValid: valueIsValid,
        inputClasses,
        handleInputChange,
        handleInputBlur,
        reset,
    }
}

export default useInput;