import {useEffect, useRef, useState} from "react";

const SimpleInput = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);

    const nameInputRef = useRef();

    useEffect(() => {
        if (enteredNameIsValid) {
            console.log('name input is valid')
        }
    }, [enteredNameIsValid])

    const handleNameInputChange = e => {
        setEnteredName(e.target.value)
    }

    const handleFormSubmission = e => {
        e.preventDefault();

        setEnteredNameTouched(true);

        if (enteredName.trim() === '') {
            setEnteredNameIsValid(false)
            return
        }

        setEnteredNameIsValid(true)
        console.log(enteredName)
    }

    const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

    const nameInputClasses = nameInputIsInvalid
        ? 'form-control invalid'
        : 'form-control';

    return (
        <form onSubmit={handleFormSubmission}>
            <div className={nameInputClasses}>
                <label htmlFor='name'>Your Name</label>
                <input
                    id='name'
                    type='text'
                    ref={nameInputRef}
                    onChange={handleNameInputChange}
                />
                {nameInputIsInvalid && <p className="error-text">Name must not be empty</p>}
            </div>
            <div className="form-actions">
                <button onClick={handleFormSubmission}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
