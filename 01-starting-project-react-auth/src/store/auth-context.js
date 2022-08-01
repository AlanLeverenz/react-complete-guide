import React, { useState, useEffect } from 'react';

let logoutTimer; // global variable in this file

const AuthContext = React.createContext({
  // property values
  token: '',
  isLoggedIn: false,
  // property functions
  login: (token) => { },
  logout: () => { }
});

const calculateRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime(); // in milliseconds
  const adjExpirationTime = new Date(expirationTime).getTime();

  const remainingDuration = adjExpirationTime - currentTime;

  return remainingDuration;
}

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem('token');
  const storedExpirationDate = localStorage.getItem('expirationTime');

  const remainingTime = calculateRemainingTime(storedExpirationDate);

  // return nothing if less than one hour of remaining time left
  if (remainingTime <= 60000) {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationtime');
    return null;
  }

  // return token and duration if more than one hour
  return {
    token: storedToken,
    duration: remainingTime
  };
};

// setup as a wrapper for child components
// export as a named const
export const AuthContextProvider = (props) => {
  const tokenData = retrieveStoredToken();
  let initialToken;
  if (tokenData) {
    initialToken = tokenData.token;
  }

  const [token, setToken] = useState(initialToken);

  const userIsLoggedIn = !!token; // !! converts truthy to boolean value

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem('token');

    if (logoutTimer) {
      clearTimeout(logoutTimer)
    }
  };

  const loginHandler = (token, expirationTime) => {
    setToken(token);
    localStorage.setItem('token', token);
    localStorage.setItem('expirationTime', expirationTime);

    const remainingTime = calculateRemainingTime(expirationTime);

    logoutTimer = setTimeout(logoutHandler, remainingTime);
  };

  // happens when page loads and gets the remaining logged in duration
  useEffect(() => {
    if (tokenData) {
      logoutTimer = setTimeout(logoutHandler, tokenData.duration);
    }
  }, [tokenData]);

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler
  }

  return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
};

export default AuthContext;

