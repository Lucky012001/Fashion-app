import React from "react";
import Image from "next/image";
import Rectangle_32 from "../../../public/Images/Rectangle 32.png";
import Ellipse_25 from "../../../public/Images/Ellipse 25.svg";
import Ellipse_26 from "../../../public/Images/Ellipse 26.svg";
import "./style.css";

const Header = () => {
  return (
    <>
      <div className="container-fluid">
        <Image src={Rectangle_32} alt="img" className="header-bg-img" />
        <Image
          src={Ellipse_25}
          alt="img"
          className="mx-auto rounded header-bg-logo d-block"
        />
        <Image
          src={Ellipse_26}
          alt="img"
          className="mx-auto rounded header-logo d-block"
        />
      </div>
      <div className="container logo-text-layout align-items-center justify-content-center d-flex">
        <p className="logo-text">Men's fashion</p>
      </div>
      <div className="container lorem-text-layout align-items-center justify-content-center d-flex">
        <p className="lorem-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </p>
      </div>
    </>
  );
};

export default Header;
