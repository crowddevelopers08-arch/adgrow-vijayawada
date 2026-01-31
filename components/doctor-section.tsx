"use client";
import { motion } from 'framer-motion';
import { useState, useRef, useEffect, SetStateAction } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BeforeAfterGallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const carouselIntervalRef = useRef(null);

  const beforeAfterGallery = [
    {
      before: "one.png",
      after: "two.png",
      age: "32",
      procedure: "FUE Hair Transplant"
    },
    {
      before: "four.png",
      after: "three.png",
      age: "28",
      procedure: "DHI Technique"
    },
    {
      before: "five.png",
      after: "six.png",
      age: "35",
      procedure: "Beard Transplant"
    },
    {
      before: "seven.png",
      after: "eight.png",
      age: "29",
      procedure: "Eyebrow Restoration"
    }
  ];

  // Set up auto-scroll interval
  useEffect(() => {
    if (autoPlay) {
      carouselIntervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % beforeAfterGallery.length);
      }, 4000);
    }
    
    return () => {
      if (carouselIntervalRef.current) {
        clearInterval(carouselIntervalRef.current);
      }
    };
  }, [autoPlay, beforeAfterGallery.length]);

  const nextSlide = () => {
    // Pause auto-play when user manually navigates
    setAutoPlay(false);
    if (carouselIntervalRef.current) {
      clearInterval(carouselIntervalRef.current);
    }
    
    setCurrentSlide((prev) => (prev + 1) % beforeAfterGallery.length);
    
    // Resume auto-play after a delay
    setTimeout(() => setAutoPlay(true), 5000);
  };

  const prevSlide = () => {
    // Pause auto-play when user manually navigates
    setAutoPlay(false);
    if (carouselIntervalRef.current) {
      clearInterval(carouselIntervalRef.current);
    }
    
    setCurrentSlide((prev) => (prev - 1 + beforeAfterGallery.length) % beforeAfterGallery.length);
    
    // Resume auto-play after a delay
    setTimeout(() => setAutoPlay(true), 5000);
  };

  const goToSlide = (index: SetStateAction<number>) => {
    // Pause auto-play when user manually navigates
    setAutoPlay(false);
    if (carouselIntervalRef.current) {
      clearInterval(carouselIntervalRef.current);
    }
    
    setCurrentSlide(index);
    
    // Resume auto-play after a delay
    setTimeout(() => setAutoPlay(true), 5000);
  };

  return (
    <section className="py-6 sm:py-8 md:py-10 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          className="text-center mb-6 md:mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-2xl max-[470px]:text-[22px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 sm:mb-4 md:mb-5 text-gray-900 relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              stiffness: 80,
              damping: 15
            }}
          >
            <span className="relative inline-block">
              Before & After Gallery
             
            </span>
          </motion.h2>
          
          <motion.p
            className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Witness the incredible transformation of our satisfied patients
          </motion.p>
        </motion.div>
        
        {/* Before-After Carousel */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-xl lg:shadow-2xl bg-white">
              <div className="relative">
                <div 
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {beforeAfterGallery.map((item, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                        {/* Before */}
                        <div className="relative group">
                          <img 
                            src={item.before}
                            alt={`Before - ${item.procedure}`}
                            className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                          <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white">
                            <span className="bg-black/70 px-2 py-1 rounded text-xs sm:text-sm">Before</span>
                          </div>
                        </div>
                        
                        {/* After */}
                        <div className="relative group">
                          <img 
                            src={item.after}
                            alt={`After - ${item.procedure}`}
                            className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                          <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white">
                            <span className="bg-black/70 px-2 py-1 rounded text-xs sm:text-sm">After</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Navigation buttons */}
                <button
                  onClick={prevSlide}
                  className="absolute left-2 sm:left-3 md:left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/90 hover:bg-white rounded-full shadow-lg md:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-700 group-hover:text-red-600 transition-colors" />
                </button>
                
                <button
                  onClick={nextSlide}
                  className="absolute right-2 sm:right-3 md:right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/90 hover:bg-white rounded-full shadow-lg md:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-700 group-hover:text-red-600 transition-colors" />
                </button>
              </div>
              
              {/* Dots indicator */}
              <div className="flex justify-center space-x-2 sm:space-x-3 p-4 sm:p-5 md:p-6 bg-gray-50">
                {beforeAfterGallery.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                      currentSlide === index 
                        ? 'bg-red-600 scale-125' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfterGallery;