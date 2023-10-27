import React from 'react'

function tes() {
  const Numbers = [
    { name: "ali", email: "alihassnain330@gmail.com", number: "037238726783" },
    { name: "asim", email: "asim@gmail.com", number: "035666783" },
    {name:"ahsan",email:"ahsan@gmail.com",number:"0365645783"}
    
    
    ]
  return (
    <div>
      {Numbers.map((item) => (
        <span>
          <span>{item.name}</span>
        <span>{item.email}</span>
          <span>{item.number}</span>
          <br></br>
        
</span>
        
      ))}
      </div>
  )
}

export default tes