"use client";
import React, { useState } from "react";

const Popup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <>
      <div className="fixed  inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white  p-6 rounded-lg shadow-lg xl:w-[1000px] lg:w-[850px] w-[70%]">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-medium font-primary text-black leading-9">
              <span className="text-[#12121280]">Send Enquiry for</span>{" "}
              Alkaline Peptone Water
            </h2>
            <button onClick={onClose} className="text-xl">
              &times;
            </button>
          </div>
          <form className="flex flex-wrap gap-7">
            <div className="mb-4 w-[48%]">
              <label className="text-[#12121280] text-[13px] font-normal font-primary">
                Name
              </label>
              <input
                type="text"
                className="border border-gray-300 p-2 w-full rounded"
                placeholder="Shekhar Gupta"
              />
            </div>
            <div className="mb-4 w-[48%]">
              <label className="text-[#12121280] text-[13px] font-normal font-primary">
                Company / Organisation
              </label>
              <input
                type="text"
                className="border border-gray-300 p-2 w-full rounded"
                placeholder="Microbiano"
              />
            </div>
            <div className="mb-4 w-[48%]">
              <label className="text-[#12121280] text-[13px] font-normal font-primary">
                Address
              </label>
              <input
                type="text"
                className="border border-gray-300 p-2 w-full rounded"
                placeholder="Shekhar Gupta"
              />
            </div>
            <div className="mb-4 w-[48%]">
              <label className="text-[#12121280] text-[13px] font-normal font-primary">
                Email
              </label>
              <input
                type="email"
                className="border border-gray-300 p-2 w-full rounded"
                placeholder="example123@gmail.com"
              />
            </div>
            <div className="mb-4 w-[30%]">
              <label className="text-[#12121280] text-[13px] font-normal font-primary">
                Phone No.
              </label>
              <div className="flex">
                <select className="border border-gray-300 p-2 rounded-l">
                  <option>PK +92</option>
                  {/* Add more country codes here */}
                </select>
                <input
                  type="text"
                  className="border border-gray-300 p-2 w-full rounded-r"
                  placeholder="324-5547821"
                />
              </div>
            </div>
            <div className="mb-4 w-[30%]">
              <label className="text-[#12121280] text-[13px] font-normal font-primary">
              Country Code
              </label>
              <input
                type="text"
                className="border border-gray-300 p-2 w-full rounded"
              />
            </div>
            <div className="mb-4 w-[30%]">
              <label className="text-[#12121280] text-[13px] font-normal font-primary">
                Subject
              </label>
              <input
                type="text"
                className="border border-gray-300 p-2 w-full rounded"
              />
            </div>
            <div className="mb-4 w-full">
              <label className="text-[#12121280] text-[13px] font-normal font-primary">
                Message
              </label>
              <textarea className="border border-gray-300 p-2 w-full rounded" rows={8}></textarea>
            </div>
            <button
              type="submit"
              className="bg-primary text-white px-4 py-3 rounded font-primary text-base"
            >
              Send Enquiry
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Popup;
