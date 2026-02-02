"use client";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState, useEffect } from "react";

const HairClinicHero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Array of images for the carousel
  const images = [
    "bannew.jpeg",
    "/new1.jpg",
    "hairrrrr.jpg",
    "new2.webp",
  ];

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="relative text-black overflow-hidden flex items-center min-h-[80vh]">
      {/* Background Image with fixed position */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url('vijban.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed'
          }}
        />
        
        {/* Gradient Overlay for better readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent"></div>
        
        {/* Dark overlay at edges for contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, rgba(0,0,0,0.2) 1px, transparent 0)",
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 py-8 md:py-12 lg:py-16 mt-10 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 xl:gap-20">
          {/* Text Content - Enhanced visibility */}
          <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 md:p-8 lg:p-10 shadow-2xl border border-white/20">
              <h1 className="text-3xl xs:text-4xl max-[470px]:text-[25px] sm:text-4xl md:text-5xl lg:text-5xl xl:text-4xl font-bold mb-4 md:mb-6 leading-tight text-gray-900">
                Hair Loss Ends Here -{" "}
                <span className="text-[#ec2028] bg-gradient-to-r from-[#ec2028] to-[#ff6b6b] bg-clip-text text-transparent">
                  Flat ₹99,999 Unlimited
                </span>{" "}
                Follicles with 97% Success Rate
              </h1>

              <p className="text-base sm:text-lg md:text-xl lg:text-lg max-[470px]:text-[16px] xl:text-lg mb-6 md:mb-8 text-gray-800 font-medium bg-gradient-to-r from-gray-50 to-white py-3 px-4 rounded-xl shadow-sm border border-gray-100">
                Get a personalised consultation, scalp analysis & clear treatment plan.
              </p>
              
              {/* Rating Badge */}
<div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-4 bg-gradient-to-r from-white to-gray-50 px-4 sm:px-6 py-3 rounded-full shadow-lg mb-8 backdrop-blur-sm border border-gray-200/50 text-center">

  {/* Rating */}
  <div className="flex items-center gap-2">
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400"
        />
      ))}
    </div>
    <span className="font-bold text-gray-900 text-sm sm:text-base">
      4.7/5 <span className="font-normal text-gray-600">Google Rated</span>
    </span>
  </div>

  {/* Divider – hidden on mobile */}
  <div className="hidden sm:block h-6 w-px bg-gray-300"></div>

  {/* Feature */}
  <span className="text-gray-700 font-medium text-sm sm:text-base">
    Natural Looking Results
  </span>

  {/* Divider – hidden on mobile */}
  <div className="hidden sm:block h-6 w-px bg-gray-300"></div>

  {/* Feature */}
  <span className="text-gray-700 font-medium text-sm sm:text-base">
    FDA Approved
  </span>
</div>

              
              {/* CTA Button */}
              <div className="flex justify-center lg:justify-start">
                <div className="relative group max-w-md">
                  <a
                    href="#form"
                    className="relative flex items-center justify-center bg-gradient-to-r from-[#ec2028] via-[#ff4757] to-[#ec2028] text-white font-bold py-4 px-8 rounded-full overflow-hidden transition-all duration-300 ease-out transform group-hover:scale-105 hover:shadow-2xl hover:shadow-red-300/50 text-lg md:text-xl"
                  >
                    {/* Animated background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#ff4757] via-[#ec2028] to-[#ff4757] bg-[length:200%_100%] animate-gradient-x"></div>
                    
                    {/* Shine effect */}
                    <div className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg] group-hover:left-[150%] transition-all duration-1000"></div>
                    
                    <div className="relative flex items-center z-10">
                      <svg
                        className="w-5 h-5 md:w-6 md:h-6 mr-3"
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
                      <span className="whitespace-nowrap font-semibold">Book Free Consultation Now</span>
                    </div>
                  </a>

                  {/* Glow Effect */}
                  <div className="absolute -inset-3 bg-gradient-to-r from-[#ec2028]/30 to-[#ff6b6b]/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500 opacity-70 -z-10"></div>
                  
                  {/* Floating ring */}
                  <div className="absolute -inset-4 rounded-full border-4 border-[#ec2028]/20 group-hover:border-[#ec2028]/30 transition-all duration-1000 animate-pulse-slow -z-20"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Image Carousel Section */}
          <div className="w-full lg:w-1/2 flex justify-center px-4">
            <div className="relative w-full max-w-lg">
              {/* Main Image Card with 3D effect */}
              <div className="relative rounded-3xl overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] transform transition-all duration-700 group hover:shadow-[0_35px_60px_-15px_rgba(236,32,40,0.3)]">
                <div className="aspect-[3/3] w-full">
                  <img
                    src={images[currentImageIndex]}
                    alt="Hair treatment at Adgro Hair Clinic"
                    className="w-full h-full object-cover transition-all duration-1000 ease-in-out group-hover:scale-110"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>
                
                {/* Image counter */}
                <div className="absolute top-6 right-6 bg-black/80 text-white px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm border border-white/20">
                  <span className="text-[#ec2028] font-bold">{currentImageIndex + 1}</span> / {images.length}
                </div>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-md w-12 h-12 rounded-full flex items-center justify-center shadow-2xl hover:bg-white hover:scale-110 hover:shadow-3xl transition-all duration-300 z-20 border border-gray-200"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-7 h-7 text-gray-800" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-md w-12 h-12 rounded-full flex items-center justify-center shadow-2xl hover:bg-white hover:scale-110 hover:shadow-3xl transition-all duration-300 z-20 border border-gray-200"
                aria-label="Next image"
              >
                <ChevronRight className="w-7 h-7 text-gray-800" />
              </button>

              {/* Image Indicators/Dots */}
              <div className="flex justify-center mt-8 space-x-3">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`transition-all duration-300 ${
                      index === currentImageIndex 
                        ? 'bg-gradient-to-r from-[#ec2028] to-[#ff6b6b] w-10 h-2 rounded-full shadow-lg' 
                        : 'bg-gray-300 hover:bg-gray-400 w-2 h-2 rounded-full hover:scale-125'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>

              {/* Floating decorative elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-[#ec2028]/20 to-transparent rounded-full mix-blend-multiply animate-pulse-slow z-0 blur-sm"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-tr from-gray-400/20 to-transparent rounded-full mix-blend-multiply animate-pulse-slow delay-1000 z-0 blur-sm"></div>
              
              <div className="absolute top-10 -right-10 w-10 h-10 bg-white/20 rounded-full animate-float-slow hidden lg:block backdrop-blur-sm"></div>
              <div className="absolute bottom-10 -left-10 w-8 h-8 bg-[#ec2028]/20 rounded-full animate-float-slower hidden lg:block backdrop-blur-sm"></div>
            </div>
          </div>
        </div>
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
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-10px) rotate(5deg);
          }
          66% {
            transform: translateY(5px) rotate(-5deg);
          }
        }
        .animate-float-slow {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-slower {
          animation: float 12s ease-in-out infinite;
        }
        
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
          background-size: 200% 200%;
        }
        
        /* Smooth image transition */
        img {
          animation: fadeIn 1s ease-in-out;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0.7;
            transform: scale(1.05);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
};

export default HairClinicHero; 