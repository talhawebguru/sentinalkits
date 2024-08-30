import Image from "next/image";
import Banner from "./components/Banner";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Product from "./components/Product";

export default function Home() {
  return (
    <>
      <main>
        <Hero/>
        <AboutUs />
        <Product/>
        <Banner/>
      </main>
    </>
  );
}
