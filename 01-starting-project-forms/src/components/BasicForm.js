import { useState } from 'react';


const BasicForm = (props) => {

  // FIRST NAME
  const [enteredFname, setEnteredFname] = useState('');
  const [enteredFnameTouched, setEnteredFnameTouched] = useState(false);
  const enteredFnameIsValid = enteredFname.trim() !== '';
  const fnameInputIsInvalid = !enteredFnameIsValid && enteredFnameTouched;

  // LAST NAME
  const [enteredLname, setEnteredLname] = useState('');
  const [enteredLnameTouched, setEnteredLnameTouched] = useState(false);
  const enteredLnameIsValid = enteredLname.trim() !== '';
  const lnameInputIsInvalid = !enteredLnameIsValid && enteredLnameTouched;

  // EMAIL
  const mailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  const enteredEmailIsValid = enteredEmail.match(mailFormat);
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;


  let formIsValid = false;

  if (enteredFnameIsValid && enteredLnameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  // ChangeHandler
  const fnameInputChangeHandler = (event) => {
    setEnteredFname(event.target.value);
  }
  const lnameInputChangeHandler = (event) => {
    setEnteredLname(event.target.value);
  }
  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  }

  // BlurHandler
  const fnameInputBlurHandler = (event) => {
    setEnteredFnameTouched(true);
  }
  const lnameInputBlurHandler = (event) => {
    setEnteredLnameTouched(true);
  }
  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  }

  // Form Submission Handler
  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredFnameTouched(true);
    setEnteredLnameTouched(true);
    setEnteredEmailTouched(true);

    if (!enteredFnameIsValid && !enteredLnameIsValid && !enteredEmailIsValid) {
      return;
    }

    console.log(enteredFname);
    console.log(enteredLname);
    console.log(enteredEmail);

    setEnteredFname('');
    setEnteredLname('');
    setEnteredEmail('');

    setEnteredFnameTouched(false);
    setEnteredLnameTouched(false);
    setEnteredEmailTouched(false);

  };

  // Input Classes
  const fnameInputClasses = fnameInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  const lnameInputClasses = lnameInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  const emailInputClasses = emailInputIsInvalid
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
            onChange={fnameInputChangeHandler}
            onBlur={fnameInputBlurHandler}
            value={enteredFname} />
        </div>
        <div className={lnameInputClasses}>
          <label htmlFor='lname'>Last Name</label>
          <input
            type='text'
            id='lname'
            onChange={lnameInputChangeHandler}
            onBlur={lnameInputBlurHandler}
            value={enteredLname} />
        </div>
        <div className={emailInputClasses}>
          <label htmlFor='email'>E-Mail Address</label>
          <input
            type='email'
            id='email'
            onChange={emailInputChangeHandler}
            onBlur={emailInputBlurHandler}
            value={enteredEmail} />
        </div>
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
