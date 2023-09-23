"use client";
import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import Rectangle from  "../../../public/gallery-img/Rectangle 122.svg"
import Rectangle_2 from  "../../../public/gallery-img/Rectangle 122 (1).svg"
import Rectangle_3 from  "../../../public/gallery-img/Rectangle 122 (2).svg"
import Rectangle_4 from  "../../../public/gallery-img/Rectangle 122 (3).svg"
import Right from "../../../public/icon/fluent_ios-arrow-24-filled (2).svg";
import Left from "../../../public/icon/fluent_ios-arrow-24-filled (1).svg";
import "./style.css";
 

const Product = () => {
  const cardData = [
    { image: Rectangle },
    { image: Rectangle_2 },
    { image: Rectangle_3 },
    { image: Rectangle_4 },
  ];

  const [selectedSlide, setSelectedSlide] = useState(0);

  const nextSlide = () => {
    setSelectedSlide(
      (prevSelectedSlide) => (prevSelectedSlide + 1) % cardData.length
    );
  };

  const prevSlide = () => {
    setSelectedSlide(
      (prevSelectedSlide) =>
        (prevSelectedSlide - 1 + cardData.length) % cardData.length
    );
  };

  return (
    <div>
      <h1 className="gallery-product-logo align-items-center justify-content-center d-flex ">
        Gallery
      </h1>

      <Carousel
        showArrows={false}
        selectedItem={selectedSlide}
        showStatus={false}
      >
        {cardData.map((card, index) => (
          <div key={index} className="container carousel-card">
            <div className="gallery-row row">
              <div className="col align-items-center justify-content-center d-flex">
                <div className="gallery-product-card">
                  <Image src={Rectangle} alt="img" className="gallery-child-1" />
                </div>
              </div>
              <div className="col align-items-center justify-content-center d-flex">
                <div className="gallery-product-card">
                  <Image src={Rectangle_2} alt="img" className="gallery-child-1" />
                </div>
              </div>
              <div className="col align-items-center justify-content-center d-flex">
                <div className="gallery-product-card">
                  <Image src={Rectangle_3} alt="img" className="gallery-child-1" />
                </div>
              </div>
              <div className="col align-items-center justify-content-center d-flex">
                <div className="gallery-product-card">
                  <Image src={Rectangle_4} alt="img" className="gallery-child-1" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>

      {/* Custom left and right buttons */}
      <div className="container mt-5 product-btn align-items-center justify-content-center d-flex">
        <div className="gap-2 btn-row row">
          <div className="col">
            <button type="button" className="button" onClick={prevSlide}>
              <Image src={Left} className="icon" alt="Previous" />
            </button>
          </div>
          <div className="col">
            <button type="button" className="button" onClick={nextSlide}>
              <Image src={Right} className="icon" alt="Next" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
