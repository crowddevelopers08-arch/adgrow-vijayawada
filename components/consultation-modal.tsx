"use client";
import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { MapPin, Navigation, Car, X, Loader2 } from 'lucide-react';
import { FaWalking } from 'react-icons/fa';

const CombinedSection = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    concern: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Map state
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [showDirections, setShowDirections] = useState(false);
  const [travelMode, setTravelMode] = useState<'driving' | 'walking'>('driving');

  // Intersection observer for map animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-zoom-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (mapContainerRef.current) {
      observer.observe(mapContainerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Form handlers
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (submitError) setSubmitError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          source: 'hair-transformation-form',
          formName: 'hair-transformation-form'
        }),
      });

      const result = await response.json();
      console.log('Form submission result:', result);
      
      if (result.success) {
        setFormData({
          name: '',
          email: '',
          phone: '',
          concern: ''
        });
        window.location.href = '/thank-you';
      } else {
        setSubmitError(result.error || 'There was an error submitting the form. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Directions link
  const directionsLink = travelMode === 'driving' 
    ? 'https://www.google.com/maps/dir/?api=1&destination=12.978456,77.501695&travelmode=driving'
    : 'https://www.google.com/maps/dir/?api=1&destination=12.978456,77.501695&travelmode=walking';

  return (
    <section className="py-16 max-[420px]:py-6 bg-gray-50" style={{fontFamily: "'Outfit', sans-serif"}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <section id='form'>
          <motion.h2 
            className="text-2xl max-[470px]:text-[22px] sm:text-3xl md:text-4xl lg:text-4xl font-bold text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 text-gray-900 relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              stiffness: 80,
              damping: 15
            }}
          >
            <span className="relative inline-block">
              Begin Your Hair Transformation
            </span>
          </motion.h2>
        </section>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 max-[420px]:gap-5 gap-10 items-start">
          {/* Form Column */}
          <motion.div 
            className="p-8 rounded-lg shadow-md bg-gradient-to-r from-gray-50 to-gray-100"
            // style={{ backgroundColor: '#101828' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-black mb-2">
                  Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600  text-white placeholder-gray-400"
                  placeholder="Enter your full name"
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-black mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 text-white placeholder-gray-400"
                  placeholder="Enter your email"
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="phone" className="block text-black mb-2">
                  Phone <span className="text-red-400">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 text-white placeholder-gray-400"
                  placeholder="Enter your phone number"
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="concern" className="block text-black mb-2">
                  Concern <span className="text-red-400">*</span>
                </label>
                <select
                  id="concern"
                  name="concern"
                  value={formData.concern}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 text-black placeholder-gray-400"
                  required
                  disabled={isSubmitting}
                >
                  <option value="">Select your concern</option>
                  <option value="Baldness">Baldness</option>
                  <option value="Thinning">Thinning</option>
                  <option value="Receding Hairline">Receding Hairline</option>
                  <option value=" Patchy Beard/Hair Loss"> Patchy Beard/Hair Loss</option>
                  <option value="Others">Others</option>
                </select>
              </div>

              {/* Error Message */}
              {submitError && (
                <div className="mb-4 p-3 bg-red-900/50 border border-red-700 rounded-md">
                  <p className="text-red-200 text-sm">{submitError}</p>
                </div>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full ${
                  isSubmitting 
                    ? 'bg-red-700 cursor-not-allowed' 
                    : 'bg-red-600 hover:bg-red-700 cursor-pointer'
                } text-white font-bold py-3 px-4 rounded-md transition-colors duration-300 flex items-center justify-center gap-2`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  'Book Consultation'
                )}
              </button>

              {/* Privacy Note */}
              <p className="text-xs text-gray-400 mt-4 text-center">
                By submitting this form, you agree to our privacy policy and consent to being contacted by our team.
              </p>
            </form>
          </motion.div>

          {/* Map Column */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div 
              ref={mapContainerRef}
              className="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-white transform scale-95 opacity-0 transition-all duration-700 h-full"
            >
              {/* Pulsing border animation */}
              <div className="absolute inset-0 border-[10px] border-green-500/20 rounded-xl pointer-events-none animate-pulse-slow"></div>
            
              {/* Main map iframe */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3636.1522254404144!2d80.64682237514523!3d16.504305434240013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35faba051ec879%3A0x186d916661c13472!2sAdvanced%20GroHair%20%26%20GloSkin%20-%20Vijayawada!5e1!3m2!1sen!2sin!4v1758198754643!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="relative z-10"
                aria-label="Advanced GroHair & GloSkin Clinic Location"
              ></iframe>
              
              {/* Animated location pin */}
              <div className="absolute top-1/2 left-1/2 z-20 transform -translate-x-1/2 -translate-y-full">
                <div className="animate-bounce-slow">
                  <div className="bg-blue-500 p-2 rounded-full shadow-lg">
                    <MapPin className="w-6 h-6 text-white fill-white" />
                  </div>
                </div>
              </div>

              {/* Clinic badge */}
              <div className="absolute bottom-4 left-4 z-20 bg-white/90 px-3 py-1.5 rounded-full shadow-md max-w-[90%]">
                <div className="flex items-center space-x-2 truncate">
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full flex-shrink-0"></div>
                  <span className="text-blue-500 font-medium text-sm truncate">Advanced GroHair & GloSkin</span>
                </div>
              </div>
              
              <a href="https://maps.app.goo.gl/1TeLeUnCusX2EN6t9" target="_blank" rel="noopener noreferrer">
                {/* Directions button */}
                <button 
                  className="absolute bottom-4 right-4 z-20 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-full shadow-lg flex items-center space-x-2 transition-all text-sm"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Directions</span>
                </button>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Directions Panel */}
        {showDirections && (
          <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
                <h3 className="text-xl font-bold text-blue-600 flex items-center">
                  <Navigation className="w-5 h-5 mr-2" />
                  Directions
                </h3>
                <button 
                  onClick={() => setShowDirections(false)}
                  className="text-gray-500 hover:text-gray-700 p-1"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="p-6">
                <div className="mb-6">
                  <h4 className="font-semibold text-lg mb-3 text-gray-800">Get Directions:</h4>
                  
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <button
                      onClick={() => setTravelMode('driving')}
                      className={`flex items-center justify-center p-3 rounded-lg ${
                        travelMode === 'driving' 
                          ? 'bg-blue-100 text-blue-600 border border-blue-200' 
                          : 'bg-gray-50 text-gray-600 border border-black'
                      }`}
                    >
                      <Car className="w-5 h-5 mr-2" />
                      <span>By Car</span>
                    </button>
                    <button
                      onClick={() => setTravelMode('walking')}
                      className={`flex items-center justify-center p-3 rounded-lg ${
                        travelMode === 'walking' 
                          ? 'bg-blue-100 text-blue-600 border border-blue-200' 
                          : 'bg-gray-50 text-gray-600 border border-black'
                      }`}
                    >
                      <FaWalking className="w-5 h-5 mr-2" />
                      <span>Walking</span>
                    </button>
                  </div>
                  
                  <a
                    href={directionsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-lg shadow-md transition-colors"
                  >
                    <Navigation className="w-5 h-5 mr-2" />
                    Open in Google Maps
                  </a>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <h4 className="font-semibold text-blue-700 mb-2">Nearby Landmarks:</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Opposite to Salem Government Hospital
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Next to Vijaya Bank
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      500m from Salem Railway Station
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <style jsx global>{`
          @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
        `}</style>

        <style jsx>{`
          .animate-zoom-in {
            animation: zoomIn 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
          }
          @keyframes zoomIn {
            0% {
              transform: scale(0.95);
              opacity: 0;
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }
          .animate-pulse-slow {
            animation: pulse 6s infinite;
          }
          @keyframes pulse {
            0%, 100% {
              opacity: 0.2;
            }
            50% {
              opacity: 0.4;
            }
          }
          .animate-bounce-slow {
            animation: bounce 3s infinite;
          }
          @keyframes bounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }
          .animate-fade-in {
            animation: fadeIn 0.2s ease-out forwards;
          }
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default CombinedSection;