import React, { useEffect } from 'react';
import './App.css';
import { Products } from './features/products/Products';
import { Cart } from './features/cart/Cart';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { fetchAsync } from './features/cart/cartSlice';

function App() {

const dispatch = useDispatch()

  useEffect(()=>{
    dispatch((fetchAsync()))
  },[])



  const [cart,showCart] = useState(false) 
  const item = useSelector(state => state.cart.items)
  return (
    <>
<button onClick={()=>showCart(!cart) } >  Cart[{ item.length}]</button>
{cart ?<Cart></Cart>:  <Products></Products>}

    </>
    
  );
}

export default App;
