import React from "react";
import { UserCheck, Activity, Droplet, Sparkles, Check, X, Award, Clock, Heart, ChevronRight } from "lucide-react";

const CandidateSection: React.FC = () => {
  const candidates = [
    {
      icon: <UserCheck className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#ec2028]" />,
      title: "Early to moderate thinning",
      desc: "Seeking non-surgical options",
    },
    {
      icon: <Activity className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#ec2028]" />,
      title: "Advanced baldness",
      desc: "Considering transplant with realistic goals",
    },
    {
      icon: <Droplet className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#ec2028]" />,
      title: "Dandruff / itch / oiliness",
      desc: "Impacting hair quality",
    },
    {
      icon: <Sparkles className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#ec2028]" />,
      title: "Quick coverage",
      desc: "Needed with cosmetic systems",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-gray-50 to-gray-100 text-gray-900 rounded-lg xs:rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl max-w-4xl md:max-w-5xl lg:max-w-6xl mx-auto px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 py-6 xs:py-8 sm:py-10 md:py-12 mt-6 xs:mt-8 sm:mt-10 md:mt-12 border border-[#ec2028]/20">
      <div className="text-center mb-5 xs:mb-6 sm:mb-8 md:mb-10">
        <div className="inline-flex items-center justify-center mb-2 xs:mb-3 sm:mb-4">
          <Sparkles className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-[#ec2028] mr-1 xs:mr-2" />
          <span className="text-[#ec2028] font-semibold text-xs xs:text-sm uppercase tracking-wider">
            Ideal Candidates
          </span>
        </div>
        <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-center mb-2 xs:mb-3 sm:mb-4">
          Who's a <span className="text-[#ec2028]">Good Candidate</span>?
        </h2>
        <p className="text-xs xs:text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-2">
          Discover if our advanced hair restoration solutions are right for you
        </p>
      </div>
      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 xs:gap-4 sm:gap-6">
        {candidates.map((item, index) => (
          <div
            key={index}
            className="bg-white backdrop-blur-sm border border-gray-200 rounded-lg xs:rounded-xl sm:rounded-2xl p-3 xs:p-4 sm:p-5 md:p-6 flex flex-col items-start hover:shadow-xl sm:hover:shadow-2xl hover:border-[#ec2028]/40 hover:bg-[#ec2028]/5 transition-all duration-300 group"
          >
            <div className="mb-2 xs:mb-3 sm:mb-4 p-2 xs:p-3 bg-[#ec2028]/10 rounded-lg xs:rounded-xl group-hover:bg-[#ec2028]/20 transition-colors duration-300">
              {item.icon}
            </div>
            <h3 className="text-sm xs:text-base sm:text-lg font-semibold mb-1 xs:mb-2 group-hover:text-[#ec2028] transition-colors duration-300 leading-tight">
              {item.title}
            </h3>
            <p className="text-xs xs:text-sm text-gray-600 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

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
    <div className="py-6 xs:py-8 sm:py-12 md:py-16 px-3 xs:px-4 sm:px-6">
      <div className="max-w-4xl md:max-w-5xl lg:max-w-6xl mx-auto">
        
        {/* Comparison Section */}
        <div className="mb-10 xs:mb-12 sm:mb-16 md:mb-20">
          {/* Header */}
          <div className="text-center mb-6 xs:mb-8 sm:mb-10 md:mb-12">
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
                  <p className="text-xs xs:text-sm font-bold truncate">Premium Hair Clinic</p>
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

        {/* CTA Section */}
        <div className="relative">
          {/* Background Decoration */}
          <div className="absolute bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg xs:rounded-xl sm:rounded-2xl lg:rounded-3xl transform rotate-1"></div>
          
          <div className="relative bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg xs:rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden border border-[#ec2028]/20">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-24 h-24 xs:w-32 xs:h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-[#ec2028]/10 rounded-full blur-xl xs:blur-2xl sm:blur-3xl opacity-20 sm:opacity-30"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 xs:w-32 xs:h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-[#ec2028]/10 rounded-full blur-xl xs:blur-2xl sm:blur-3xl opacity-10 sm:opacity-20"></div>
            
            <div className="relative px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-6 xs:py-8 sm:py-10 md:py-12 lg:py-16 text-center">
              {/* Limited Offer Badge */}
              <div className="inline-flex items-center justify-center bg-[#ec2028] text-white px-2 xs:px-3 sm:px-4 py-1 xs:py-1.5 sm:py-2 rounded-full font-bold text-xs xs:text-sm mb-3 xs:mb-4 sm:mb-6 shadow-md sm:shadow-lg animate-pulse">
                <Clock className="w-3 h-3 xs:w-4 xs:h-4 mr-1 xs:mr-2" />
                Limited Time Offer
              </div>

              {/* Main Heading */}
              <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold text-gray-900 mb-2 xs:mb-3 sm:mb-4">
                Premium Hair Restoration
              </h3>
              
              {/* Subheading */}
              <div className="flex items-center justify-center mb-3 xs:mb-4 sm:mb-6">
                <Heart className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-[#ec2028] mr-1 xs:mr-2" />
                <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-xl text-gray-700 font-semibold">
                  with Unlimited Follicles
                </p>
              </div>

              {/* Price Display */}
              <div className="mb-4 xs:mb-6 sm:mb-8">
                <div className="inline-flex flex-wrap xs:flex-row items-center bg-white/80 backdrop-blur-sm rounded-lg xs:rounded-xl sm:rounded-2xl p-2 xs:p-3 sm:p-4 px-4 xs:px-6 sm:px-8 border border-gray-300 space-y-1 xs:space-y-0">
                  <span className="text-xs xs:text-sm sm:text-base text-gray-600 xs:mr-1 sm:mr-2">Starting at</span>
                  <span className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-4xl text-[#ec2028] font-bold mx-1 xs:mx-2 sm:mx-2 md:mx-3">₹99,999</span>
                  <span className="text-xs xs:text-sm sm:text-base text-gray-600 xs:ml-1 sm:ml-2">flat rate</span>
                </div>
              </div>

              {/* Urgency Text */}
              <div className="bg-white/80 backdrop-blur-sm rounded-lg xs:rounded-xl sm:rounded-2xl p-3 xs:p-4 sm:p-5 md:p-6 mb-4 xs:mb-6 sm:mb-8 max-w-2xl mx-auto border border-gray-300">
                <p className="text-gray-900 text-sm xs:text-base sm:text-lg md:text-xl font-medium mb-1 xs:mb-2">
                  Only <span className="text-[#ec2028] font-bold text-lg xs:text-xl sm:text-2xl">20 slots</span> available this month
                </p>
                <p className="text-gray-600 text-xs xs:text-sm md:text-base">
                  Book your consultation before they fill up
                </p>
              </div>

              {/* CTA Button */}
              <button className="group relative bg-[#ec2028] text-white px-4 xs:px-6 sm:px-8 md:px-6 py-2 xs:py-3 sm:py-4 md:py-4 rounded-full font-bold text-xs xs:text-sm sm:text-base md:text-lg lg:text-lg shadow-lg sm:shadow-xl lg:shadow-2xl hover:shadow-2xl sm:hover:shadow-3xl transform hover:scale-105 transition-all duration-300 inline-flex items-center justify-center w-full xs:w-auto max-w-xs sm:max-w-sm mx-auto">
                <span className="relative z-10">Book Consultation Now</span>
                <ChevronRight className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ml-1 xs:ml-2 sm:ml-3 group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform duration-300" />
                <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              {/* Trust Indicators */}
              <div className="flex flex-wrap xs:flex-row flex-wrap justify-center gap-2 xs:gap-3 sm:gap-4 md:gap-6 mt-4 xs:mt-6 sm:mt-8 md:mt-10 text-gray-600 text-xs xs:text-sm">
                <div className="flex items-center justify-center">
                  <Check className="w-3 h-3 xs:w-4 xs:h-4 md:w-5 md:h-5 mr-1 xs:mr-2 text-green-500" />
                  <span>No Hidden Charges</span>
                </div>
                <div className="flex items-center justify-center">
                  <Check className="w-3 h-3 xs:w-4 xs:h-4 md:w-5 md:h-5 mr-1 xs:mr-2 text-green-500" />
                  <span>Free Consultation</span>
                </div>
                <div className="flex items-center justify-center">
                  <Check className="w-3 h-3 xs:w-4 xs:h-4 md:w-5 md:h-5 mr-1 xs:mr-2 text-green-500" />
                  <span>Lifetime Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

// Combined Component
export default function CombinedHairRestorationSection() {
  return (
    <div className="space-y-4 xs:space-y-6 sm:space-y-8">
      {/* <CandidateSection /> */}
      <ComparisonSection />
    </div>
  );
}

// Export individual components as well
export { CandidateSection, ComparisonSection };