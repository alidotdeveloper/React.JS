// eslint-disable-next-line

import React from 'react';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';


function Header() {
  const items = useSelector((state)=>state.cart);
  return (     
          <div>
          
<nav class="navbar navbar-expand-md navbar-light bg-light main-menu" >
  <div class="container">

    <button type="button" id="sidebarCollapse" class="btn btn-link d-block d-md-none">
                <i class="bx bx-menu icon-single"></i>
            </button>

    <Link class="navbar-brand" to="/">
      <h4 class="font-weight-bold">TR<span className='text-danger'>STORE</span></h4>
    </Link>

    <ul class="navbar-nav ml-auto d-block d-md-none">
      <li class="nav-item">
        <a class="btn btn-link" href="/"><i class="bx bxs-cart icon-single"></i> <span class="badge badge-danger">10</span></a>
      </li>
    </ul>

    <div class="collapse navbar-collapse">
      <form class="form-inline my-2 my-lg-0 mx-auto">
        <input class="form-control" type="search" placeholder="Search for products..." aria-label="Search" />
        <button class="btn btn-danger my-2 my-sm-0" type="submit"><i class="bx bx-search"></i></button>
      </form>

      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="btn btn-link" to="/cart"><i class="bx bxs-cart icon-single bx-md"></i> <span class="badge badge-danger">{items.length}</span></Link>
        </li>
      </ul>
    </div>

  </div>
</nav>


<div class="search-bar d-block d-md-none">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <form class="form-inline mb-4 mx-auto">
          <input class="form-control input-lg" id="input-lg" type="search" placeholder="Search for products..." aria-label="Search"  />
          <button class="btn btn-success" type="submit"><i class="bx bx-search"></i></button>
        </form>
      </div>
    </div>
  </div>
</div>



          

      
      </div>
   
  )
}

export default Header