import React from 'react'
import Image from 'next/image'
import BannerImage from '@/public/images/banner.svg'
import RightArrow from '@/public/images/rightArrowP.svg'

const Banner = () => {
  return (
    <>
    <div className='bg-CTA bg-no-repeat bg-cover bg-center  mt-32 xs:mt-10 xl:mx-[90px] lg:px-[40px] px-5 flex flex-wrap md:flex-nowrap pb-20 md:pb-0 2xl:max-w-[1440px] 2xl:mx-auto'>
        <div className='lg:w-[50%] hidden md:block'><Image src={BannerImage} alt='CTA Banner Image' className='h-[100%]'/></div>
        <div className='mt-20'>
            <h2 className=" text-white text-[42px] font-normal font-arial leading-[47.88px]">Enjoy up to 10% off!</h2>
            <p className='text-white text-base font-normal font-secondary leading-normal mt-4 lg:w-[400px]'>Grab your limited-time discount and enjoy 10% off on all our products</p>
            <div className="px-[25px]  mb-5 py-3 mt-8  text-primary justify-center items-center gap-4 inline-flex bg-white text-base font-medium font-primary">
              Get this from Jurhy <Image src={RightArrow} alt="Right Arrow"  />
            </div>
        </div>
    </div>
    </>
  )
}

export default Banner