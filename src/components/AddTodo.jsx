import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import {addtodo} from "../addtocart/cart/Cardslice"

function AddTodo() {
    const [input, setInput] = useState();
    const dispatch = useDispatch();
    const AddToHandler = (e) => {
        e.preventDefault();
        dispatch(addtodo(input));
        setInput('');

        
    }
  return (
      <div>
          <form onSubmit={AddToHandler}>
              <input type='text' value={input} onChange={(e) => setInput(e.target.value)} />
              <button>+</button>
          </form> 

    </div>
  )
}

export default AddTodo