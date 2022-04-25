import { useState } from 'react';
// import { useEffect } from 'react';

const SimpleInput = (props) => {

  // NAME VALIDATION
  // const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState('');
  // const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  // const [formIsValid, setFormIsValid] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  // EMAIL VALIDATION

  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const enteredEmailIsValid = enteredEmail.match(mailFormat);
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  };

  // useEffect(() => {
  //   if (enteredNameIsValid) {
  //     setFormIsValid(true)
  //   } else {
  //     setFormIsValid(false)
  //   }
  // }, [enteredNameIsValid]);

  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
  }

  const nameInputBlurHandler = event => {
    setEnteredNameTouched(true);
  }

  const emailInputChangeHandler = event => {
    setEnteredEmail(event.target.value);
  }

  const emailInputBlurHandler = event => {
    setEnteredEmailTouched(true);
  }

  // this function is run every time there is a change in the component
  // so it gets the latest state
  const formSubmissionHandler = event => {
    event.preventDefault();

    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);

    if (!enteredNameIsValid && !enteredEmailIsValid) {
      return;
    }

    console.log(enteredName);

    // const enteredValue = nameInputRef.current.value;
    // console.log(enteredValue);

    // nameInputRef.current.value = ''; // NOT IDEAL, DON'T MANIPULATE THE DOM
    // clears the input value using its state function
    // the value is bound to the form (value={enteredName})
    setEnteredName('');
    setEnteredNameTouched(false);
    setEnteredEmail('');
    setEnteredEmailTouched(false);
  }

  // conditional class if enteredNameIsValid is true or false
  const nameInputClasses = nameInputIsInvalid && emailInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty.</p>)}
      </div>
      <div className={nameInputClasses}>
        <label htmlFor='email'>Your Email</label>
        <input
          type='email'
          id='email'
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {emailInputIsInvalid && (
          <p className="error-text">Must enter a valid email.</p>)}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
