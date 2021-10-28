import React from 'react';

import './ChartBar.css';

const ChartBar = props => {

  let barFillHeight = '0%';

  if (props.max > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
  }

  // style attribute wants a JS object within the JSX brackets
  return <div className="chart-bar">
    <div className="chart-bar__inner">
      <div className="chart-bar__fill" style={{ height: barFillHeight }}></div>
    </div>
    <div className="chart-bar__label">{props.label}</div>
  </div>
}

export default ChartBar;