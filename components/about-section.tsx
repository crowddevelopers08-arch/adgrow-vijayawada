"use client";

import { motion } from "framer-motion";
import { ChevronRight, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";

const NorwoodScaleSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // ✅ Images (make sure these exist in /public)
  const norwoodImages = [
    { id: 1, src: "/adgro-img1.jpg" },
    { id: 2, src: "/adgro-img2.jpg" },
    { id: 3, src: "/adgro-img.jpg" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % norwoodImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [norwoodImages.length]);

  const norwoodStages = [
    {
      stage: "Stage 1",
      title: "Early Thinning",
      description: "Minor recession of hairline",
      treatments: ["Medication", "PRP Therapy"],
    },
    {
      stage: "Stage 2",
      title: "Temple Recession",
      description: "Noticeable M-shape forming",
      treatments: ["Laser Therapy", "Medicated Solutions"],
    },
    {
      stage: "Stage 3",
      title: "Moderate Baldness",
      description: "Deep frontal recession",
      treatments: ["FUE Transplant", "Advanced PRP"],
    },
    {
      stage: "Stage 4",
      title: "Advanced Recession",
      description: "Significant hair loss on crown",
      treatments: ["High Graft Transplant", "Combination Therapy"],
    },
  ];

  return (
    <section className="py-4 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center max-sm:mb-2 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4">
            Which Stage Are You At?
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            From early thinning to advanced baldness, our surgeons cover every
            stage with proven solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* LEFT: Image carousel */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200 shadow-lg">
              {/* Main Image */}
              <div className="aspect-[4/3.4] relative rounded-xl overflow-hidden bg-gray-200">
                <motion.img
                  key={currentImage}
                  src={norwoodImages[currentImage].src}
                  alt={`Norwood Stage ${norwoodImages[currentImage].id}`}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Stages */}
          <motion.div
            className="grid sm:grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {norwoodStages.map((stage, index) => (
              <motion.div
                key={index}
                className="bg-white backdrop-blur-sm border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-2xl hover:border-[#ec2028]/40 hover:bg-[#ec2028]/5 transition-all duration-300 group relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                {/* Decorative circles at both ends - Visible by default */}
                <div className="absolute -top-2 -right-2 w-10 h-10 bg-[#ec2028] opacity-30 rounded-full mix-blend-screen animate-pulse-slow"></div>
                <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-gray-400 opacity-40 rounded-full mix-blend-multiply animate-pulse-slow delay-1000"></div>
                
                {/* Floating decorative elements */}
                <div className="absolute -top-1 -right-4 w-6 h-6 bg-white/20 rounded-full animate-float-slow"></div>
                <div className="absolute -bottom-4 -right-5 w-4 h-4 bg-[#ec2028]/40 rounded-full animate-float-slower"></div>
                <div className="absolute top-8 -left-4 w-5 h-5 bg-white/30 rounded-full animate-float-slowest"></div>

                <div className="relative z-10">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 rounded-full bg-[#ec2028]/10 flex items-center justify-center mr-3 group-hover:bg-[#ec2028]/20 transition-colors duration-300">
                      <span className="text-sm font-bold text-[#ec2028] group-hover:text-[#d61c24] transition-colors duration-300">
                        {stage.stage.split(" ")[1]}
                      </span>
                    </div>
                    <h3 className="font-bold text-black group-hover:text-[#ec2028] transition-colors duration-300">
                      {stage.title}
                    </h3>
                  </div>

                  <p className="text-sm text-gray-600 ml-11 mb-3 group-hover:text-gray-800 transition-colors duration-300">
                    {stage.description}
                  </p>

                  <div className="flex items-center text-sm text-gray-700 mb-2">
                    <CheckCircle className="w-4 h-4 text-[#ec2028] mr-2" />
                    <span className="font-medium group-hover:text-[#ec2028] transition-colors duration-300">
                      Effective Treatments
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 ml-6">
                    {stage.treatments.map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 text-xs rounded-full border border-gray-300 group-hover:border-[#ec2028]/30 group-hover:bg-[#ec2028]/10 transition-all duration-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-10">
          <a
            href="#form"
            className={`hidden sm:flex items-center text-white font-medium py-4 px-6 rounded-full text-sm sm:text-lg
                            bg-[#ec2028] shadow-md transition-all duration-300 ease-out
                            hover:scale-105 hover:shadow-[0_0_15px_#ec2028]
                            focus:outline-none focus:ring-2 focus:ring-[#ec2028]/60`}
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
      `}</style>
    </section>
  );
};

export default NorwoodScaleSection;