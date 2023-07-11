import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
  return (
    <div>
  <div className="sidebar"><center>
  <img src="https://res.cloudinary.com/dggrpzdnl/image/upload/v1669218444/banner_n6mzgs.png" style={{width: '100px'}} />
  <h1>Catagories</h1>
  {/* <a class="active" href="#home">Home</a> */}
  <a href="#BURGERS">AirFryer</a>
  <a href="#PIZZA">Cokker</a>
  <a href="#BEVRAGES">Oven</a>
</center></div>

    
<div className="contents">
    <div className="shop">
      <div className="shopTitle">
        <h1>Online Appliance Booking system</h1>
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
