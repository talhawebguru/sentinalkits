"use client"
import React from 'react'
import { useState } from 'react';


const TabsProduct = () => {

    const [activeTab, setActiveTab] = useState('description');

    const tabs = [
      { id: 'description', label: 'Description' },
      { id: 'info', label: 'Info' },
      { id: 'reviews', label: 'Reviews (1)' },
    ];
  
    const renderContent = () => {
      switch (activeTab) {
        case 'description':
          return <p className='text-divi-gray-300 test-base font-primary font-normal leading-normal'>Traditionally, the BWE has been studied in serial supply chains. That is also the setting of the famous beer game, where the typical demand pattern across
          the supply chain looks like this: for a relatively small change in demand seen by the retailer, the demand variability progressively increases at the more 
          upstream wholesaler, distributor, and factory (see the figure below). This leads to capacity shortages, stockouts, excess inventory, and increased 
          operational costs. No wonder BWE has  a lot of attention among academics and practitioners alike.</p>;
        case 'info':
          return <p className='text-divi-gray-300 test-base font-primary font-normal leading-normal'>Additional product information goes here...</p>;
        case 'reviews':
          return <p className='text-divi-gray-300 test-base font-primary font-normal leading-normal'>Customer reviews will be displayed here...</p>;
        default:
          return null;
      }
    };
  
  return (
    <>
     <div className="xl:px-[90px] lg:px-[40px] px-5 mt-12 md:mt-20 2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0">
      <div className="flex border-b border-[#9D9996]">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-4 py-2 -mb-px text-sm font-medium text-[#271F19]  focus:outline-none ${
              activeTab === tab.id ? 'border-[#9D9996] border-b-2  text-[#271F19]' : 'border-[#9D9996] hover:text-gray-800'
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="py-4">
        {renderContent()}
      </div>
    </div>
    </>
  )
}

export default TabsProduct