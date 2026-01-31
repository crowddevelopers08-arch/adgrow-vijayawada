"use client";
import React from 'react';

const Footer = () => {
  function gtag_report_conversion(): void {
    throw new Error('Function not implemented.');
  }

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 max-[470px]:pt-6 pb-8 relative overflow-hidden">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-red-800"></div>
      
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-[470px]:gap-5 gap-10 max-[470px]:mb-6 mb-12">
          {/* Brand section */}
          <div className="space-y-6">
            <div className="flex items-center">
              <img 
                className="w-[200px] h-[60px] max-[768px]:w-[150px] max-[768px]:h-[50px] max-[480px]:w-[120px] max-[480px]:h-[40px]" 
                src="logo2.png" 
                alt="Adgro Hair Clinic logo" 
              />
            </div>
            <p className="text-base leading-relaxed text-gray-400 max-w-md">
              At Adgrohair, we aim at enhancing beauty aesthetically with the help of advanced science. Our vision is to provide multi specialty cosmetic and physiotherapy treatments and achieve excellence in patient care.
            </p>
            
            {/* Social media links (optional addition) */}
     
          </div>

          {/* Contact section */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white relative pb-2 
                          after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-10 after:bg-red-600">
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-5 h-5 text-red-600 mr-3 mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
                  </svg>
                </div>
                <p className="text-base text-gray-400 leading-relaxed">
                1, 2nd floor, Laasya Towers, 40-5-4, Tikkle Rd, Acharya Ranga Nagar, Vijayawada, Andhra Pradesh 520010
                </p>
              </div>
              
              <div className="flex items-center">
                <div className="w-5 h-5 text-red-600 mr-3 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z" />
                  </svg>
                </div>
                <p className="text-base text-gray-400">+91 9689056789</p>
              </div>
              
              <div className="flex items-center">
                <div className="w-5 h-5 text-red-600 mr-3 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <p className="text-base text-gray-400">adgrohair.vja@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Quick Links section */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white relative pb-2 
                          after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-10 after:bg-red-600">
              Quick Links
            </h3>
            <ul className="space-y-3">
           
              <li>
                <a href="#services" className="text-base text-gray-400 hover:text-white transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-base text-gray-400 hover:text-white transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-base text-gray-400 hover:text-white transition-colors">
                  Testimonials
                </a>
              </li>
          
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 max-[470px]:my-2 my-8"></div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <p className="text-sm text-gray-500">© 2025 Adgro Hair Clinic. All rights reserved.</p>
          
          <div className="flex flex-wrap justify-center max-[470px]:pb-[40px] gap-6">
            <a href="/privacy-policy" className="text-sm text-gray-500 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="/sitemap" className="text-sm text-gray-500 hover:text-white transition-colors">
              Sitemap
            </a>
          </div>
        </div>

        {/* Call to action buttons */}
        <div className="flex flex-col max-[470px]:hidden sm:flex-row justify-center gap-4 mt-10">
          <a 
            href="tel:+91 9689056789" 
            onClick={() => gtag_report_conversion()} 
            className="bg-gradient-to-r from-red-600 to-red-800 text-white px-6 py-3 rounded-md flex items-center justify-center gap-2 hover:from-red-700 hover:to-red-900 transition-all shadow-lg hover:shadow-xl"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Call Now
          </a>
          
          <a 
            href="#form" 
            className="border border-red-600 text-red-600 px-6 py-3 rounded-md flex items-center justify-center gap-2 hover:bg-red-600 hover:text-white transition-all shadow-md hover:shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
            </svg>
            Book Now
          </a>
        </div>
        
        {/* Mobile call to action buttons */}
        <div className="lg:hidden max-[470px]:flex fixed bottom-0 left-0 right-0 z-50 w-full shadow-2xl">
          <a 
            href="tel:+9689056789" 
            onClick={() => gtag_report_conversion()} 
            className="flex-1 flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-red-600 to-red-800 text-white font-medium text-base transition-all duration-300 hover:from-red-700 hover:to-red-900"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white">
              <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
            </svg>
            Call Now
          </a>

          <a 
            href="#form" 
            className="flex-1 flex items-center justify-center gap-2 py-4 bg-gray-900 text-white font-medium text-base transition-all duration-300 hover:bg-gray-800 border-l border-gray-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white">
              <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"/>
            </svg>
            Book Now
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;