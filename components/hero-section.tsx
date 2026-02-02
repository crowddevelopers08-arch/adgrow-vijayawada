"use client";
import { Star } from "lucide-react";
import React from "react";

const HairClinicHero = () => {
  return (
    <section className="relative bg-white text-black overflow-hidden flex items-center pt-16 md:pt-20 lg:pt-24 xl:pt-28 2xl:pt-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black opacity-5 sm:opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-4 md:py-8 lg:py-10 xl:py-12 mb-3 md:mb-4 lg:mb-5 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-0 sm:gap-0 md:gap-10 lg:gap-12 xl:gap-16 2xl:gap-20">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col px-4 sm:px-6 md:px-8 lg:pl-8 xl:pl-12 2xl:pl-16 justify-center">
            {/* Main Heading - Responsive font sizes */}
            <h1 className="text-2xl xs:text-2.5xl sm:text-3xl md:text-4xl lg:text-4.5xl xl:text-5xl 2xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-5 lg:mb-6 leading-snug sm:leading-tight md:leading-tight lg:leading-tight">
              Hair Loss Ends Here -{" "}
              <span className="text-[#ec2028] block sm:inline">
                Flat ₹99,999 Unlimited
              </span>{" "}
              Follicles with 97% Success Rate
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl mb-4 sm:mb-5 md:mb-6 lg:mb-7 text-gray-800 font-medium">
              Get a personalised consultation, scalp analysis & clear treatment
              plan.
            </p>
            
            {/* Rating Badge - Responsive layout */}
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-2 sm:gap-3 bg-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-md mb-5 sm:mb-6 md:mb-7 max-w-full">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold text-gray-800 text-sm sm:text-base">
                  4.7/5 Google Rated
                </span>
              </div>
              <span className="text-gray-300 hidden xs:inline">|</span>
              <span className="text-gray-700 text-sm sm:text-base whitespace-nowrap">
                Natural Looking Results
              </span>
              <span className="text-gray-300 hidden sm:inline">|</span>
              <span className="text-gray-700 text-sm sm:text-base whitespace-nowrap">
                FDA Approved
              </span>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <div className="relative group">
                <a
                  href="#form"
                  className="relative flex items-center justify-center bg-transparent border-1 border-[#ec2028] text-black font-bold py-2.5 sm:py-3 px-4 sm:px-6 rounded-full overflow-hidden transition-all duration-300 ease-out transform group-hover:scale-105 hover:border-black text-sm sm:text-base hover:text-white min-w-[200px] sm:min-w-[240px]"
                >
                  <div className="absolute inset-0 bg-[#ec2028] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></div>
                  <div className="relative flex items-center z-10">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="whitespace-nowrap">Book Consultation Now</span>
                  </div>

                  {/* Enhanced Ring Effect */}
                  <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-red-300/80 group-hover:opacity-100 transition-all duration-500 ease-out opacity-0"></div>
                </a>

                {/* Enhanced Glow Effect */}
                <div className="absolute -inset-2 bg-red-500/20 rounded-full blur-md group-hover:opacity-75 transition-all duration-500 ease-out opacity-0 -z-10"></div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center mt-6 sm:mt-8 lg:mt-0">
            <div className="relative">
              {/* Responsive image container */}
              <div className="w-88 h-68 max-sm:mb-4 xs:w-56 xs:h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 2xl:w-[28rem] 2xl:h-[28rem] rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-700 hover:scale-105">
                <img
                  src="bannew.jpeg"
                  alt="Hair treatment at Adgro Hair Clinic"
                  className="w-full h-full object-cover transition-all duration-500 hover:opacity-100"
                  loading="lazy"
                />
              </div>

              {/* Decorative elements - Responsive positioning */}
              <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#ec2028] rounded-full mix-blend-screen opacity-30 animate-pulse-slow"></div>
              <div className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-gray-400 rounded-full mix-blend-multiply opacity-40 animate-pulse-slow delay-1000"></div>

              {/* Floating elements - Show on medium screens and above */}
              <div className="absolute -top-1 -right-2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-white/10 rounded-full animate-float-slow hidden sm:block"></div>
              <div className="absolute -bottom-2 -right-3 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-[#ec2028]/30 rounded-full animate-float-slower hidden sm:block"></div>
              <div className="absolute top-6 -left-2 sm:top-8 sm:-left-3 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-white/20 rounded-full animate-float-slowest hidden sm:block"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-12 sm:h-16 md:h-20 lg:h-24 xl:h-28 text-gray-900"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,74.7C1120,75,1280,53,1360,42.7L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </svg>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes ping-slow {
          0% {
            transform: scale(0.95);
            opacity: 0.8;
          }
          75%,
          100% {
            transform: scale(1.1);
            opacity: 0;
          }
        }
        .animate-pulse-slow {
          animation: ping-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-6px);
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
        
        /* Custom text size for extra small screens */
        @media (max-width: 360px) {
          .text-2\.5xl {
            font-size: 1.5rem;
            line-height: 2rem;
          }
        }
        
        @media (min-width: 640px) {
          .text-4\.5xl {
            font-size: 2.5rem;
            line-height: 2.75rem;
          }
        }
        
        @media (min-width: 768px) {
          .text-4\.5xl {
            font-size: 2.75rem;
            line-height: 3rem;
          }
        }
      `}</style>
    </section>
  );
};

export default HairClinicHero;