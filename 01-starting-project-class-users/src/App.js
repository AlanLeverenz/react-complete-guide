import UserFinder from './components/UserFinder';
import UsersContext from './store/users-context';

const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
];

function App() {
  const usersContext = {
    users: DUMMY_USERS
  }

  // Provider makes DUMMY_USERS available to the whole app
  return (
    <UsersContext.Provider value={usersContext}>
      <UserFinder />
    </UsersContext.Provider>
  );
}

export default App;

// import UserFinder from './components/UserFinder';

// function App() {
//   return (
//     <div>
//       <UserFinder />
//     </div>
//   );
// }

// export default App;
