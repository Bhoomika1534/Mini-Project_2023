import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export const Shop = () => {
  return (
    <div>
  <div className="sidebar">
  {/* <img src="https://res.cloudinary.com/dggrpzdnl/image/upload/v1669218444/banner_n6mzgs.png" style={{width: '100px'}} /> */}
  <center><h1>Categories</h1></center>
  {/* <a class="active" href="#home">Home</a> */}
  <br>
  </br>
  <a href="">Home Appliance</a>
  <a href="">Electrical Appliance</a>
  <a href="">Kitchen Appliance</a>
 </div>

    
<div className="contents">
    <div className="shop">
      <div className="shopTitle">
       <center> <h1>Online Appliance Booking System</h1></center>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
    </div>
    </div>
  );
};
