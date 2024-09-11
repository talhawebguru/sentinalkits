import React from 'react'
import Image from 'next/image'

const PageNameBanner = (props) => {
  return (
    <>
        <div className=" 2xl:max-w-[1440px] 2xl:mx-auto xl:mx-[90px] lg:mx-10 h-72 lg:mt-11 mt-6 relative xs:overflow-hidden xs:mt-5" >
            <Image src={props.image} alt='banner' className='absolute -z-10 w-full h-full object-cover object-left-top inset-0' />
            <h2 className="text-white text-[42px] xs:text-[32px] font-normal font-nohemi absolute bottom-28 left-9 ">{props.title}</h2>
            <p className='text-white text-base font-normal font-primary leading-normal absolute bottom-16 left-9 xl:w-[29%]'>Grab your limited-time discount and enjoy 10% off on all our products</p>
        </div>

    </>
  )
}

export default PageNameBanner