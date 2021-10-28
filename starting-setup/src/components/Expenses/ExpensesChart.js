import React from 'react';

import Chart from '../Chart/Chart';

const ExpensesChart = props => {

  // setup dataPoint objects for each month
  const chartDataPoints = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ];

  // for of loop used because props.expenses is an object, not an array
  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth();
    // starts with Jan = 0, month is the index of the array
    chartDataPoints[expenseMonth].value += expense.amount;
    // increases the amount per month 
  }

  return <Chart dataPoints={chartDataPoints} />
};

export default ExpensesChart;

