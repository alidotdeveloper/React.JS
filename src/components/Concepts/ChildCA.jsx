import React, { useContext } from 'react';
import { GlobalInfo } from './ContextAPI';


function ChildCA() {

    const { globalcolor } = useContext(GlobalInfo);
    console.log(globalcolor);
  return (
    <div><h1 style={{color:globalcolor}}>child </h1></div>
  )
}

export default ChildCA