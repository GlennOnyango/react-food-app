import React,{ useState } from 'react';
import Cart from './components/CART/Cart';
import Header from './components/LAYOUT/Header';
import Meals from './components/MEALS/Meals';
import CartContext from './store/CartContext';
function App() {
  const [cartstate, setCartState] = useState(false);

  const showCart = ()=>{
    setCartState(true);
  }
  const hideCart = () =>{
    setCartState(false);
  }

  return (
    <CartContext>
      {cartstate && <Cart onHideCart={hideCart}/>}
      <Header onShowCart={showCart}/>

      <main>
        <Meals/>
      </main>
    </CartContext>
  );
}

export default App;
