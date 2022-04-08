import React,{ Fragment, useState } from 'react';
import Cart from './components/CART/Cart';
import Header from './components/LAYOUT/Header';
import Meals from './components/MEALS/Meals';
function App() {
  const [cartstate, setCartState] = useState(false);

  const showCart = ()=>{
    setCartState(true);
  }
  const hideCart = () =>{
    setCartState(false);
  }

  return (
    <Fragment>
      {cartstate && <Cart onHideCart={hideCart}/>}
      <Header onShowCart={showCart}/>

      <main>
        <Meals/>
      </main>
    </Fragment>
  );
}

export default App;
