"use client";
import React from 'react';

const HairClinicHero = () => {
  return (
    <section className="relative bg-gradient-to-r from-black to-gray-900 text-white overflow-hidden min-h-screen flex items-center pt-16 md:pt-20 lg:pt-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-4 py-4 md:py-8 lg:py-10 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 xl:gap-16">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col pl-[50px] max-[500px]:pl-[0px] justify-center">
            <h1 className="text-4xl xs:text-4xl max-[470px]:pt-[20px] max-[470px]:text-[23px] sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              Hair Treatment Clinic in <span className="text-[#ec2028]">Vijayawada</span> at Affordable Cost
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl lg:text-xl max-[470px]:text-[15px] xl:text-2xl mb-4 md:mb-6 text-gray-200 font-medium">
              Experience the Ultimate Hair Transformation at Vijayawada's Trusted Aesthetic Clinic
            </p>
            
            <p className="text-base sm:text-lg md:text-xl max-[470px]:text-[15px] lg:text-base xl:text-lg mb-6 md:mb-8 text-gray-300">
              <span className="text-[#ec2028] font-semibold">Adgro Hair Clinic</span> — Personalised, dermatologist-guided hair treatments with modern tech, transparent pricing, and caring follow-ups.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {/* Enhanced Call Button */}
              <div className="relative group">
                <a 
                  href="tel:+919689056789" 
                  className="relative flex items-center justify-center bg-gradient-to-r from-[#ec2028] to-red-700 text-white font-bold py-3 px-4 sm:px-6 rounded-full overflow-hidden transition-all duration-300 ease-out transform group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-red-500/30 text-sm sm:text-base"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-[#ec2028] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></div>
                  <div className="relative flex items-center z-10">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                    </svg>
                    <span className="whitespace-nowrap">Call / WhatsApp: +91 96890 56789</span>
                  </div>
                  
                  {/* Enhanced Ring Effect */}
                  <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-red-300/80 group-hover:opacity-100 transition-all duration-500 ease-out opacity-0"></div>
                </a>
                
                {/* Enhanced Glow Effect */}
                <div className="absolute -inset-2 bg-red-500/30 rounded-full blur-md group-hover:opacity-75 transition-all duration-500 ease-out opacity-0 -z-10"></div>
              </div>
              
              {/* Enhanced Consultation Button */}
              <div className="relative group">
                <a 
                  href="#form" 
                  className="relative flex items-center justify-center bg-transparent border-2 border-[#ec2028] text-white font-bold py-3 px-4 sm:px-6 rounded-full overflow-hidden transition-all duration-300 ease-out transform group-hover:scale-105 group-hover:bg-[#ec2028] group-hover:shadow-lg group-hover:shadow-red-500/20 text-sm sm:text-base"
                >
                  <div className="absolute inset-0 bg-[#ec2028] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></div>
                  <div className="relative flex items-center z-10">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
                    </svg>
                    <span className="whitespace-nowrap">Book Consultation</span>
                  </div>
                  
                  {/* Enhanced Ring Effect */}
                  <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-red-300/80 group-hover:opacity-100 transition-all duration-500 ease-out opacity-0"></div>
                </a>
                
                {/* Enhanced Glow Effect */}
                <div className="absolute -inset-2 bg-red-500/20 rounded-full blur-md group-hover:opacity-75 transition-all duration-500 ease-out opacity-0 -z-10"></div>
              </div>
            </div>
          </div>
          
          {/* Image Section - Updated to rectangular with border radius */}
          <div className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0">
            <div className="relative">
              <div className="w-64 h-64 xs:w-72 xs:h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[26rem] lg:h-[26rem] xl:w-[30rem] xl:h-[30rem] rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-700 hover:scale-105">
                <img 
                  src="bannew.jpeg" 
                  alt="Hair treatment at Adgro Hair Clinic" 
                  className="w-full h-full object-cover mix-blend-overlay opacity-90 transition-all duration-500 hover:opacity-100 hover:mix-blend-normal"
                />
              </div>
              
              {/* Animated Decorative elements */}
              <div className="absolute -top-2 -right-2 w-12 h-12 sm:w-16 sm:h-16 bg-[#ec2028] rounded-full mix-blend-screen opacity-30 animate-pulse-slow"></div>
              <div className="absolute -bottom-2 -left-2 w-10 h-10 sm:w-12 sm:h-12 bg-gray-400 rounded-full mix-blend-multiply opacity-40 animate-pulse-slow delay-1000"></div>
              
              {/* Floating elements */}
              <div className="absolute -top-1 -right-4 w-8 h-8 bg-white/10 rounded-full animate-float-slow hidden sm:block"></div>
              <div className="absolute -bottom-4 -right-5 w-6 h-6 bg-[#ec2028]/30 rounded-full animate-float-slower hidden sm:block"></div>
              <div className="absolute top-8 -left-4 w-5 h-5 bg-white/20 rounded-full animate-float-slowest hidden sm:block"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full hidden sm:block">
        <svg viewBox="0 0 1440 120" className="w-full h-16 md:h-20 text-gray-900" preserveAspectRatio="none">
          <path fill="currentColor" d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,74.7C1120,75,1280,53,1360,42.7L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes ping-slow {
          0% {
            transform: scale(0.95);
            opacity: 0.8;
          }
          75%, 100% {
            transform: scale(1.1);
            opacity: 0;
          }
        }
        .animate-pulse-slow {
          animation: ping-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes ping-slowest {
          0% {
            transform: scale(0.98);
            opacity: 0.6;
          }
          75%, 100% {
            transform: scale(1.05);
            opacity: 0;
          }
        }
        .animate-ping-slowest {
          animation: ping-slowest 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        .animate-float-slow {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-slower {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-slowest {
          animation: float 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HairClinicHero;