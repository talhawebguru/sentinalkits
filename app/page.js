import Image from "next/image";
import Banner from "./components/common/Banner";
import Hero from "./components/home/Hero";
import AboutUs from "./components/common/AboutUs";
import Product from "./components/home/Product";
import ProductOverview from "./components/home/ProductOverview";

export default function Home() {
  return (
    <>
      <main>
        <Hero/>
        <AboutUs />
        <Product/>
        <ProductOverview/>
        <Banner/>
      </main>
    </>
  );
}
