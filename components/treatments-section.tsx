"use client";
import { motion } from 'framer-motion';
import React, { useState, useRef, useEffect } from 'react';

const HairRestorationSolutions = () => {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Sample images for each section
  const sectionImages = [
    "oxgther.jpg",
    "cosm.jpg",
    "ban1.png",
    "repair-hair-transplant-bangalore.jpg",
  ];

  const sectionTitles = [
    "Oxygen Laser Therapy (LLLT/Photobiomodulation)",
    "Cosmetic Hair System (Non-Surgical)",
    "Mesotherapy (Targeted Scalp Nutrition)",
    "Hair Transplantation (FUE/FUT as indicated)",
    "Also Offered (as advised by your doctor)"
  ];

  const sectionDescriptions = [
    "Non-invasive laser treatment for hair restoration",
    "Custom cosmetic solutions for natural appearance",
    "Targeted nutrition for scalp health",
    "Surgical options for permanent results",
    "Comprehensive care for all hair needs"
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const containerTop = containerRef.current.getBoundingClientRect().top;
      const scrollPosition = window.scrollY - containerTop;
      
      // Calculate which section should be active based on scroll position
      const sectionHeights = sectionRefs.current.map(ref => ref?.offsetHeight || 0);
      let accumulatedHeight = 0;
      
      for (let i = 0; i < sectionHeights.length; i++) {
        accumulatedHeight += sectionHeights[i];
        if (scrollPosition < accumulatedHeight - window.innerHeight / 3) {
          setActiveSection(i);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="max-w-7xl mx-auto px-4 max-[470px]:py-4 max-[470px]:py-0 py-12">
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
          Discover Our Effective Hair Restoration Solutions
          
        </span>
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1 */}
        <div 
          ref={el => sectionRefs.current[0] = el}
          className={`p-0 rounded-xl shadow-lg transition-all duration-300 border overflow-hidden ${
            activeSection === 0 
              ? 'border-[#ec2028] shadow-xl transform -translate-y-1 bg-[#101828] text-white' 
              : 'border-gray-200 hover:shadow-md bg-[#101828] text-white'
          }`}
        >
          <div className="h-[300px] overflow-hidden">
            <img 
              src={sectionImages[0]} 
              alt={sectionTitles[0]}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <div className="flex items-start mb-4">
              <div className="bg-[#ec2028] text-white rounded-lg p-2 mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">
                Oxygen Laser Therapy (LLLT/Photobiomodulation)
              </h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-[#ec2028] mr-3 mt-1">•</span>
                <span>Helps calm dandruff & scalp inflammation</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#ec2028] mr-3 mt-1">•</span>
                <span>Reduces breakage, frizz and dryness</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#ec2028] mr-3 mt-1">•</span>
                <span>Supports hair-fall control across a few sessions</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#ec2028] mr-3 mt-1">•</span>
                <span>Comfortable, non-invasive, FDA-cleared technology</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Card 2 */}
        <div 
          ref={el => sectionRefs.current[1] = el}
          className={`p-0 rounded-xl shadow-lg transition-all duration-300 border overflow-hidden ${
            activeSection === 1 
              ? 'border-[#ec2028] shadow-xl transform -translate-y-1 bg-[#101828] text-white' 
              : 'border-gray-200 hover:shadow-md bg-[#101828] text-white'
          }`}
        >
          <div className="h-[300px] overflow-hidden">
            <img 
              src={sectionImages[1]} 
              alt={sectionTitles[1]}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <div className="flex items-start mb-4">
              <div className="bg-[#ec2028] text-white rounded-lg p-2 mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">
                Cosmetic Hair System (Non-Surgical)
              </h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-[#ec2028] mr-3 mt-1">•</span>
                <span>Natural appearance with precise colour & density match</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#ec2028] mr-3 mt-1">•</span>
                <span>Lightweight, breathable bases</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#ec2028] mr-3 mt-1">•</span>
                <span>Zero downtime and non-invasive</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#ec2028] mr-3 mt-1">•</span>
                <span>Highly customisable full-lace options</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Card 3 */}
        <div 
          ref={el => sectionRefs.current[2] = el}
          className={`p-0 rounded-xl shadow-lg transition-all duration-300 border overflow-hidden ${
            activeSection === 2 
              ? 'border-[#ec2028] shadow-xl transform -translate-y-1 bg-[#101828] text-white' 
              : 'border-gray-200 hover:shadow-md bg-[#101828] text-white'
          }`}
        >
          <div className="h-[300px] overflow-hidden">
            <img 
              src={sectionImages[2]} 
              alt={sectionTitles[2]}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <div className="flex items-start mb-4">
              <div className="bg-[#ec2028] text-white rounded-lg p-2 mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">
                Mesotherapy (Targeted Scalp Nutrition)
              </h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-[#ec2028] mr-3 mt-1">•</span>
                <span>Supports reduction in hair fall</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#ec2028] mr-3 mt-1">•</span>
                <span>Helps thicken miniaturised strands</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#ec2028] mr-3 mt-1">•</span>
                <span>Nourishes scalp environment for healthier follicles</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#ec2028] mr-3 mt-1">•</span>
                <span>Short sessions, minimal downtime</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Card 4 */}
        <div 
          ref={el => sectionRefs.current[3] = el}
          className={`p-0 rounded-xl shadow-lg transition-all duration-300 border overflow-hidden ${
            activeSection === 3 
              ? 'border-[#ec2028] shadow-xl transform -translate-y-1 bg-[#101828] text-white' 
              : 'border-gray-200 hover:shadow-md bg-[#101828] text-white'
          }`}
        >
          <div className="h-[300px] overflow-hidden">
            <img 
              src={sectionImages[3]} 
              alt={sectionTitles[3]}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <div className="flex items-start mb-4">
              <div className="bg-[#ec2028] text-white rounded-lg p-2 mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">
                Hair Transplantation (FUE/FUT as indicated)
              </h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-[#ec2028] mr-3 mt-1">•</span>
                <span>No visible linear scar with FUE</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#ec2028] mr-3 mt-1">•</span>
                <span>Advanced equipment & sterile OT infrastructure</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#ec2028] mr-3 mt-1">•</span>
                <span>Artistic hairline design by trained surgeons</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#ec2028] mr-3 mt-1">•</span>
                <span>Documented outcomes with long-term follow-ups</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Card 5 - Full width without image */}
      <div 
        ref={el => sectionRefs.current[4] = el}
        className={`mt-6 p-6 rounded-xl shadow-lg transition-all duration-300 border text-center ${
          activeSection === 4 
            ? 'border-[#ec2028] shadow-xl transform -translate-y-1 bg-[#101828] text-white' 
            : 'border-gray-200 hover:shadow-md bg-[#101828] text-white'
        }`}
      >
        <div className="flex items-center justify-center mb-4">
          <div className="bg-[#ec2028] text-white rounded-lg p-2 mr-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold">
            Also Offered (as advised by your doctor)
          </h3>
        </div>
        <p className="mb-4">
          Medical therapy (as indicated) • Dandruff & scalp care protocols
          Beard & eyebrow restoration • Post-transplant maintenance
        </p>
        <p className="text-gray-300 italic border-t pt-4 mx-auto max-w-2xl">
          Your plan is personalised after consultation. Benefits, risks, alternatives and timelines are explained clearly. Results vary by individual.
        </p>
      </div>
    </div>
  );
};

export default HairRestorationSolutions;