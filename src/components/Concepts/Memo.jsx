// this is memo + use callback
// in us ecallback ma , jaisy he data ki value update hoti h then wo call bcak k function wo update ho jata h
// use callback work with complex function

// use Memo
// useMemo work with the single value
// usememo can able to store the vakue of hook an also able to return

import React, { useState, useCallback } from 'react'
import Memo2 from './Memotest';
const Meemo= () => {
  const [count, setcount] = useState(0);
  const [data, setdata] = useState(100);


  const btndata = useCallback(() => {
    setdata(data + 1);
  },[data])

  return (
      <div>
      Count by memo {count}
     
      <Memo2 data={btndata} />
      <button onClick={() => { setcount(count + 1) }}> click</button> 
   
      <button onClick={() => {setdata(data + 1); }}> data</button>          
      
    </div>
  )
}


export default Meemo;


// memo help to stop re rendering the internal component.
// 

// m