import Image from "next/image";
import styles from "./page.module.css";
import Header from "./header/header";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./card/card";
import Product from "./product/product";
import Gallery from "./gallery/gallery";

export default function Home() {
  return (
    <>
      <div className="fashion-bg-color">
        <Header />
        <Card />
        <Product />
        <Gallery/>
      </div>
    </>
  );
}
