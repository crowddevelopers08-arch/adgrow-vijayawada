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
                className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-lg transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-[#ec2028]/10 flex items-center justify-center mr-3">
                    <span className="text-sm font-bold text-[#ec2028]">
                      {stage.stage.split(" ")[1]}
                    </span>
                  </div>
                  <h3 className="font-bold text-black">{stage.title}</h3>
                </div>

                <p className="text-sm text-gray-600 ml-11 mb-3">
                  {stage.description}
                </p>

                <div className="flex items-center text-sm text-gray-700 mb-2">
                  <CheckCircle className="w-4 h-4 text-[#ec2028] mr-2" />
                  <span className="font-medium">Effective Treatments</span>
                </div>

                <div className="flex flex-wrap gap-2 ml-6">
                  {stage.treatments.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 text-xs rounded-full border"
                    >
                      {t}
                    </span>
                  ))}
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
    </section>
  );
};

export default NorwoodScaleSection;
