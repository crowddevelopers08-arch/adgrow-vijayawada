// "use client";
// import { motion } from 'framer-motion';
// import React, { useEffect, useRef, useState } from 'react';

// const ProcessTimeline = () => {
//   const [inView, setInView] = useState(false);
//   const sectionRef = useRef<HTMLDivElement>(null);
  
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setInView(true);
//         }
//       },
//       { threshold: 0.3 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   return (
//     <>
//       <style jsx global>{`
//         @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
//       `}</style>
      
//       <div className="py-6 md:py-8 px-4 bg-[#e2e2e2]" ref={sectionRef} style={{fontFamily: "'Outfit', sans-serif"}}>
//         <div className="max-w-6xl mx-auto">
          
//           {/* Header: The Difference You Can Trust - Added here */}
//           <motion.div 
//             className="mb-10 md:mb-12 lg:mb-16"
//             initial={{ opacity: 0, y: -20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <motion.h1 
//               className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8 text-gray-900"
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.1 }}
//             >
//               The Difference You Can Trust
//             </motion.h1>
            
//             <div className="flex flex-wrap justify-center gap-3 md:gap-4">
//               {[
//                 "FDA-approved techniques trusted worldwide",
//                 "Percutaneous FUE with minimal scarring",
//                 "97% success rate across 5000+ clients",
//                 "Expert doctors and certified trichologists",
//                 "Resume your normal routine within 2–3 days"
//               ].map((text, index) => (
//                 <motion.div 
//                   key={index}
//                   className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200"
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.4, delay: 0.05 * index }}
//                 >
//                   <span className="text-sm md:text-base text-gray-800">{text}</span>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProcessTimeline;

import React from 'react';

export default function ClientSatisfaction() {
  return (
    <div className="bg-white py-2 px-4 sm:py-10 sm:px-6 lg:py-12 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-1 sm:mb-4 tracking-tight">
          The Difference You Can Trust
        </h1>
        
        {/* Subtitle */}
        <p className="text-center text-gray-600 text-sm sm:text-base md:text-lg max-w-3xl sm:max-w-4xl mx-auto mb-4 sm:mb-12 leading-relaxed px-2">
          Every procedure is performed with precision and care to ensure long-lasting, natural results you can feel confident about.
        </p>

        {/* Main Content Container */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-2 sm:gap-8 lg:gap-10 xl:gap-12 mb-8 sm:mb-10">
          {/* Left Column - Features */}
          <div className="flex flex-col gap-2 sm:gap-5 md:gap-6 w-full lg:w-1/3">
            {[
              "FDA-approved techniques trusted worldwide",
              "Percutaneous FUE with minimal scarring",
              "97% success rate across 5000+ clients",
              "Turnitin Plag Check"
            ].map((text, index) => (
              <div 
                key={index}
                className="bg-[#ec2028]/10 py-4 sm:py-5 px-6 sm:px-8 shadow-md transform skew-x-[-12deg] hover:scale-[1.02] transition-all duration-300 hover:shadow-lg"
              >
                <p className="text-gray-800 text-sm sm:text-base md:text-lg skew-x-[12deg]">
                  {text}
                </p>
              </div>
            ))}
          </div>

          {/* Center - Image with Decorative Elements */}
          <div className="relative my-4 sm:my-6 lg:my-0 w-full lg:w-1/3 flex justify-center items-center px-2">
            {/* Background decorative elements - hidden on smallest screens */}
            <div className="absolute inset-0 hidden sm:block">
              <div className="absolute -top-4 -left-4 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full border-2 border-[#ec2028]/20"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 rounded-full border-2 border-[#ec2028]/20"></div>
            </div>
            
            {/* Laptop mockup with woman */}
            <div className="relative z-10 w-full max-w-xs sm:max-w-sm md:max-w-md">
              <div className="relative">
                {/* Image container with responsive sizing */}
                <div className="bg-gradient-to-b from-blue-100 to-blue-50 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl aspect-[3/4] sm:aspect-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop" 
                    alt="Happy woman with laptop"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Features */}
          <div className="flex flex-col gap-2 sm:gap-5 md:gap-6 w-full lg:w-1/3">
            {[
              "Expert doctors and certified trichologists",
              "Resume your normal routine within 2–3 days",
              "Revisions",
              "High Attention To Requirements"
            ].map((text, index) => (
              <div 
                key={index}
                className="bg-[#ec2028]/10 py-4 sm:py-5 px-6 sm:px-8 shadow-md transform skew-x-[-12deg] hover:scale-[1.02] transition-all duration-300 hover:shadow-lg"
              >
                <p className="text-gray-800 text-sm sm:text-base md:text-lg skew-x-[12deg]">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-6 sm:mt-8">
          <a
            href="#form"
            className="flex items-center justify-center text-white font-medium py-3 px-6 sm:py-4 sm:px-8 rounded-full text-sm sm:text-base md:text-lg bg-[#ec2028] shadow-md transition-all duration-300 ease-out hover:scale-105 hover:shadow-[0_0_15px_#ec2028] focus:outline-none focus:ring-2 focus:ring-[#ec2028]/60 active:scale-95 w-full max-w-xs sm:max-w-none sm:w-auto"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span className="whitespace-nowrap font-semibold">
              Book&nbsp;Consultation Now
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}