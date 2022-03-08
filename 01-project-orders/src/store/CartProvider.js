import { useReducer } from 'react';

import CartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0
}

// state is last snapshot of state
const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      item => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    // if item exists already in the cart, add action item amount to existing amount
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount
      };
      // update updatedItems and existingCartItemIndex (of item id)
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else { // if a new item
      updatedItems = state.items.concat(action.item);
    }
    // return the updated items and totalAmount
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    };
  } // if action is not ADD then return defaultCartState
  return (
    defaultCartState
  )
};

const CartProvider = (props) => {
  // deconstructs cartState and dispatchCartAction (for ADD or REMOVE)
  // cartReducer is const function that returns updated items and totalAmount
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: 'ADD', item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: 'REMOVE', id: id });
  };

  // pass cartContext as a prop for CartContext.Provider, with add/remove functions
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler
  };

  // return CartContext.Provider component and export it
  return <CartContext.Provider value={cartContext}>
    {props.children}
  </CartContext.Provider>
};

export default CartProvider;