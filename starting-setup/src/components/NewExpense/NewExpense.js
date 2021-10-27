import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [editMode, setEditMode] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setEditMode(false);
  };

  const enableEditingHandler = () => {
    setEditMode(true);
  };

  const disableEditingHandler = () => {
    setEditMode(false);
  };

  return (
    <div className='new-expense'>
      {!editMode && (
        <button onClick={enableEditingHandler}>Add New Expense</button>
      )}
      {editMode && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={disableEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;