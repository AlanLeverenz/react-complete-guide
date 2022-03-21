import React, { useMemo } from 'react';

import classes from './DemoList.module.css';

const DemoList = (props) => {
  // use destructuring to pull items out of props
  const { items } = props;

  // items are a dependency
  // only if items changes does the sortedList function run
  // which useMemo has stored in memory
  const sortedList = useMemo(() => {
    console.log('Items sorted');
    return items.sort((a, b) => a - b);
  }, [items]);
  console.log('DemoList RUNNING');

  return (
    <div className={classes.list}>
      <h2>{props.title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(DemoList);