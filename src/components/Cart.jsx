import React from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';


const Cart = () => {

    const items = useSelector((state) => state.cart);
    console.log(items);

  return (
      <>
           <Header />
          <div className='main-section'>
             
                <h1 className='main-head'>Cart</h1>
              <div class="row" style={{display: 'inline'}}>
                  
                  { items.map((item) => {
                      return(
                          <div className='card-list' >
                          <img src={item.img} width={200} alt='img'></img>
                              
                              <div className='card-details'>
                              <h3 className='card-title'>{item.title}</h3>
                                  <p className='price-title'> Price: {item.price} </p>  
                                  <button className='btn btn-light order-btn'>Order Now</button>
                                  <button className='btn btn-danger'>Remove</button>
                              
                                  
                              </div>
                             
                          </div>
                      )
                  })}
                </div>
    </div>

      </>
  )
}

export default Cart