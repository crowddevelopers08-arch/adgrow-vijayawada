"use client";
import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

const ProcessTimeline = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
     <>
     <style jsx global>{`
      @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
      `}</style>
    <div className="py-6 md:py-8 px-4 bg-[#e2e2e2]" ref={sectionRef} style={{fontFamily: "'Outfit', sans-serif"}}>
      <div className="max-w-6xl mx-auto">
         <motion.h2 
          className="text-2xl sm:text-3xl max-[470px]:text-[22px] md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 text-gray-900 relative"
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
            How Your Journey Works
        
          </span>
        </motion.h2>
        
        {/* Desktop Timeline (horizontal) */}
        <div className="hidden md:block relative">
          {/* Main connecting line with animated progress */}
          <div className="absolute left-16 right-16 top-12 h-1 bg-gray-300 z-0">
            <div 
              className="h-full bg-[#ea2629] transition-all duration-1000 ease-out"
              style={{ width: inView ? '100%' : '0%' }}
            ></div>
          </div>
          
          <div className="grid grid-cols-4 gap-8 relative z-10">
            {[
              { 
                number: 1, 
                title: "Consultation & Scalp Scan", 
                desc: "History, trichoscopy, expectations", 
                icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" 
              },
              { 
                number: 2, 
                title: "Personalised Plan", 
                desc: "Medical/laser/meso or transplant; pricing & EMI explained", 
                icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" 
              },
              { 
                number: 3, 
                title: "Treatment Day", 
                desc: "Comfort-first protocols; photo documentation", 
                icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" 
              },
              { 
                number: 4, 
                title: "After-Care & Follow-Ups", 
                desc: "Home-care guidance and progress tracking", 
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" 
              }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white border-4 border-[#ea2629] flex items-center justify-center text-[#1e1e1e] text-xl md:text-2xl font-bold shadow-lg mb-4 relative">
                  <div className="absolute -top-1 -right-1 w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#ea2629] flex items-center justify-center text-white text-sm md:text-base">
                    {item.number}
                  </div>
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-[#ea2629]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d={item.icon} />
                  </svg>
                </div>
                <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg text-center min-h-[220px] flex flex-col justify-center">
                  <h3 className="text-lg md:text-xl font-bold text-[#1e1e1e] mb-2">{item.title}</h3>
                  <p className="text-sm md:text-base text-[#1e1e1e]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline (vertical) */}
        <div className="md:hidden relative">
          {/* Vertical connecting line */}
          <div className="absolute left-6 top-4 bottom-4 w-1 bg-gray-300 z-0">
            <div 
              className="w-full bg-[#ea2629] transition-all duration-1000 ease-out"
              style={{ height: inView ? '100%' : '0%' }}
            ></div>
          </div>
          
          <div className="space-y-8 relative z-10 pl-16">
            {[
              { 
                number: 1, 
                title: "Consultation & Scalp Scan", 
                desc: "History, trichoscopy, expectations", 
                icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" 
              },
              { 
                number: 2, 
                title: "Personalised Plan", 
                desc: "Medical/laser/PRP/meso or transplant; pricing & EMI explained", 
                icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" 
              },
              { 
                number: 3, 
                title: "Treatment Day", 
                desc: "Comfort-first protocols; photo documentation", 
                icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" 
              },
              { 
                number: 4, 
                title: "After-Care & Follow-Ups", 
                desc: "Home-care guidance and progress tracking", 
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" 
              }
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-white border-4 border-[#ea2629] flex items-center justify-center text-[#1e1e1e] font-bold shadow-lg relative -ml-16 flex-shrink-0">
                  <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#ea2629] flex items-center justify-center text-white text-xs">
                    {item.number}
                  </div>
                  <svg className="w-6 h-6 text-[#ea2629]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d={item.icon} />
                  </svg>
                </div>
                <div className="bg-white rounded-2xl p-4 shadow-lg ml-4 flex-1">
                  <h3 className="text-lg font-bold text-[#1e1e1e] mb-1">{item.title}</h3>
                  <p className="text-sm text-[#1e1e1e]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProcessTimeline;