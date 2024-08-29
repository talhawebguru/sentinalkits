import React from 'react'
import PageNameBanner from '../components/PageNameBanner'
// import AboutHeroImg from '@/public/images/aboutHero.svg';
import TouchWithUs from '../components/contact/TouchWithUs';
// import LocationMap from '../components/contact/LocationMap';
import PageBannerImg from "@/public/images/productBannerImg.svg"



const page = () => {
  return (
    <>
    <PageNameBanner title="" image={PageBannerImg}/>
    <TouchWithUs/>
    {/* <LocationMap/> */}
    </>
  )
}

export default page