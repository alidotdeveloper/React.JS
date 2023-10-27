import React from 'react'
import "../App.css";

function Homesection(props) {
  return (
   <div>        
        
            <div className='col product-cart'>
              <img src={props.img} width={200} alt="product"></img>
              <h2>{props.title}</h2>
              <p> Price: {props.price}</p>
                  <button className='btn btn-danger'>Add to cart</button>
                  
             </div>
         </div>         
   
  )
}

export default Homesection