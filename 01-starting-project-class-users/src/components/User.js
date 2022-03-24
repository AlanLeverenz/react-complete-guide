import { Component } from 'react';

import classes from './User.module.css';

// render method doesn't receive props
// class extends the Component class, inherits it
// 'this' refers to the class data received for this component
// you can mix and match class and function components

class User extends Component {
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
