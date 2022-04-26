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
  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  const enteredEmailIsValid = enteredEmail.match(mailFormat);
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;


  let formIsValid = false;







  return (
    <form>
      <div className='control-group'>
        <div className='form-control'>
          <label htmlFor='fname'>First Name</label>
          <input type='text' id='fname' />
        </div>
        <div className='form-control'>
          <label htmlFor='lname'>Last Name</label>
          <input type='text' id='lname' />
        </div>
      </div>
      <div className='form-control'>
        <label htmlFor='email'>E-Mail Address</label>
        <input type='email' id='email' />
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
