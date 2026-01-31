import React from "react";
import { CheckCircle } from "lucide-react";

const TrustHighlights: React.FC = () => {
  const points = [
    "Dermatologist-led team",
    "Root-cause diagnosis & trichoscopy",
    "Combination therapy for better outcomes",
    "Transparent quotes & no-cost EMI options",
    "Sterile procedures & documented after-care",
    "Centrally located on Tikkle Road, Acharya Ranga Nagar",
  ];

  return (
    <div className="bg-[#101828] text-white rounded-2xl shadow-lg max-w-6xl mx-auto px-6 sm:px-8 py-5 max-[470px]:py-5 max-[470px]:mt-5 pr-[0px] mt-10">
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Left Side Content */}
        <div className="flex-1">
          <h2 className="text-2xl max-[470px]:text-[22px] md:text-3xl font-bold mb-6 text-center md:text-left">
            Trust Highlights
          </h2>
          <ul className="space-y-4">
            {points.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="text-[#ec2028] w-6 h-6 flex-shrink-0" />
                <span className="text-base md:text-lg leading-relaxed">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="ban2.jpg"
            alt="Trust Highlights"
            className="rounded-2xl shadow-md object-cover w-full max-w-xs sm:max-w-sm md:max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

export default TrustHighlights;
