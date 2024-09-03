import React from 'react'
import PageNameBanner from '../components/PageNameBanner'
import TouchWithUs from '../components/contact/TouchWithUs';
import ContactBannerImg from "@/public/images/contactBannerImg.svg"
import LocationMap from '../components/contact/LocationMap';



const page = () => {
  return (
    <>
    <PageNameBanner title="" image={ContactBannerImg}/>
    <LocationMap/>
    <TouchWithUs/>
    </>
  )
}

export default page