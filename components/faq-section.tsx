"use client"

import { useEffect, useRef, useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"

const faqs = [
  {
    question: "Does it hurt?",
    answer: "Not really. With local anaesthesia most people only feel mild discomfort.",
  },
  {
    question: "How long is recovery?",
    answer: "Most are back to work in 2 to 3 days, feeling like themselves again.",
  },
  {
    question: "Are the results permanent?",
    answer: "Yes. Once transplanted, your hair grows naturally for life.",
  },
  {
    question: "Why this treatment instead of others?",
    answer: "It is a one-time procedure that gives lasting results without the need for endless sessions or medications.",
  },
  {
    question: "How many sessions are required?",
    answer: "Typically just one session is needed for most patients, depending on the extent of treatment.",
  },
  {
    question: "Is there any scarring?",
    answer: "The procedure leaves minimal, virtually undetectable scarring that's easily concealed by hair.",
  },
  {
    question: "Who is a good candidate for this procedure?",
    answer: "Most adults with sufficient donor hair and realistic expectations are good candidates.",
  },
  {
    question: "When will I see results?",
    answer: "Initial growth appears within 3-4 months, with full results visible after 12-18 months.",
  },
  {
    question: "What's the success rate?",
    answer: "The procedure has a success rate of over 95% when performed by experienced professionals.",
  },
  {
    question: "How do I prepare for the procedure?",
    answer: "We provide detailed pre-procedure instructions including medications to avoid and lifestyle adjustments.",
  },
]

export function FAQSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Split FAQs into two columns
  const leftFaqs = faqs.slice(0, 5)
  const rightFaqs = faqs.slice(5, 10)

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
      `}</style>
    
      <section 
        id="faq" 
        ref={sectionRef} 
        className="py-8 md:py-10 lg:py-10 max-[470px]:py-[0px] bg-white"
        style={{fontFamily: "'Outfit', sans-serif"}}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">


            <motion.h2
                className="text-2xl max-[470px]:text-[22px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12 text-[#101828] relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  type: "spring",
                  stiffness: 80,
                  damping: 15,
                }}
              >
                <span className="relative inline-block">
                 Frequently Asked Questions
                
                </span>
              </motion.h2>
          

          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            {/* Left Column */}
            <div className="space-y-4 md:space-y-6">
              {leftFaqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Accordion type="single" collapsible>
                    <AccordionItem 
                      value={`item-${index}`}
                      className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                      <AccordionTrigger className="px-4 md:px-6 py-4 text-left font-semibold text-[#101828] hover:text-[#ec2028] transition-colors duration-300 text-base md:text-lg">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="px-4 md:px-6 pb-4 pt-2 text-gray-600 text-sm md:text-base">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </motion.div>
              ))}
            </div>

            {/* Right Column */}
            <div className="space-y-4 md:space-y-6">
              {rightFaqs.map((faq, index) => (
                <motion.div
                  key={index + 5}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: (index + 5) * 0.1 }}
                >
                  <Accordion type="single" collapsible>
                    <AccordionItem 
                      value={`item-${index + 5}`}
                      className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                      <AccordionTrigger className="px-4 md:px-6 py-4 text-left font-semibold text-[#101828] hover:text-[#ec2028] transition-colors duration-300 text-base md:text-lg">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="px-4 md:px-6 pb-4 pt-2 text-gray-600 text-sm md:text-base">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Decorative elements */}
          <motion.div 
            className="absolute left-0 -z-10 opacity-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 0.1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <svg width="200" height="200" viewBox="0 0 200 200" className="text-[#ec2028]">
              <path fill="currentColor" d="M45,-78.3C58.1,-70.7,68.2,-57.3,76.5,-42.4C84.8,-27.5,91.2,-11.2,90.8,4.9C90.4,20.9,83.2,36.7,72.2,48.5C61.2,60.3,46.4,68,30.8,74.2C15.2,80.4,-1.2,85.1,-16.5,82.3C-31.8,79.5,-45.9,69.1,-57.8,56.1C-69.7,43.1,-79.4,27.5,-83.2,10.3C-87,-6.9,-84.9,-25.7,-76.9,-40.5C-68.9,-55.3,-55.1,-66.1,-40.2,-72.9C-25.3,-79.7,-9.4,-82.5,4.8,-80.9C19,-79.3,31.9,-73.3,45,-78.3Z" transform="translate(100 100)" />
            </svg>
          </motion.div>
        </div>
      </section>
    </>
  )
}