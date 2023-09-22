import React from "react";
import Image from "next/image";
import Link from "next/link";
import Telephone from "../../../public/icon/material-symbols_call-sharp.svg";
import Mail from "../../../public/icon/tabler_mail-filled.svg";
import Sagment from "../../../public/icon/ph_line-segments-fill (1).svg";
import Location from  "../../../public/icon/fluent_location-16-filled.svg"
import instagram from  "../../../public/button-icon/Vector.svg"
import facebook from  "../../../public/button-icon/bxl_facebook.svg"
import whatsapp from  "../../../public/button-icon/ic_outline-whatsapp.svg"
import Youtube from  "../../../public/button-icon/ri_youtube-line.svg"
import "./style.css"
const Card = () => {
    
  return (
    <>
      {/* card-start */}
      <div className="container mt-5 align-items-center justify-content-center d-flex">
        <div className="gap-2 card-row row">
          <div className="mt-5 col align-items-center justify-content-center d-flex">
            <div class="card">
              <button className="card-button"   >
                <Image src={Telephone} alt="img" className="phone-icon" />
                <div class="card-body">
                  <p class="card-text align-items-center justify-content-center  d-flex">
                    Phone Number
                  </p>
                  <h6 className="card-number">+91 9585756555</h6>
                </div>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="mt-5 col align-items-center justify-content-center d-flex">
              <div class="card">            
                <button className="card-button" >
                <Link href="https://www.google.com/gmail/about/" className="link text-decoration-none" target="_blank">
                  <Image src={Mail} alt="img" className="mail-icon" />
                  <div class="card-body">
                    <p class="card-text align-items-center justify-content-center d-flex">
                      Email id
                    </p>
                    <h6 className="mail-text">luckyrajput@856545</h6>
                  </div>
                  </Link>
                </button>
                 
              </div>
            </div>
          </div>
          <div className="col">
            <div className="mt-5 col align-items-center justify-content-center d-flex ">
              <div class="card">
                <button className="card-button">
                  <Image src={Sagment} alt="img" className="phone-icon" />
                  <div class="card-body">
                    <p class="card-text align-items-center justify-content-center d-flex">
                      Business Segment
                    </p>
                    <h6 className="card-number">Furniture</h6>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="mt-5 col align-items-center justify-content-center d-flex">
              <div class="card">
                <button className="card-button">
                 <Link href="https://www.google.com/maps/@21.1550208,79.0790144,13z?entry=ttu" className="location text-decoration-none" target="_blank"> 
                  <Image src={Location} alt="img" className="phone-icon" />
                  <div class="card-body">
                    <p class="card-text align-items-center justify-content-center d-flex">
                      Location
                    </p>
                    <h6 className="location-card-number ">2972 Westheimer Rd. </h6>
                  </div>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* card-end */}
      {/* icon-button */}
      <div className="container mt-5 align-items-center justify-content-center d-flex">
        <div className="gap-2 row">
          <div className="col">
            <Link href="https://www.instagram.com/" target="_blank">
              <button className="button">
                <Image src={instagram} alt="Instagram" className="icon" />
              </button>
            </Link>
          </div>
          <div className="col" target="_blank">
            <Link href="https://www.facebook.com/">
              <button className="button">
                <Image src={facebook} alt="Facebook" className="icon" />
              </button>
            </Link>
          </div>
          <div className="col">
            <Link href="https://www.whatsapp.com/" target="_blank">
              <button className="button">
                <Image src={whatsapp} alt="WhatsApp" className="icon" />
              </button>
            </Link>
          </div>
          <div className="col">
            <Link href="https://www.youtube.com/" target="_blank">
              <button className="button">
                <Image src={Youtube} alt="YouTube" className="icon" />
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* icon-button */}
    </>
  );
};

export default Card;
