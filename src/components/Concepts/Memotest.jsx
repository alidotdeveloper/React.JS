import React, { memo } from 'react'
const Memo2 = (props) => {  
  console.log("the prosp is " + props);
  return (
      <div>
    hello         
    </div>
  )
}
export default memo(Memo2);