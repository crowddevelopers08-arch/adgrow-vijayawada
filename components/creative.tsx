import React from "react";
import { Quote, UserCircle } from "lucide-react";

const Testimonials: React.FC = () => {
  const reviews = [
    {
      text: "I visited this clinic 3months ago my skin was much better and brighter now after taking  6 sessions of glutathione treatment I recommended advance grohair glo skin for good happy results",
      name: "Monika Subba",
      place: "Vijayawada",
    },
    {
      text: "Doctor saraswati  has treated me for hair fall..and iam satisfied with the treatment given by doctor helped me alot..and thanx to doctor..Adv gro hair and glow skin",
      name: "Madhukiran Naidu",
      place: "Guntur",
    },
    {
      text: "Really satisfied with the results. I took the meso sessions here for my hair thinning problem and it works really well. Must recommended to all who are facing hair fall issues. They also have best ever packages in vijayawada.",
      name: "varun bunty",
      place: "Hyderabad",
    },
    {
      text: "Very good clinic in vijayawada.The doctor explained very well.I am very happy with the treatment process.Nice clinic for hair treatment and skin",
      name: "jarabala GYAMA NAIK",
      place: "Vizag",
    },
  ];

  return (
    <div className="bg-[#101828] text-white max-w-6xl mx-auto px-6 sm:px-10 md:px-16 py-12 mt-12 max-[470px]:mt-4 max-[470px]:py-6 rounded-2xl shadow-lg">
      <h2 className="text-2xl md:text-3xl font-bold text-center max-[470px]:mb-6 mb-12">
        Patient Reviews
      </h2>

      {/* Grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="relative pl-10 bg-[#1c2534] p-6 rounded-xl shadow-md"
          >
            {/* Quote icon */}
            <Quote className="w-8 h-8 text-[#ec2028] absolute left-4 top-4 opacity-80" />

            {/* Review text */}
            <p className="text-gray-200 text-base leading-relaxed mb-4 mt-6">
              “{review.text}”
            </p>

            {/* User details */}
            <div className="flex items-center gap-3">
              <UserCircle className="w-10 h-10 text-gray-400" />
              <div>
                <h4 className="text-sm font-semibold">{review.name}</h4>
                <span className="text-gray-400 text-xs">{review.place}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
