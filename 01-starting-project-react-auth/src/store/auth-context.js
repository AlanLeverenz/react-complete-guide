import React from 'react';

const AuthContext = React.createContext({
  // property values
  token: '',
  isLoggedIn: false,
  // property functions
  login: (token) => { },
  logout: () => { }
});

// setup as a wrapper for child components
const AuthContextProvider = (props) => {
  return <AuthContext.Provider>{props.children}</AuthContext.Provider>
};

