import React from 'react'
import PageNameBanner from '../components/common/PageNameBanner'
import TouchWithUs from '../components/contact/TouchWithUs';
import ContactBannerImg from "@/public/images/contactBannerImg.svg"
import LocationMap from '../components/contact/LocationMap';

export const metadata = {
  title: "SentinalKits /Contact",
  description: "Sentinal kits Medical Care Products",
};

const page = () => {
  return (
    <>
    <PageNameBanner title="Contact Us" image={ContactBannerImg}/>
    <LocationMap/>
    <TouchWithUs/>
    </>
  )
}

export default page