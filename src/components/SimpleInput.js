import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
    const {
        value: enteredName,
        hasError: nameInputHasError,
        isValid: enteredNameIsValid,
        inputClasses: inputNameClasses,
        handleInputChange: handleNameChange,
        handleInputBlur: handleNameBlur,
        reset: resetName
    } = useInput(value => value.trim() !== '')
    const {
        value: enteredEmail,
        hasError: emailInputHasError,
        isValid: enteredEmailIsValid,
        inputClasses: inputEmailClasses,
        handleInputChange: handleEmailChange,
        handleInputBlur: handleEmailBlur,
        reset: resetEmail
    } = useInput(value => /\S+@\S+\.\S+/.test(value))

    let formIsValid = false;
    if (enteredNameIsValid && enteredEmailIsValid) {
        formIsValid = true
    }

    const handleFormSubmission = e => {
        e.preventDefault();
        if (!enteredNameIsValid || !enteredEmailIsValid) {
            console.log('dont be lazy mate')
            return;
        }
        console.log(enteredName, enteredEmail)
        resetName()
        resetEmail()
    }

    return (
        <form onSubmit={handleFormSubmission}>
            <div className={inputNameClasses}>
                <label htmlFor='name'>Your Name</label>
                <input
                    id="name"
                    type="text"
                    onChange={handleNameChange}
                    onBlur={handleNameBlur}
                />
                {nameInputHasError && <p className="error-text">Name must not be empty</p>}
            </div>
            <div className={inputEmailClasses}>
                <label htmlFor='email'>Your Email</label>
                <input
                    id="email"
                    type="email"
                    onChange={handleEmailChange}
                    onBlur={handleEmailBlur}
                />
                {emailInputHasError && <p className="error-text">Email must not be empty</p>}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
