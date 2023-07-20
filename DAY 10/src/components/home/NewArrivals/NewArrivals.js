import React from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  newArrOne,
  newArrTwo,
  newArrThree,
  newArrFour,
  newArrFive
} from "../../../assets/images/index";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

const NewArrivals = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="w-full pb-16">
      <Heading heading="New Arrivals" />
      <Slider {...settings}>
        <div className="px-2">
          <Product
            _id="100001"
            img={newArrOne}
            productName="Round Table Clock"
            price="440.00"
            color="Gray"
            badge={true}
            des="Crafted with utmost attention to detail, the Round Table Clock features a beautifully crafted round case, made from high-quality materials such as polished metal, rich wood, or luxurious marble. Its smooth and sleek design exudes sophistication, making it a captivating centerpiece in any space."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100002"
            img={newArrTwo}
            productName="Mini Food Processor"
            price="25000.00"
            color="White and Gray"
            badge={true}
            des="Looking for a kitchen companion to help you make light work of everyday tasks and food prep? The Cuisinart Mini Prep Pro 3 Cup Food Processor is perfectly sized to help you chop, blitz and blend. It's compact, too, for easy storage but remains as powerful as its full-sized counterparts."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100003"
            img={newArrThree}
            productName="Drone"
            price="1005000.00"
            color="Black with blue strips"
            badge={true}
            des="Equipped with a powerful propulsion system, the Drone delivers impressive flight capabilities. It effortlessly soars through the air, providing smooth and steady flights. With multiple rotors and intuitive controls, it offers excellent stability and responsive maneuvering, making it suitable for both beginners and experienced pilots."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100004"
            img={newArrFour}
            productName="Electric Mixers"
            price="6000.00"
            color="Black"
            badge={false}
            des="The KitchenAid Artisan Bowl Lift Mixer will shift your expectations of what a stand mixer can do. Delivering unmatched control and capacity, this mixer is 1.5 times more powerful, designed with stability to support dense and heavy ingredients while treating light mixtures with expert attention. Whether you're a home baker or a small business owner, you'll enjoy the versatility of 11 mixing speeds, including a half speed to fold ingredients with care."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100005"
            img={newArrFive}
            productName="Smart Watch"
            price="35000.00"
            color="Midnight Aluminium"
            badge={false}
            des="The aluminium case is lightweight and made from 100 per cent recycled aerospace-grade alloy. The Sport Band is made from a durable yet surprisingly soft high-performance fluoroelastomer, with an innovative pin-and-tuck closure."
          />
        </div>
      </Slider>
    </div>
  );
};

export default NewArrivals;
