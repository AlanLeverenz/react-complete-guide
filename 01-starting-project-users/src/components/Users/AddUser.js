import React, { useState } from 'react';

import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';
import Button from '../UI/Button';

const AddUser = props => {
  // array destructuring
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  // handles button clicks for adding a new user
  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    // add + to force the enteredAge string to be a number
    if (+enteredAge < 1) {
      return
    }
    // console.log(enteredUsername, enteredAge);
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername('');
    setEnteredAge('');
  }

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value)
  }
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value)
  }

  return (
    <div>
      <ErrorModal title="An error occured!" message="Something went wrong" />
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler} />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );

};

export default AddUser;