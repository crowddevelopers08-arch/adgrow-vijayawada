import { CheckCircle, AlertCircle } from "lucide-react";

export default function OfferHighlight() {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-lg">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#ec2028] mb-4">
              ₹99,999 Flat | Unlimited Follicles in One Session
            </h2>
            <p className="text-md sm:text-lg text-black max-w-3xl mx-auto font-medium">
              No hidden costs. No extra charges per graft. Just transparent,
              world-class care.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            <div className="flex items-start gap-3 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <CheckCircle className="w-6 h-6 text-[#ec2028] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-black mb-1">
                  Unlimited Grafts
                </h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  No per-graft charges, complete coverage
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <CheckCircle className="w-6 h-6 text-[#ec2028] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-black mb-1">
                  Transparent Pricing
                </h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  One flat price, no surprises
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <CheckCircle className="w-6 h-6 text-[#ec2028] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-black mb-1">
                  World-Class Care
                </h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  Premium service at honest pricing
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 bg-[#ec2028]/8 border border-[#ec2028]/30 rounded-xl px-4 py-2">
              <AlertCircle className="w-5 h-5 text-[#ec2028]" />
              <p className="text-black font-semibold text-base sm:text-lg">
                Only a few slots remain this month.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
