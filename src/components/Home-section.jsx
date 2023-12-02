import React, {useEffect, useState } from 'react'
import "../App.css";
import {useDispatch, useSelector} from "react-redux"
import { add } from "../addtotodo/cart/card-slice";
import { STATUS, getproducts } from '../addtotodo/cart/product-slice';
import {status} from "../addtotodo/cart/product-slice"
// import axios from 'axios';

function Homesection(props) {
  const dispatch = useDispatch();
  // const [data, setdata] = useState([]);
   const { data:product, status } = useSelector((state) => state.product);
 
  useEffect(() => {
    dispatch(getproducts());

  
    
    // axios.get('https://api.escuelajs.co/api/v1/products')
    //     .then((res) => {
    //       console.log(res.data[0]);  
    //       if (res.data) {
    //         setdata(res.data);
    //         console.log("data imported successfuly");
    //       }
    //     })
    //     .catch(function (err) {
    //         console.log("error :" + err)
    //     })
  }, []);


  
  const handleAdd = (item) => {
 
    dispatch(add(item));
  }


  if (status === STATUS.LOADING) {
    return (
      <h2> Loading....</h2>
    )
  }
  if (status === STATUS.Error) {
    return (
      <h2> Error While Loading....</h2>
    )
  }

  return (
   <div>        
      <div className='cointainer cart-wrapper'>
        
        {product.map((item) => ( 
            <div key={item.id} className='product-cart'>
              <img src={item.images[0]} width={300} alt="product"></img>
              <h2 className='h2'>{item.title}</h2>
              <p> ${item.price}</p>
              <button className='btn btn-danger' onClick={() => handleAdd(item)}>Add to cart</button>
              </div>
        ))}      
             </div>
         </div>         
   
  )
}

export default Homesection