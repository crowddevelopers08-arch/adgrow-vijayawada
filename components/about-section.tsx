"use client";
import React from 'react';
import { motion } from "framer-motion";

const AdgroServices = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 max-[470px]:py-6 md:py-12">
       <motion.h2
      className="text-2xl max-[470px]:text-[22px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12 text-[#101828] relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        type: "spring",
        stiffness: 80,
        damping: 15,
      }}
    >
      <span className="relative inline-block">
        Why Choose Adgro (Vijayawada)
       
      </span>
    </motion.h2>
      
      
      <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
        {/* Left Column - Image */}
        <div className="lg:w-1/3 flex items-center justify-center my-6 md:my-8 lg:my-0 order-2 lg:order-1">
          <div className="relative w-full max-w-md">
            {/* Decorative background elements */}
            <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4 w-20 h-20 md:w-24 md:h-24 bg-[#ec2028]/10 rounded-full opacity-70"></div>
            <div className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 w-16 h-16 md:w-20 md:h-20 bg-[#101828]/10 rounded-full opacity-70"></div>
            <div className="absolute top-1/2 -right-4 md:-right-6 w-14 h-14 md:w-16 md:h-16 bg-[#ec2028]/10 rounded-full opacity-70"></div>
            
            {/* Main image container */}
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border-4 border-white">
              <img 
                src="vijdoc.jpg" 
                alt="Healthcare professional performing scalp analysis"
                className="w-full h-72 md:h-80 lg:h-[500px] max-[470px]:h-[400px] object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                
              </div>
            </div>
            
          
          </div>
        </div>
        
        {/* Right Column - All Cards */}
        <div className="lg:w-2/3 space-y-6 md:space-y-8 order-1 lg:order-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* First Column of Cards */}
            <div className="space-y-6 md:space-y-8">
              <div className="bg-white p-5 md:p-6 rounded-lg shadow-md border-l-4 border-[#ec2028]">
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-[#101828]">
                  Comprehensive Diagnosis
                </h3>
                <p className="text-sm md:text-base text-gray-600">
                  We treat the cause, not just the symptoms. Detailed scalp scan, history, and labs when needed.
                </p>
              </div>
              
              <div className="bg-white p-5 md:p-6 rounded-lg shadow-md border-l-4 border-[#ec2028]">
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-[#101828]">
                  Personalized Treatment Plans
                </h3>
                <p className="text-sm md:text-base text-gray-600">
                  Custom plans for men & women. From early thinning to advanced baldness.
                </p>
              </div>
              
              <div className="bg-white p-5 md:p-6 rounded-lg shadow-md border-l-4 border-[#ec2028]">
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-[#101828]">
                  Natural-Looking Results
                </h3>
                <p className="text-sm md:text-base text-gray-600">
                  Hairline design that suits face, age, and hair characteristics.
                </p>
              </div>
            </div>
            
            {/* Second Column of Cards */}
            <div className="space-y-6 md:space-y-8">
              <div className="bg-white p-5 md:p-6 rounded-lg shadow-md border-l-4 border-[#ec2028]">
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-[#101828]">
                  Comfort-First Approach
                </h3>
                <p className="text-sm md:text-base text-gray-600">
                  Gentle techniques, clear prep and recovery guidance.
                </p>
              </div>
              
              <div className="bg-white p-5 md:p-6 rounded-lg shadow-md border-l-4 border-[#ec2028]">
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-[#101828]">
                  Easy to Start
                </h3>
                <p className="text-sm md:text-base text-gray-600">
                  Straightforward pricing with no-cost EMIs on eligible packages.
                </p>
              </div>
              
              <div className="bg-white p-5 md:p-6 rounded-lg shadow-md border-l-4 border-[#ec2028]">
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-[#101828]">
                  Convenient Location
                </h3>
                <p className="text-sm md:text-base text-gray-600">
                  Easy to reach. Minutes from Benz Circle, Labbipet, Governorpet, Moghalrajpuram & more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdgroServices;