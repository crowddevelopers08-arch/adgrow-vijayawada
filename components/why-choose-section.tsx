"use client";
import React from 'react';
import { AlertCircle } from "lucide-react";

const AdvertisementBanner = () => {
  return (
    <div className="relative w-full mb-5 max-w-4xl md:max-w-5xl lg:max-w-6xl mt-6 xs:mt-8 sm:mt-10 md:mt-12 mx-auto bg-gradient-to-br from-gray-50 to-gray-100 p-3 xs:p-4 sm:p-5 md:p-6 rounded-lg xs:rounded-xl sm:rounded-2xl shadow-lg md:shadow-xl overflow-hidden border border-[#ec2028]/20">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-[#ec2028] opacity-5 rounded-full -translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 right-0 w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-[#ec2028] opacity-5 rounded-full translate-x-1/3 translate-y-1/3"></div>
      
      <div className="relative z-10">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 xs:gap-6 sm:gap-8">
          
          {/* Left Section - Main Offer */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-3 xs:mb-4">
              <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[#ec2028] leading-tight">
                ₹99,999 Flat | Unlimited Follicles in One Session
              </h1>
            </div>
            
            <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-800 mb-3 xs:mb-4 font-medium">
              No hidden costs. No extra charges per graft. Just transparent, world-class care.
            </p>
            
            {/* Alert Message */}
            <div className="inline-flex items-center justify-center lg:justify-start gap-2 bg-[#ec2028]/10 border border-[#ec2028]/30 rounded-lg xs:rounded-xl px-3 xs:px-4 py-2 xs:py-2.5">
              <AlertCircle className="w-4 h-4 xs:w-5 xs:h-5 text-[#ec2028]" />
              <p className="text-black font-semibold text-xs xs:text-sm sm:text-base">
                Only a few slots remain this month.
              </p>
            </div>
          </div>
          
          {/* Divider for mobile */}
          <div className="lg:hidden w-full h-px bg-gradient-to-r from-transparent via-[#ec2028]/20 to-transparent my-2"></div>
          
          {/* Right Section - CTA & Limited Offer */}
          <div className="flex-1 max-w-full lg:max-w-xs xl:max-w-sm">
            <div className="bg-white p-4 xs:p-5 sm:p-6 rounded-lg xs:rounded-xl shadow-lg h-full">
              {/* Limited Offer Badge */}
              <div className="inline-flex items-center px-3 xs:px-4 py-1.5 xs:py-2 bg-[#ec2028] text-white rounded-full mb-3 xs:mb-4 font-bold text-xs xs:text-sm">
                <span>Limited Time Offer</span>
              </div>
              
              {/* Main Offer Title */}
              <div className="mb-3 xs:mb-4">
                <h2 className="text-lg xs:text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
                  Flat ₹99,999 Hair Transplant with Unlimited Follicles
                </h2>
                <div className="w-full h-1.5 xs:h-2 bg-gradient-to-r from-[#ec2028] via-[#ec2028]/70 to-[#ec2028]/40 rounded-full mt-2"></div>
              </div>
              
              {/* Urgency Message */}
              <div className="mb-4 xs:mb-5">
                <p className="text-gray-900 text-sm xs:text-base font-medium">
                  Only <span className="text-[#ec2028] font-bold text-base xs:text-lg sm:text-xl">20 slots</span> available this month — book yours before they fill up.
                </p>
              </div>
              
              {/* CTA Button */}
              <a href="#form">
                <button className="w-full cursor-pointer bg-[#ec2028] text-white font-bold py-3 xs:py-3.5 px-4 xs:px-5 rounded-lg xs:rounded-xl hover:bg-[#d61c24] transition-colors duration-300 shadow-md hover:shadow-lg text-sm xs:text-base">
                  Book Consultation Now
                </button>
              </a>
              
              {/* Trust Indicators */}
              <div className="mt-3 xs:mt-4 pt-3 xs:pt-4 border-t border-gray-200">
                <div className="flex flex-wrap justify-center gap-2 xs:gap-3 text-gray-600 text-xs xs:text-sm">
                  <span className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-green-500 rounded-full"></div>
                    No Hidden Charges
                  </span>
                  <span className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-green-500 rounded-full"></div>
                    Consultation
                  </span>
                  <span className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-green-500 rounded-full"></div>
                    Lifetime Support
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Banner */}
        <div className="relative z-10 mt-4 xs:mt-5 sm:mt-6 pt-3 xs:pt-4 border-t border-[#ec2028]/20">
          <p className="text-center text-gray-700 text-xs xs:text-sm font-medium px-2">
            Premium Hair Restoration | Unlimited Follicles | Transparent Pricing
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdvertisementBanner;