import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from './Header';
import { remove } from '../addtotodo/cart/card-slice';



const Cart = () => {
    const dispatch = useDispatch();
    const handleRemove = ((itemId) => {
        dispatch(remove(itemId))
}) 


    const items = useSelector((state) => state.cart);
    

  return (
      <>
           <Header />
          <div className='main-section'>
             
                <h1 className='main-head'>Cart</h1>
              <div class="row" style={{display: 'inline'}}>
                  
                  { items.map((item) => {
                      return(
                          <div className='card-list'>
                          <img src={item.images[0]} width={200} alt='img'></img>
                              
                              <div className='card-details'>
                              <h3 className='card-title'>{item.title}</h3>
                                  <p className='price-title'> Price: {item.price} </p>  
                                  <button className='btn btn-light order-btn'>Order Now</button>
                                  <button className='btn btn-danger'  onClick={()=> handleRemove(item.id)}>Remove</button>
                              
                                  
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