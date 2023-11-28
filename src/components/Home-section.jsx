import React, {useEffect, useState } from 'react'
import "../App.css";
import {useDispatch} from "react-redux"
import { add } from "../addtotodo/cart/card-slice";
import axios from 'axios';



function Homesection(props) {
 
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios.get('https://api.escuelajs.co/api/v1/products')
        .then((res) => {
          console.log(res.data[0]);  
          if (res.data) {
            setdata(res.data);
            console.log("data imported successfuly");
          }
        })
        .catch(function (err) {
            console.log("error :" + err)
        })
}, []);


  const dispatch = useDispatch();
  const handleAdd = (item) => {
 
    dispatch(add(item));
  }
  return (
   <div>        
      <div className='cointainer cart-wrapper'>
        {data.map((item) => ( 
            <div key={item.id} className='product-cart'>
              <img src={item.images[0]} width={300} alt="product"></img>
              <h2 className='h2'>{item.title}</h2>
              <p> Price: {item.price}</p>
              <button className='btn btn-danger' onClick={() => handleAdd(item)}>Add to cart</button>
              </div>
        ))}      
             </div>
         </div>         
   
  )
}

export default Homesection