import useInput from '../hooks/use-input';

const BasicForm2 = (props) => {

  // deconstructing useInput returned objects
  // FIRST NAME
  const {
    value: enteredFname,
    isValid: enteredFnameIsValid,
    hasError: fnameInputHasError,
    valueChangeHandler: fnameChangedHandler,
    inputBlurHandler: fnameBlurHandler,
    reset: resetFnameInput
  } = useInput(value => value.trim() !== '');

  // LAST NAME
  const {
    value: enteredLname,
    isValid: enteredLnameIsValid,
    hasError: lnameInputHasError,
    valueChangeHandler: lnameChangedHandler,
    inputBlurHandler: lnameBlurHandler,
    reset: resetLnameInput
  } = useInput(value => value.trim() !== '');

  // EMAIL
  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = useInput(value => value.match(mailFormat));

  let formIsValid = false;

  if (enteredFnameIsValid && enteredLnameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  };

  const formSubmissionHandler = event => {
    event.preventDefault();

    if (!enteredFnameIsValid && !enteredLnameIsValid && !enteredEmailIsValid) {
      return;
    }

    console.log(enteredFname);
    console.log(enteredLname);
    console.log(enteredEmail);

    // passed from custom hook
    resetFnameInput();
    resetLnameInput();
    resetEmailInput();
  }

  // conditional class if input has an error
  const fnameInputClasses = fnameInputHasError
    ? 'form-control invalid'
    : 'form-control';

  const lnameInputClasses = lnameInputHasError
    ? 'form-control invalid'
    : 'form-control';

  const emailInputClasses = emailInputHasError
    ? 'form-control invalid'
    : 'form-control';


  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='control-group'>
        <div className={fnameInputClasses}>
          <label htmlFor='fname'>First Name</label>
          <input
            type='text'
            id='fname'
            onChange={fnameChangedHandler}
            onBlur={fnameBlurHandler}
            value={enteredFname} />
        </div>
        <div className={lnameInputClasses}>
          <label htmlFor='lname'>Last Name</label>
          <input
            type='text'
            id='lname'
            onChange={lnameChangedHandler}
            onBlur={lnameBlurHandler}
            value={enteredLname} />
        </div>
        <div className={emailInputClasses}>
          <label htmlFor='email'>E-Mail Address</label>
          <input
            type='email'
            id='email'
            onChange={emailChangedHandler}
            onBlur={emailBlurHandler}
            value={enteredEmail} />
        </div>
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );

}

export default BasicForm2;