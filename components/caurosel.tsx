import React from "react";
import { UserCheck, Activity, Droplet, Sparkles, Check, X, Award, Clock, Heart, ChevronRight } from "lucide-react";


const ComparisonSection: React.FC = () => {
  const comparisonData = [
    {
      feature: "Pricing Model",
      others: "Limited grafts with per-graft pricing",
      adgro: "Unlimited follicles, one flat price",
      othersIcon: <X className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-red-500" />,
      adgroIcon: <Check className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-green-500" />
    },
    {
      feature: "Procedure Method",
      others: "Painful and outdated methods",
      adgro: "Percutaneous FUE, minimal pain",
      othersIcon: <X className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-red-500" />,
      adgroIcon: <Check className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-green-500" />
    },
    {
      feature: "Recovery & Results",
      others: "Long recovery and visible scars",
      adgro: "Quick recovery, minimal scarring",
      othersIcon: <X className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-red-500" />,
      adgroIcon: <Check className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-green-500" />
    },
    {
      feature: "Aftercare Support",
      others: "No personalised aftercare",
      adgro: "Free 2-month hair care maintenance + scalp analysis",
      othersIcon: <X className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-red-500" />,
      adgroIcon: <Check className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-green-500" />
    }
  ];

  return (
    <div className="py-6 xs:py-8 sm:py-12 md:py-10 px-3 xs:px-4 sm:px-6">
      <div className="max-w-4xl md:max-w-5xl lg:max-w-6xl mx-auto">
        
        {/* Comparison Section */}
        <div className="mb-5 xs:mb-12 sm:mb-16 md:mb-5">
          {/* Header */}
          <div className="text-center mb-6 xs:mb-8 sm:mb-10 md:mb-5">
            <div className="inline-flex items-center justify-center mb-2 xs:mb-3 sm:mb-4">
              <Sparkles className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-[#ec2028] mr-1 xs:mr-2" />
              <span className="text-[#ec2028] font-semibold text-xs xs:text-sm uppercase tracking-wider">
                Why Choose Us
              </span>
            </div>
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-2 xs:mb-3 sm:mb-4">
              The Smarter Choice for
              <span className="block text-gray-900 mt-1 xs:mt-2">Lasting Hair Restoration</span>
            </h2>
            <p className="text-xs xs:text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-2 xs:px-4">
              Compare how we stand apart with our premium, patient-focused approach
            </p>
          </div>

          {/* Comparison Table */}
          <div className="bg-white rounded-lg xs:rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden border border-gray-200">
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-900">
              <div className="p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 border-r border-gray-300">
                <p className="text-xs xs:text-sm font-medium">Feature</p>
              </div>
              <div className="p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 border-r border-gray-300">
                <p className="text-xs xs:text-sm font-medium">Other Clinics</p>
              </div>
              <div className="p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 bg-gradient-to-r from-gray-50 to-gray-100">
                <div className="flex items-center justify-center xs:justify-start">
                  <Award className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 mr-1 xs:mr-2 text-[#ec2028]" />
                  <p className="text-xs xs:text-sm font-bold truncate">Adgro Vijayawada</p>
                </div>
              </div>
            </div>

            {/* Table Rows */}
            {comparisonData.map((item, index) => (
              <div 
                key={index}
                className={`grid grid-cols-3 ${
                  index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                } hover:bg-[#ec2028]/5 transition-colors duration-200`}
              >
                <div className="p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 border-r border-gray-200">
                  <p className="font-semibold text-gray-900 text-xs xs:text-sm md:text-base leading-tight">
                    {item.feature}
                  </p>
                </div>
                <div className="p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 border-r border-gray-200">
                  <div className="flex items-start space-x-1 xs:space-x-2 sm:space-x-3">
                    <div className="flex-shrink-0 mt-0.5">{item.othersIcon}</div>
                    <p className="text-gray-600 text-xs xs:text-sm md:text-base leading-relaxed">
                      {item.others}
                    </p>
                  </div>
                </div>
                <div className="p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 bg-gradient-to-r from-gray-50 to-gray-100">
                  <div className="flex items-start space-x-1 xs:space-x-2 sm:space-x-3">
                    <div className="flex-shrink-0 mt-0.5">{item.adgroIcon}</div>
                    <p className="text-gray-900 font-medium text-xs xs:text-sm md:text-base leading-relaxed">
                      {item.adgro}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};


export default ComparisonSection;