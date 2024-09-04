import Image from "next/image";
import Banner from "./components/Banner";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Product from "./components/Product";
import ProductOverview from "./components/ProductOverview";

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
