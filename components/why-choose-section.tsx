'use client'
import { CheckCircle, AlertCircle } from "lucide-react";

export default function OfferHighlight() {
  return (
    <section className="py-6 xs:py-8 sm:py-10 lg:py-12 px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 bg-white">
      <div className="max-w-4xl md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl xs:rounded-3xl p-5 xs:p-6 sm:p-8 md:p-10 lg:p-12 border border-gray-200 shadow-lg">
          {/* Header */}
          <div className="text-center mb-6 xs:mb-8 sm:mb-10">
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-4.5xl xl:text-5xl font-bold text-[#ec2028] mb-3 xs:mb-4 sm:mb-5 leading-tight">
              ₹99,999 Flat | Unlimited Follicles in One Session
            </h2>
            <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl text-black max-w-2xl xs:max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto font-medium px-2 xs:px-0">
              No hidden costs. No extra charges per graft. Just transparent,
              world-class care.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-3 xs:gap-4 sm:gap-5 md:gap-6 mb-6 xs:mb-8 sm:mb-10">
            {/* Feature 1 */}
            <div className="flex items-start gap-2 xs:gap-3 bg-white p-4 xs:p-5 sm:p-6 rounded-lg xs:rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CheckCircle className="w-5 h-5 xs:w-6 xs:h-6 text-[#ec2028] flex-shrink-0 mt-0.5 xs:mt-1" />
              <div className="flex-1">
                <h3 className="text-base xs:text-lg sm:text-xl font-semibold text-black mb-1 xs:mb-2 leading-tight">
                  Unlimited Grafts
                </h3>
                <p className="text-xs xs:text-sm sm:text-base text-gray-700 leading-relaxed">
                  No per-graft charges, complete coverage
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-2 xs:gap-3 bg-white p-4 xs:p-5 sm:p-6 rounded-lg xs:rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CheckCircle className="w-5 h-5 xs:w-6 xs:h-6 text-[#ec2028] flex-shrink-0 mt-0.5 xs:mt-1" />
              <div className="flex-1">
                <h3 className="text-base xs:text-lg sm:text-xl font-semibold text-black mb-1 xs:mb-2 leading-tight">
                  Transparent Pricing
                </h3>
                <p className="text-xs xs:text-sm sm:text-base text-gray-700 leading-relaxed">
                  One flat price, no surprises
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-2 xs:gap-3 bg-white p-4 xs:p-5 sm:p-6 rounded-lg xs:rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 col-span-1 xs:col-span-2 lg:col-span-1">
              <CheckCircle className="w-5 h-5 xs:w-6 xs:h-6 text-[#ec2028] flex-shrink-0 mt-0.5 xs:mt-1" />
              <div className="flex-1">
                <h3 className="text-base xs:text-lg sm:text-xl font-semibold text-black mb-1 xs:mb-2 leading-tight">
                  World-Class Care
                </h3>
                <p className="text-xs xs:text-sm sm:text-base text-gray-700 leading-relaxed">
                  Premium service at honest pricing
                </p>
              </div>
            </div>
          </div>

          {/* Alert Banner */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 xs:gap-3 bg-[#ec2028]/5 sm:bg-[#ec2028]/8 border border-[#ec2028]/20 sm:border-[#ec2028]/30 rounded-lg xs:rounded-xl px-3 xs:px-4 sm:px-6 py-2 xs:py-3 w-full xs:w-auto max-w-md xs:max-w-none">
              <AlertCircle className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-[#ec2028] flex-shrink-0" />
              <p className="text-black font-semibold text-sm xs:text-base sm:text-lg md:text-xl text-center xs:text-left leading-tight">
                Only a few slots remain this month.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Custom styles for extra text sizes */}
      <style jsx>{`
        @media (min-width: 1024px) {
          .text-4\.5xl {
            font-size: 2.5rem;
            line-height: 2.75rem;
          }
        }
        
        @media (min-width: 1280px) {
          .text-4\.5xl {
            font-size: 2.75rem;
            line-height: 3rem;
          }
        }
        
        /* Small breakpoint for 400-475px range */
        @media (min-width: 400px) and (max-width: 475px) {
          .xs\:text-2xl {
            font-size: 1.5rem;
            line-height: 2rem;
          }
        }
      `}</style>
    </section>
  );
}