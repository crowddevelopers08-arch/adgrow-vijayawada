"use client";

import React, { useState, useEffect } from "react";
import { Quote, UserCircle, ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

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

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 640);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Auto-loop carousel
  useEffect(() => {
    if (isPaused) return;

    const maxIndex = isDesktop ? 1 : 3; // Desktop: 2 slides, Mobile: 4 slides

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, isDesktop]);

  const maxIndex = isDesktop ? 1 : 3;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const ReviewCard = ({ review }: { review: (typeof reviews)[0] }) => (
    <div className="bg-[#ec2028]/10 relative pl-10 bg- p-6 rounded-xl shadow-md h-full">
      {/* Quote icon */}
      <Quote className="w-8 h-8 text-[#ec2028] absolute left-4 top-4 opacity-80" />

      {/* Review text */}
      <p className="text-gray-900 text-base leading-relaxed mb-4 mt-6">
        "{review.text}"
      </p>

      {/* User details */}
      <div className="flex items-center gap-3">
        <UserCircle className="w-10 h-10 text-gray-400" />
        <div>
          <h4 className="text-sm text-gray-900 font-semibold">{review.name}</h4>
          <span className="text-gray-900 text-xs">{review.place}</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="text-white max-w-6xl mx-auto px-6 sm:px-10 md:px-16 py-12 mt-12 max-[470px]:mt-4 max-[470px]:py-6 rounded-2xl shadow-lg">
      <h2 className="text-2xl md:text-4xl font-bold text-center max-[470px]:mb-6 mb-12 text-black">
        Why Patients Trust Radiance Elite In Their Own Words
      </h2>

      {/* Carousel Container */}
      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {/* Mobile: 1 card carousel */}
        <div className="sm:hidden overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {reviews.map((review, index) => (
              <div key={index} className="w-full flex-shrink-0 px-2">
                <ReviewCard review={review} />
              </div>
            ))}
          </div>

          {/* Mobile Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 bg-[#ec2028] text-white p-2 rounded-full hover:bg-[#d01820] transition-colors z-10 shadow-lg"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 bg-[#ec2028] text-white p-2 rounded-full hover:bg-[#d01820] transition-colors z-10 shadow-lg"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Mobile Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-[#ec2028] w-8"
                    : "bg-gray-500 w-2"
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: 2 cards carousel */}
        <div className="hidden sm:block overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {/* Slide 1: Reviews 0 & 1 */}
            <div className="w-full flex-shrink-0 px-2">
              <div className="grid grid-cols-2 gap-10">
                <ReviewCard review={reviews[0]} />
                <ReviewCard review={reviews[1]} />
              </div>
            </div>

            {/* Slide 2: Reviews 2 & 3 */}
            <div className="w-full flex-shrink-0 px-2">
              <div className="grid grid-cols-2 gap-10">
                <ReviewCard review={reviews[2]} />
                <ReviewCard review={reviews[3]} />
              </div>
            </div>
          </div>

          {/* Desktop Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 bg-[#ec2028] text-white p-3 rounded-full hover:bg-[#d01820] transition-colors z-10 shadow-lg"
            aria-label="Previous reviews"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 bg-[#ec2028] text-white p-3 rounded-full hover:bg-[#d01820] transition-colors z-10 shadow-lg"
            aria-label="Next reviews"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Desktop Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {[0, 1].map((index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-[#ec2028] w-10"
                    : "bg-gray-500 w-3"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
