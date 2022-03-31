import { Fragment, Component } from 'react';

import Users from './Users';
import classes from './UserFinder.module.css';
import UsersContext from '../store/users-context';
import ErrorBoundary from './ErrorBoundary';

// const DUMMY_USERS = [
//   { id: 'u1', name: 'Max' },
//   { id: 'u2', name: 'Manuel' },
//   { id: 'u3', name: 'Julie' },
// ];

class UserFinder extends Component {
  // this component should have access to the UsersContext (once only)
  static contextType = UsersContext;

  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      searchTerm: ''
    };
  }

  componentDidMount() {
    // Send http request...
    // runs when component mounts
    this.setState({ filteredUsers: this.context.users });
  }

  // runs when the state changes - to change in the filteredUsers array
  // first check if props and state are different or not to avoid infinite loop
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: this.context.users.filter((user) =>
          user.name.includes(this.state.searchTerm)
        ),
      });
    }

  }

  // the searchTerm value is merged into the state object
  searchChangeHandler(event) {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    return (
      <Fragment>
        <ErrorBoundary>
          <div className={classes.finder}>
            <input type='search' onChange={this.searchChangeHandler.bind(this)} />
          </div>
          <Users users={this.state.filteredUsers} />
        </ErrorBoundary>
      </Fragment>
    );
  }

}

// START FUNCTION COMPONENT
// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//     );
//   }, [searchTerm]);

//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <Fragment>
//       <div className={classes.finder}>
//         <input type='search' onChange={searchChangeHandler} />
//       </div>
//       <Users users={filteredUsers} />
//     </Fragment>
//   );
// };

export default UserFinder;