import React from 'react';

import classes from './Card.module.css';

const Card = props => {
  // outputs what is between the Card tags (the form)
  return <div className={classes.card}>{props.children}</div>;

};

export default Card;