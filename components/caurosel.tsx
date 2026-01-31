import React from "react";
import { UserCheck, Activity, Droplet, Sparkles } from "lucide-react";

const CandidateSection: React.FC = () => {
  const candidates = [
    {
      icon: <UserCheck className="w-8 h-8 text-[#ec2028]" />,
      title: "Early to moderate thinning",
      desc: "Seeking non-surgical options",
    },
    {
      icon: <Activity className="w-8 h-8 text-[#ec2028]" />,
      title: "Advanced baldness",
      desc: "Considering transplant with realistic goals",
    },
    {
      icon: <Droplet className="w-8 h-8 text-[#ec2028]" />,
      title: "Dandruff / itch / oiliness",
      desc: "Impacting hair quality",
    },
    {
      icon: <Sparkles className="w-8 h-8 text-[#ec2028]" />,
      title: "Quick coverage",
      desc: "Needed with cosmetic systems",
    },
  ];

  return (
    <div className="bg-[#101828] text-white rounded-2xl shadow-lg max-w-6xl mx-auto px-6 sm:px-10 max-[470px]:mt-6 max-[470px]:py-6 md:px-16 py-12 mt-12">
      <h2 className="text-2xl max-[470px]:text-[22px] md:text-3xl font-bold text-center max-[470px]:mb-6 mb-10">
        Who’s a Good Candidate?
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {candidates.map((item, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-start hover:shadow-xl transition duration-300"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-300">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CandidateSection;
