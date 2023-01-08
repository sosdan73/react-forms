import useInput from "../hooks/use-input";
import "../index.css";

const BasicForm = (props) => {
	const {
		value: firstNameValue,
		hasError: firstNameHasError,
		inputClasses: firstNameInputClasses,
		isValid: firstNameIsValid,
		handleInputChange: handleFirstNameInputChange,
		handleInputBlur: handleFirstNameInputBlur,
		reset: resetFirstName,
	} = useInput(value => value.trim() !== '');

	let formIsValid = false;
	if (firstNameIsValid) {
		formIsValid = true
	}

	const handleFormSubmit = (e) => {
		e.preventDefault();
		if (!firstNameIsValid) {
			console.log('The form is invalid')
		}
		console.log(firstNameValue);
		resetFirstName();
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
                <div className='form-control'>
                    <label htmlFor='name'>Last Name</label>
                    <input type='text' id='lastname' />
                </div>
            </div>
            <div className='form-control'>
                <label htmlFor='email'>E-Mail Address</label>
                <input type='text' id='email' />
            </div>
            <div className='form-actions'>
                <button type="submit" disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default BasicForm;
