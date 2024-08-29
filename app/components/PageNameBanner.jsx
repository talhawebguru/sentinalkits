import React from 'react'
import Image from 'next/image'

const PageNameBanner = (props) => {
  return (
    <>
        <div className=" 2xl:max-w-[1440px] 2xl:mx-auto xl:mx-[90px] lg:mx-10 h-56 lg:mt-11 mt-6 relative xs:overflow-hidden xs:mt-5" >
            <Image src={props.image} className='absolute -z-10 w-full h-full object-cover object-right inset-0' />
            <h2 className="text-primary text-5xl xs:text-[32px] font-normal font-nohemi absolute bottom-9 left-9 ">{props.title}</h2>
        </div>

    </>
  )
}

export default PageNameBanner