import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import "./Carousel.css"; // Import your custom styles for the carousel

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          variableWidth: false,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {/* Your carousel items go here */}
      <div className="carousel-item m-[10px] border-2 border-black">
        <img
          src="https://d.novoresume.com/images/doc/basic-resume-template.png"
          alt="Image 1"
          width={"150px"}
          height={"150px"}
        />
      </div>
      <div className="carousel-item m-[10px] border-2 border-black">
        <img
          src="https://d.novoresume.com/images/doc/basic-resume-template.png"
          alt="Image 1"
          width={"150px"}
          height={"150px"}
        />
      </div>
      <div className="carousel-item m-[10px] border-2 border-black">
        <img
          src="https://d.novoresume.com/images/doc/basic-resume-template.png"
          alt="Image 1"
          width={"150px"}
          height={"150px"}
        />
      </div>
      <div className="carousel-item m-[10px] border-2 border-black">
        <img
          src="https://d.novoresume.com/images/doc/basic-resume-template.png"
          alt="Image 1"
          width={"150px"}
          height={"150px"}
        />
      </div>
      <div className="carousel-item m-[10px] border-2 border-black">
        <img
          src="https://d.novoresume.com/images/doc/basic-resume-template.png"
          alt="Image 1"
          width={"150px"}
          height={"150px"}
        />
      </div>
      <div className="carousel-item m-[10px] border-2 border-black">
        <img
          src="https://d.novoresume.com/images/doc/basic-resume-template.png"
          alt="Image 1"
          width={"150px"}
          height={"150px"}
        />
      </div>
    </Slider>
  );
};

export default Carousel;
