import useInput from "../hooks/use-input";
import "../index.css";

const isNotEmpty = value => value.trim() !== '';
const isEmail = value => /\S+@\S+\.\S+/.test(value);

const BasicForm = (props) => {
	const {
		value: firstNameValue,
		hasError: firstNameHasError,
		inputClasses: firstNameInputClasses,
		isValid: firstNameIsValid,
		handleInputChange: handleFirstNameInputChange,
		handleInputBlur: handleFirstNameInputBlur,
		reset: resetFirstName,
	} = useInput(isNotEmpty);
	const {
		value: lastNameValue,
		hasError: lastNameHasError,
		inputClasses: lastNameInputClasses,
		isValid: lastNameIsValid,
		handleInputChange: handleLastNameInputChange,
		handleInputBlur: handleLastNameInputBlur,
		reset: resetLastName,
	} = useInput(isNotEmpty);
	const {
		value: emailValue,
		hasError: emailHasError,
		inputClasses: emailInputClasses,
		isValid: emailIsValid,
		handleInputChange: handleEmailInputChange,
		handleInputBlur: handleEmailInputBlur,
		reset: resetEmail,
	} = useInput(isEmail);

	let formIsValid = false;
	if (firstNameIsValid && lastNameIsValid && emailIsValid) {
		formIsValid = true
	}

	const handleFormSubmit = (e) => {
		e.preventDefault();
		if (!(firstNameIsValid && lastNameIsValid && emailIsValid)) {
			console.log('The form is invalid');
			return
		}
		console.log(firstNameValue, lastNameValue, emailValue);
		resetFirstName();
		resetLastName();
		resetEmail();
	}

    return (
        <form onSubmit={handleFormSubmit}>
            <div className='control-group'>
                <div className={firstNameInputClasses}>
                    <label htmlFor='firstname'>First Name</label>
					<input
						type='text'
						id='name'
						value={firstNameValue}
						onChange={handleFirstNameInputChange}
						onBlur={handleFirstNameInputBlur}
					/>
					{firstNameHasError && <p className="error-text">The field is required</p>}
                </div>
                <div className={lastNameInputClasses}>
                    <label htmlFor='lastname'>Last Name</label>
					<input
						type='text'
						id='lastname'
						value={lastNameValue}
						onChange={handleLastNameInputChange}
						onBlur={handleLastNameInputBlur}
					/>
					{lastNameHasError && <p className="error-text">The field is required</p>}
                </div>
            </div>
            <div className={emailInputClasses}>
                <label htmlFor='email'>E-Mail Address</label>
				<input
					type='email'
					id='email'
					value={emailValue}
					onChange={handleEmailInputChange}
					onBlur={handleEmailInputBlur}
				/>
				{emailHasError && <p className="error-text">Enter a valid email</p>}
            </div>
            <div className='form-actions'>
                <button type="submit" disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default BasicForm;
