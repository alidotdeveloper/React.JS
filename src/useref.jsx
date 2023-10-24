// it basically a create a mutable variable that's didn't rerender again like usestate setdata hook to rerender

import React, { useEffect, useRef, useState } from 'react'

function Useref() {
    const [data, setdata] = useState(0);
   
    // const count = useRef(0);
    // console.log(count);

    const rang = useRef("");
    const abc = () => {
        // count.current = count.current + 1;
        rang.current.style.backgroundColor = "red";
    }
    // const handlereset =()=>{
    //     clearTimeout(count.current);
    //     count.current = null;
    // }
  return (
      <div>
          <input ref={rang} type='text' value={data} onChange={(e)=>setdata(e.target.value)}></input>
          {/* Total number of rendering is : {count.current} */}
           <button onClick={abc}>reset</button>


    </div>
  )
}

export default Useref