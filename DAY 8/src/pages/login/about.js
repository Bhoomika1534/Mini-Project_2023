import React from "react";
import { Link } from "react-router-dom";
import FullyCustomSortComparator from "./review";
import "./about.css";
export const About =()=>{
    return(
<div className="About">
        <div className id="about">
          <div className="content">
            <p className="bo">Every day, more than 11 million guests visit OMG Burger restaurants around the world.
              And they do so because our restaurants are known for serving high-quality, great-tasting,
              and affordable food. Founded in 1954, OMG Burger is the second largest fast food hamburger
              chain in the world. The original Home of the Whopper, our commitment to premium ingredients,
              signature recipes, and family-friendly dining experiences is what has defined our brand for 
              more than 50 successful years</p>
            {/* <center><img src="https://nijuuichi.com/wp-content/uploads/2022/07/round-chef.png" style={{width: '150px'}} className="circle right" alt="Chef" /></center> */}
            <img src="https://res.cloudinary.com/ddcuvoxj7/image/upload/v1689258452/premium-home-appliance-store-interior_vddepa.jpg" style={{width: '100%',height:'600px'}} alt="Restaurant" />
            <div className>
              <center><h2 className="boo">About Us</h2><br></br>
              <p className="bo">Welcome to our Appliance Shop! We are a leading provider of high-quality appliances, dedicated to fulfilling all your home appliance needs. Our commitment is to offer an extensive range of appliances, exceptional customer service, and a seamless shopping experience.

At our shop, we understand that appliances play a vital role in making your home comfortable, efficient, and convenient. Whether you're looking for kitchen appliances, laundry machines, refrigerators, air conditioners, or any other household appliance, we have you covered. We carefully select our inventory from trusted brands known for their reliability, durability, and innovative features.<br/><br/>

Our knowledgeable and friendly staff is always ready to assist you in finding the perfect appliance to meet your specific requirements. We understand that each customer has unique needs and preferences, and we take pride in helping you make an informed decision. Feel free to ask us any questions you may have about our products, and we'll provide you with expert advice and guidance.

Customer satisfaction is our top priority. We strive to ensure that every customer leaves our store completely satisfied with their purchase. We offer competitive prices, regular promotions, and flexible financing options to make your appliance shopping experience even more enjoyable.<br/><br/>

In addition to our excellent product offerings, we also provide comprehensive after-sales services. Our skilled technicians are available to assist you with installation, repairs, and maintenance, ensuring that your appliances perform optimally throughout their lifespan.

We believe in building long-term relationships with our customers, and our commitment to quality and customer service sets us apart. Your trust in us is greatly valued, and we continually work hard to exceed your expectations.

Visit our Appliance Shop today and discover a world of top-quality appliances, exceptional service, and unmatched expertise. We look forward to serving you and providing solutions that enhance your home and lifestyle.</p></center><br></br>   
            </div>
          </div>
        </div>
        <br/><br/>
        <h3>Overall Review from customer worldwide</h3><br/>
        <FullyCustomSortComparator/>
      </div>
    )
};
