import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from './Header';
import { remove } from '../addtotodo/cart/card-slice';





const Cart = () => {
    const dispatch = useDispatch();
    const handleRemove = ((itemId) => {
        dispatch(remove(itemId))
}) 

    const [total, settotal] = useState();

    const items = useSelector((state) => state.cart);
    

  return (
      <>
           <Header />
          <div className='main-section'>
             
                <h1 className='main-head'>Cart</h1>
              <div class="row" style={{display: 'inline'}}>
                  
                  { items.map((item) => {
                      return (
                          <>
                          <div className='card-list'>
                          <img src={item.images[0]} width={200} alt='img'></img>
                              
                              <div className='card-details'>
                              <h3 className='card-title'>{item.title}</h3>
                                  <p className='price-title'> ${item.price} </p>  
                                  
                                  <button className='btn btn-danger'  onClick={()=> handleRemove(item.id)}>Remove</button>
                                  
                                  
                              </div>
                             
                              
                             
                              </div>
                              
                              </>
                           
                      )
                  })}

                 <div className=' text-center border-top align-items-center total'>
                      <h3 className=''>Total: $
                          
                          {items.reduce((acc, item) =>
                          {
                              return acc += item.price;
                          },0 )}
                      </h3>
                      <button className='btn btn-danger order-btn text-center '> Checkout</button>
                  </div>
                </div>
    </div>

      </>
  )
}

export default Cart