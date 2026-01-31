"use client";
import { NextPage } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Header } from '@/components/header';
import Footer from '@/components/footer';
import Thankfooter from '@/components/thank-footer';
import { Thankheader } from '@/components/thankheader';
import { useEffect } from 'react';

// Add type declaration for gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// Thank You Page Component
const ThankYouPage: NextPage = () => {
  useEffect(() => {
    // Track conversion when component mounts
    const trackConversion = () => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'conversion', {
          'send_to': 'AW-17597316816/uMwdCOzWyKEbEND9hsdB'
        });
      }
    };

    // Try to track conversion
    trackConversion();
    
    // Set up interval to check if gtag is available
    const intervalId = setInterval(() => {
      if (typeof window !== 'undefined' && window.gtag) {
        trackConversion();
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      {/* Google Analytics Conversion Script */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-17597316816"
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics-conversion-vijayawada"
        strategy="afterInteractive"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17597316816');
          
          // Track Vijayawada Submit lead form conversion
          gtag('event', 'conversion', {
            'send_to': 'AW-17597316816/uMwdCOzWyKEbEND9hsdB'
          });
        `}
      </Script>
      
      <Thankheader />
      
      <div className="min-h-screen bg-gray-50 flex flex-col py-12" style={{ fontFamily: "'Outfit', sans-serif" }}>

        {/* Main Content */}
        <main className="flex-grow flex items-center justify-center py-12 max-[470px]:py-6 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl w-full bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-8 sm:p-10 max-[470px]:p-4 text-center">
              {/* Success Icon */}
              <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-green-100 mb-6">
                <svg className="h-12 w-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Thank You for Choosing Adgro Hair Clinic!
              </h1>
              
              <p className="text-lg text-gray-700 max-[740px]:mb-2 mb-8">
                We've received your inquiry about our hair restoration services. Our dermatologist-led team will contact you shortly to discuss your personalized hair treatment plan.
              </p>
              
              <div className="bg-red-50 p-6 rounded-lg mb-8 text-left">
                <h2 className="text-xl font-semibold text-red-700 mb-4">What Happens Next?</h2>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Our hair specialist will contact you within 24 hours
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    We'll schedule a consultations and trichoscopy scan
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    You'll receive a personalized treatment plan with transparent pricing
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    We'll explain all options - medical therapy, PRP, mesotherapy, or transplantation
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Discuss no-cost EMI options on eligible packages
                  </li>
                </ul>
              </div>
              
              <div className="mb-6">
                <p className="text-gray-700 font-semibold">
                  For immediate assistance, call/WhatsApp: <span className="text-red-600">+91 96890 56789</span>
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors"
                >
                  Return to Home
                </Link>
              </div>
            </div>
          </div>
        </main>

        <style jsx global>{`
          @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
          body {
            font-family: 'Outfit', sans-serif;
          }
        `}</style>
      </div>
      <Thankfooter />
    </>
  );
};

export default ThankYouPage;