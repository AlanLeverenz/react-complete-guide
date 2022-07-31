import { useState, useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import googleKey from '../../keys';
import classes from './AuthForm.module.css';
import AuthContext from '../../store/auth-context';

const AuthForm = () => {
  const history = useHistory();

  const emailInputRef = useRef();
  const passwordInputref = useRef();

  const authCtx = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputref.current.value;

    // optional: Add validation

    setIsLoading(true);

    let url;

    if (isLogin) {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${googleKey}`
    } else {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${googleKey}`
    }

    fetch(
      url,
      {
        method: 'POST',
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          res.json().then(data => {
            let errorMessage = 'Authentication failed!';
            // if (data && data.error && data.error.message) {
            //   errorMessage = data.error.message;
            // }
            // alert(errorMessage);

            throw new Error(errorMessage); //creates another promise
          });
        }
      })
      .then((data) => {
        const expirationTime = new Date(new Date().getTime() + (+data.expiresIn * 1000)); // + converts string to number and milliseconds
        authCtx.login(data.idToken, expirationTime.toISOString());
        // Provider has the Firebase idToken
        //convert to string for auth-context helper function
        history.replace('/'); // cannot use back button
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required ref={passwordInputref} />
        </div>
        <div className={classes.actions}>
          {!isLoading && <button>{isLogin ? 'Login' : 'Create Account'}</button>}
          {isLoading && <p>Sending request...</p>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
