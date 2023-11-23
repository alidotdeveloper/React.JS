import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { removetodo } from '../addtocart/cart/Cardslice';

function Todos() {
    const todos = useSelector((state) => state.todos);
    const Dispatch = useDispatch();
  return (
      <div>
       
          {todos.map((todo) => (
              <li key={todo.id }>
                  {todo.text}
                  <button onClick={() => Dispatch(removetodo(todo.id))}>X</button>
              </li>

              
          ))}
    </div>
  )
}

export default Todos