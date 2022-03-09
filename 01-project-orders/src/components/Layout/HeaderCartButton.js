import { useContext, useEffect, useState } from 'react';

import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = props => {
  // to react to a change in state on the button class
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  // use deconstruction to isolate the items in the cartCtx
  // so that useEffect only occurs when items change
  const { items } = cartCtx;

  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

  useEffect(() => {
    // if no items, then return nothing
    if (items.lengths === 0) {
      return;
    }
    setBtnIsHighlighted(true);
  }, [items]); // items is the dependency that useEffect is focused on

  return <button className={btnClasses} onClick={props.onClick}>
    <span className={classes.icon}>
      <CartIcon />
    </span>
    <span>Your Cart</span>
    <span className={classes.badge}>{numberOfCartItems}</span>
  </button>
};

export default HeaderCartButton;