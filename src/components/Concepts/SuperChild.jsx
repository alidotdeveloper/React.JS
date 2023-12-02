import React from 'react'
import { useContext } from 'react';
import { GlobalInfo } from './ContextAPI';


function SuperChild() {
    const info = "hey, it's me ALi";
    const date = new Date();
    const time = date.toLocaleDateString();
    const {globalcolor, getinfo, obtain } = useContext(GlobalInfo);
    return (
        <div><h1 style={{ color: globalcolor }}>SuperChild</h1>
            <button onClick={() => getinfo(info)}>click</button>
            <button onClick={ ()=> obtain(time)}>Give date</button>
        </div>
  )
}

export default SuperChild