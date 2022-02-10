import React, { useState, useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

// emailReducer function can be set outside the component function
const emailReducer = (state, action) => {
  // returns a new state
  if (action.type === 'USER_INPUT') {
    return {
      value: action.val, isValid: action.val.includes('@')
    };
  }
  if (action.type === 'INPUT_BLUR') {
    return {
      value: state.value, isValid: state.value.includes('@')
    }
  }
  return {
    value: '',
    isValid: false
  }
};

// password
const passwordReducer = (state, action) => {
  // returns a new state
  if (action.type === 'USER_INPUT') {
    return {
      value: action.val, isValid: action.val.value.trim().length > 6
    };
  }
  if (action.type === 'INPUT_BLUR') {
    return {
      value: state.value, isValid: state.value.trim().length > 6
    };
  }
  return {
    value: '',
    isValid: false
  }
};


const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  // use reducer handles value and validity
  // [state, action] = function()
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: null
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: null
  });

  // this useEffect function runs after every component render cycle (i.e., refresh)
  // with no dependency it only runs once
  // with a dependency it runs if the dependency changes its state
  useEffect(() => {
    console.log('EFFECT RUNNING');
    // returned cleanup function runs before the useEffect function runs (i.e., console.log EFFECT RUNNING)
    return () => {
      console.log('EFFECT CLEANUP')
    }
    // with empty array the return function only runs when the component is removed from the DOM
  }, []);

  // without dependencies useEffect will run each time the parent function runs
  // with dependencies it runs when there is a change to the dependency

  // alias assignment, not a value assignment
  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;


  // this runs when the user inputs
  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log('CHECKING FORM VALIDITY');
      setFormIsValid(
        emailIsValid && passwordIsValid
      );
    }, 500);

    // a return cleanup function that runs before every side effect function
    // it clears the last timer before a new one is set
    return () => {
      console.log('CLEANUP');
      clearTimeout(identifier);
    };

  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: 'USER_INPUT', val: event.target.value });

    //   setFormIsValid(
    //     event.target.value.includes('@') && passwordState.isValid);
    // };

    const passwordChangeHandler = (event) => {
      dispatchPassword({ type: 'USER_INPUT', val: event.target.value });

      // setFormIsValid(
      //   emailState.isValid && event.target.value.trim().length > 6
      // );
    };

    const validateEmailHandler = () => {
      dispatchEmail({ type: 'INPUT_BLUR' });
    };

    const validatePasswordHandler = () => {
      dispatchPassword({ type: 'INPUT_BLUR' });
    };

    const submitHandler = (event) => {
      event.preventDefault();
      props.onLogin(emailState.value, passwordState.value);
    };

    return (
      <Card className={classes.login}>
        <form onSubmit={submitHandler}>
          <div
            className={`${classes.control} ${emailState.isValid === false ? classes.invalid : ''
              }`}
          >
            <label htmlFor="email">E-Mail</label>
            <input
              type="email"
              id="email"
              value={emailState.value}
              onChange={emailChangeHandler}
              onBlur={validateEmailHandler}
            />
          </div>
          <div
            className={`${classes.control} ${passwordState.isValid === false ? classes.invalid : ''
              }`}
          >
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={passwordState.value}
              onChange={passwordChangeHandler}
              onBlur={validatePasswordHandler}
            />
          </div>
          <div className={classes.actions}>
            <Button type="submit" className={classes.btn} disabled={!formIsValid}>
              Login
            </Button>
          </div>
        </form>
      </Card>
    );
  };
}

export default Login;
