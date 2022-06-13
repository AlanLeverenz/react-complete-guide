import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
  // gets the precise state object we need
  // pass a function that receives the redux state automatically
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  // sets up a subscription to redux
  const cart = useSelector(state => state.cart);

  useEffect(() => {
    // overwrites existing fb data
    fetch('https://react-http-6b4a6.firebaseio.com/cart.json', {
      method: 'PUT',
      body: JSON.stringify(cart),
    });
    // cart is the dependency that when changed the fetch function runs
  }, [cart]);

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
