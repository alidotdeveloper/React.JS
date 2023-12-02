import React, { createContext, useState } from 'react';

import ChildCA from './ChildCA'
import SuperChild from './SuperChild';

export const GlobalInfo = createContext();

function ContextAPI() {
    const [color, setcolor] = useState('green');
    const getinfo = (item) => {
        console.log(item)
    }

    const getdate = (d) => {
        console.log(d);
        
    }
    return (
      <GlobalInfo.Provider value={{globalcolor: color, getinfo:getinfo, obtain:getdate}}>
      <div>
          <h1>Parent Div</h1>
                <ChildCA />
                <SuperChild />
            </div>
     </GlobalInfo.Provider>
  )
}

export default ContextAPI