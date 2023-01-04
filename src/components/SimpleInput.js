import {useState} from "react";

const SimpleInput = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

    const enteredNameIsValid = enteredName.trim() !== '';
    const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
    const enteredEmailIsValid = /\S+@\S+\.\S+/.test(enteredEmail);
    const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

    let formIsValid = false;
    if (enteredNameIsValid && enteredEmailIsValid) {
        formIsValid = true
    }

    const handleNameInputChange = e => {
        setEnteredName(e.target.value)
    }
    const handleNameInputBlur = e => {
        setEnteredNameTouched(true);
    }
    const handleEmailInputChange = e => {
        setEnteredEmail(e.target.value)
    }
    const handleEmailInputBlur = e => {
        setEnteredEmailTouched(true);
    }

    const handleFormSubmission = e => {
        e.preventDefault();
        setEnteredNameTouched(true);
        setEnteredEmailTouched(true);

        if (!enteredNameIsValid && !enteredEmailIsValid) {
            return;
        }
        console.log(enteredName, enteredEmail)

        setEnteredName('');
        setEnteredNameTouched(false);
        setEnteredEmail('');
        setEnteredEmailTouched(false);
    }

    const nameInputClasses = nameInputIsInvalid
        ? 'form-control invalid'
        : 'form-control';
    const emailInputClasses = emailInputIsInvalid
        ? 'form-control invalid'
        : 'form-control';

    return (
        <form onSubmit={handleFormSubmission}>
            <div className={nameInputClasses}>
                <label htmlFor='name'>Your Name</label>
                <input
                    id="name"
                    type="text"
                    onChange={handleNameInputChange}
                    onBlur={handleNameInputBlur}
                />
                {nameInputIsInvalid && <p className="error-text">Name must not be empty</p>}
            </div>
            <div className={emailInputClasses}>
                <label htmlFor='email'>Your Email</label>
                <input
                    id="email"
                    type="email"
                    onChange={handleEmailInputChange}
                    onBlur={handleEmailInputBlur}
                />
                {emailInputIsInvalid && <p className="error-text">Email must not be empty</p>}
            </div>
            <div className="form-actions">
                <button disabled={formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
