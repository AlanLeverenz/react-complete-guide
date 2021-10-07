import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>October 6, 2021</div>
      <div className="expense-item__description">
        <h2>Uber Trip</h2>
        <div className="expense-item__price">$97.51</div>
      </div>
    </div>
  );
}

export default ExpenseItem