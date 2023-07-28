import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
} from "../../../assets/images/index";

const BestSellers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Our Bestsellers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1011"
          img={bestSellerOne}
          productName="Portable Charger"
          price="35.00"
          color="Blank and Yellow"
          badge={true}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <Product
          _id="1012"
          img={bestSellerTwo}
          productName="Backpack with USB"
          price="180.00"
          color="Gray"
          badge={false}
          des="This Anti-Theft Backpack apply anti-theft design technology. Zipper of main pocket is fully hidden in the back of this bag ,no theft will easily open your backpack.
          USB Charge External USB port with built-in charging cable offers a convenient charging of your electronic device anywhere, and this bag do not include a battery, you need a power bank to charge it"
        />
        <Product
          _id="1013"
          img={bestSellerThree}
          productName="Instant Pot"
          price="25.00"
          color="Black"
          badge={true}
          des="The next generation of Instant Pot Duo Crisp is here. The Instant Pot Duo Crisp 13 in 1 Multi Cooker with Ultimate Lid combines a multi cooker with an air fryer and comes with just the one lid for all cooking programs. No more switching the lid between the wet and dry programs, which means you also don't have to store two lids, saving precious storage space. This clever combo cooker can air fry, pressure cook, saute, slow cook, steam, warm, roast, bake, broil, dehydrate, make yoghurt, sous vide and proof bread"
        />
        <Product
          _id="1014"
          img={bestSellerFour}
          productName="Iphone"
          price="48000.00"
          color="White"
          badge={false}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
      </div>
    </div>
  );
};

export default BestSellers;
