import React from 'react';
import Header from './Header';
import Homesection from './Home-section';




function Home() {
    
    return (
        <>
            <Header />   
            <div className='main-section'>
                <h1 className='main-head'>Our Products</h1>
                <Homesection />
                
    </div>
      </>
      
      
  )
}

export default Home