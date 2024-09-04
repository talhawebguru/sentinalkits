import React from 'react'
import AboutUs from '../components/AboutUs'
import Vision from '../components/about/Vision'
import Mission from '../components/about/Mission'
import Banner from '../components/Banner'
import AboutTitle from '../components/about/AboutTitle'

export const metadata = {
  title: "SentinalKits /About",
  description: "Sentinal kits Medical Care Products",
};
const page = () => {
  return (
    <>
        <AboutTitle/>
        <AboutUs/>
        <Vision/>
        <Mission/>
        <Banner/>
    </>
  )
}

export default page