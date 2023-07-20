import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const About = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="About" prevLocation={prevLocation} />
      <div className="pb-10">
        <h1 className="max-w-[600px] text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg">B02</span>{" "}
          is one of the world's leading ecommerce brands and is internationally
          recognized for celebrating the essence of classic Worldwide cool
          looking style.
          Welcome to our Appliance Shop! We are a leading provider of high-quality appliances, dedicated to fulfilling all your home appliance needs. Our commitment is to offer an extensive range of appliances, exceptional customer service, and a seamless shopping experience.
          At our shop, we understand that appliances play a vital role in making your home comfortable, efficient, and convenient. Whether you're looking for kitchen appliances, laundry machines, refrigerators, air conditioners, or any other household appliance, we have you covered. We carefully select our inventory from trusted brands known for their reliability, durability, and innovative features.<br/><br/>
          Our knowledgeable and friendly staff is always ready to assist you in finding the perfect appliance to meet your specific requirements. We understand that each customer has unique needs and preferences, and we take pride in helping you make an informed decision. Feel free to ask us any questions you may have about our products, and we'll provide you with expert advice and guidance.
          Customer satisfaction is our top priority. We strive to ensure that every customer leaves our store completely satisfied with their purchase. We offer competitive prices, regular promotions, and flexible financing options to make your appliance shopping experience even more enjoyable.<br/><br/>
          In addition to our excellent product offerings, we also provide comprehensive after-sales services. Our skilled technicians are available to assist you with installation, repairs, and maintenance, ensuring that your appliances perform optimally throughout their lifespan.
          We believe in building long-term relationships with our customers, and our commitment to quality and customer service sets us apart. Your trust in us is greatly valued, and we continually work hard to exceed your expectations.
          Visit our Appliance Shop today and discover a world of top-quality appliances, exceptional service, and unmatched expertise. We look forward to serving you and providing solutions that enhance your home and lifestyle.
        </h1>
        <Link to="/shop">
          <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
