import Image from "next/image";
import Banner from "./components/Banner";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";

export default function Home() {
  return (
    <>
      <main>
        <Hero/>
        <AboutUs />
        <Banner/>
      </main>
    </>
  );
}
