"use client";
import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import Rectangle from "../../../public/Images/Ellipse 50.svg";
import Rectangle_2 from "../../../public/Images/Ellipse 51.svg";
import Rectangle_3 from "../../../public/Images/Ellipse 52.svg";
import Rectangle_4 from "../../../public/Images/Ellipse 53.svg";
import Right from  "../../../public/icon/fluent_ios-arrow-24-filled (2).svg"
import Left from "../../../public/icon/fluent_ios-arrow-24-filled (1).svg"
import Rupee from  "../../../public/icon/mdi_rupee.svg"
// import Ellipse_17 from "../../../../public/icon/Ellipse 17.png";
import whatsapp_logo from "../../../public/icon/logos_whatsapp-icon (1).svg"
import "./style.css";
import Link from "next/link";


const Product = () => {
    const cardData = [
        { image: Rectangle, price: "250.00" },
        { image: Rectangle_2, price: "250.00" },
        { image: Rectangle_3, price: "250.00" },
        { image: Rectangle_4, price: "250.00" },
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
          <h1 className="product-logo logo-text align-items-center justify-content-center d-flex ">
            Our Product
          </h1>
          
            <Carousel showArrows={false} selectedItem={selectedSlide}  showStatus={false} >
              {cardData.map((card, index) => (
                <div key={index} className="container carousel-card">
                  <div className="row">
                    <div className="col align-items-center justify-content-center d-flex">
                      <div className="product-card">
                        <Image src={Rectangle} alt="img" className="child-1" />
                        <div className="fashion-layout">
                          <p className="fashion-shirts-text d-flex">Shirts</p>
                        </div>
                        <div className="price-layout">
                          <Image src={Rupee} alt="img" className="rupee-icon-" />
                          <h1 className="product-card-rs">{card.price}</h1>
                        </div>
                        <button className="button-">
                        <Link href="https://api.whatsapp.com/send?phone=9301202044&text=Hello" target="_blank">
                          <Image
                            src={whatsapp_logo}
                            alt="YouTube"
                            className="icon"
                          />
                          </Link>
                        </button>
                      </div>
                    </div>
                    <div className="col align-items-center justify-content-center d-flex">
                      <div className="product-card">
                        <Image src={Rectangle_2} alt="img" className="child-1" />
                        <div className="fashion-layout">
                          <p className="fashion-shirts-text d-flex">Shirts</p>
                        </div>
                        <div className="price-layout">
                          <Image src={Rupee} alt="img" className="rupee-icon-" />
                          <h1 className="product-card-rs">{card.price}</h1>
                        </div>
                        <button className="button-">
                        <Link href="https://api.whatsapp.com/send?phone=9301202044&text=Hello" target="_blank">
                          <Image
                            src={whatsapp_logo}
                            alt="YouTube"
                            className="icon"
                          />
                          </Link>
                        </button>
                      </div>
                    </div>
                    <div className="col align-items-center justify-content-center d-flex">
                      <div className="product-card">
                        <Image src={Rectangle_3} alt="img" className="child-1" />
                        <div className="fashion-layout">
                          <p className="fashion-shirts-text d-flex">Shirts</p>
                        </div>
                        <div className="price-layout">
                          <Image src={Rupee} alt="img" className="rupee-icon-" />
                          <h1 className="product-card-rs">{card.price}</h1>
                        </div>
                        <button className="button-">
                        <Link href="https://api.whatsapp.com/send?phone=9301202044&text=Hello" target="_blank">
                          <Image
                            src={whatsapp_logo}
                            alt="YouTube"
                            className="icon"
                          />
                          </Link>
                        </button>
                      </div>
                    </div>
                    <div className="col align-items-center justify-content-center d-flex">
                      <div className="product-card">
                        <Image src={Rectangle_4} alt="img" className="child-1" />
                        <div className="fashion-layout">
                          <p className="fashion-shirts-text d-flex">Shirts</p>
                        </div>
                        <div className="price-layout">
                          <Image src={Rupee} alt="img" className="rupee-icon-" />
                          <h1 className="product-card-rs">{card.price}</h1>
                        </div>
                        <button className="button-">
                        <Link href="https://api.whatsapp.com/send?phone=9301202044&text=Hello" target="_blank">
                          <Image
                            src={whatsapp_logo}
                            alt="YouTube"
                            className="icon"
                          />
                          </Link>
                        </button>
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
    
export default Product