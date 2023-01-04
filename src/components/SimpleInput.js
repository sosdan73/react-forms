import {useEffect, useState} from "react";

const SimpleInput = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);

    const enteredNameIsValid = enteredName.trim() !== '';
    const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

    const handleNameInputChange = e => {
        setEnteredName(e.target.value)
    }
    const handleNameInputBlur = e => {
        setEnteredNameTouched(true);
    }

    const handleFormSubmission = e => {
        e.preventDefault();

        setEnteredNameTouched(true);

        if (!enteredNameIsValid()) {
            return;
        }
        console.log(enteredName)

        setEnteredName('');
        setEnteredNameTouched(false)
    }

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
                    onChange={handleNameInputChange}
                    onBlur={handleNameInputBlur}
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
