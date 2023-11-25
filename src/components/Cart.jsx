import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';
const Cart = () => {
    
    const items = useSelector((state) => state.cart);
  
    useEffect(() => {
        
    }, [items]);
  return (
      <>
           <Header />
          <div className='main-section'>
             
                <h1 className='main-head'>Cart</h1>
                <div class="row">
                  {items.map((item) => (
                      <div className='card-list'>
                          <img src={item.img} alt='img'></img>
                          <h3>{item.title}</h3>
                          <p>{item.price} </p>
                      <button className='btn btn-danger'>Remove</button>
                      </div>
                  ))}
                </div>
    </div>

      </>
  )
}

export default Cart