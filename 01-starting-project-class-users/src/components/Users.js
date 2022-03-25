import { Component } from 'react';
import User from './User';

import classes from './Users.module.css';

// cannot use hooks in a class-based component

const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
];

// class needs a render() method
// in class-based components, state is always an object
// and it is always called "state", this.state
class Users extends Component {
  constructor() {
    super();
    this.state = {
      showUsers: true,
      more: 'Test'
    };
  }

  toggleUsersHandler() {
    // this.state.showUsers = false; // NOT!
    // return an object because it is a class
    this.setState((curState) => {
      return { showUsers: !curState.showUsers };
    });
  }

  render() {
    // can define a helper method in the render object
    const usersList = (
      <ul>
        {DUMMY_USERS.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );
    // this points to the class
    // must bind methods to 'this'
    // 'this' is a keyword referring to the class
    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {this.showUsers && usersList}
      </div>
    );
  }
}

// FUNCTIONAL METHOD WITH THE USESTATE HOOK
// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? 'Hide' : 'Show'} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;
