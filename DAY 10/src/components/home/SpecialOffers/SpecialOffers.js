import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  spfOne,
  spfTwo,
  spfThree,
  spfFour,
} from "../../../assets/images/index";

const SpecialOffers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Special Offers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1101"
          img={spfOne}
          productName="Partex Table Fan"
          price="3500.00"
          color="Wooden"
          badge={true}
          des=" Partex Table Fan, a reliable and efficient cooling solution that brings comfort to your home or office. Designed with a focus on performance and durability, this table fan offers a refreshing breeze while being compact and convenient to use.
          The Partex Table Fan features a sturdy and well-built construction, ensuring stability during operation. Its compact size makes it ideal for placing on tables, desks, or any flat surface, allowing you to enjoy a cool breeze exactly where you need it."
        />
        <Product
          _id="1102"
          img={spfTwo}
          productName="Tea Table"
          price="18000.00"
          color="Wooden"
          badge={true}
          des="the Wooden Tea Table, a timeless and charming addition to your living space. This exquisite table combines the natural beauty of wood with elegant design, creating a warm and inviting atmosphere for tea time and social gatherings."
        />
        <Product
          _id="1103"
          img={spfThree}
          productName="Headphones"
          price="2500.00"
          color="Mixed"
          badge={true}
          des="Product Description
          Designed for true music lovers, these wired headphones from Sony combine premium high-resolution audio quality with striking design and long-lasting comfort.
          Sleek Style
          Make a style statement with these cool headphones. Featuring an elegant and contemporary design, these headphones comprise premium tactile materials and audio components for a great listening experience."
        />
        <Product
          _id="1104"
          img={spfFour}
          productName="Amazon Echo Dot"
          price="220.00"
          color="Black and Blue"
          badge={true}
          des="Echo Dot is a hands-free, voice-controlled device that uses the same far-field voice recognition as Amazon Echo. Dot has a small built-in speaker - it can also connect to your speakers over Bluetooth or with the included audio cable. Dot connects to the Alexa Voice Service to play music, provide information, news, sports scores, weather, and more - instantly.
          Echo Dot can hear you from across the room, even while music is playing. When you want to use Echo Dot, just say the wake word 'Alexa' and Dot responds instantly. If you have more than one Echo or Echo Dot, Alexa responds intelligently from the Echo device you're closest to with ESP (Echo Spatial Perception)."
        />
      </div>
    </div>
  );
};

export default SpecialOffers;
