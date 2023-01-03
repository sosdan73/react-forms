import {useRef, useState} from "react";

const SimpleInput = (props) => {
    const [enteredName, setEnteredName] = useState('');

    const nameInputRef = useRef();

    const handleNameInputChange = e => {
        setEnteredName(e.target.value)
    }

    const handleFormSubmission = e => {
        e.preventDefault();
        console.log(enteredName)
        const enteredRefName = nameInputRef.current.value;
        console.log(enteredRefName)
    }


    return (
        <form onSubmit={handleFormSubmission}>
            <div className='form-control'>
                <label htmlFor='name'>Your Name</label>
                <input
                    id='name'
                    type='text'
                    ref={nameInputRef}
                    onChange={handleNameInputChange}
                />
            </div>
            <div className="form-actions">
                <button onClick={handleFormSubmission}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
