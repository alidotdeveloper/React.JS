import React from 'react';
import Header from './Header';
import Homesection from './Home-section';


function Home() {
    return (
        <>
            <Header />   
               <div className='main-section'>
                <h1 className='main-head'>Our Products</h1>
                <div class="row">
                <Homesection img="https://images.priceoye.pk/apple-iphone-x-pakistan-priceoye-9k67h-500x500.webp" title="Iphone X" price="$300" />
                <Homesection img="https://images.priceoye.pk/apple-iphone-11-pro-pakistan-priceoye-9rgek-500x500.webp" title="Iphone 11 pro" price="$400"/>
                    </div>
    </div>
      </>
      
      
  )
}

export default Home