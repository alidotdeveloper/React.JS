import React from 'react'
import "../App.css";
import {useDispatch} from "react-redux"
import { add } from "../addtotodo/cart/card-slice";


function Homesection(props) {
  const dispatch = useDispatch();
  const handleAdd = () => {
    const product = {
      img: props.img,
      title: props.title,
      price:props.price
    }
 
    dispatch(add(product))
  }
  return (
   <div>        
        
            <div className='col product-cart'>
              <img src={props.img} width={200} alt="product"></img>
              <h2 className='h2'>{props.title}</h2>
              <p> Price: {props.price}</p>
              <button className='btn btn-danger' onClick={ handleAdd}>Add to cart</button>
                  
             </div>
         </div>         
   
  )
}

export default Homesection