"use client";
import { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import { Thankheader } from '@/components/thankheader';
import Thankfooter from '@/components/thank-footer';

const PrivacyPolicyPage: NextPage = () => {
  return (
    <>
      <Thankheader />
      <Head>
        <title>Privacy Policy | Adgro Hair Clinic</title>
        <meta name="description" content="Adgro Hair Clinic privacy policy. Learn how we protect your personal information." />
      </Head>
      
      <div className="min-h-screen bg-gray-50 flex flex-col" style={{ fontFamily: "'Outfit', sans-serif" }}>
        {/* Header */}
        <header className="bg-white shadow-sm py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-red-600">
              Adgro
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-red-600">Home</Link>
              <Link href="/about" className="text-gray-700 hover:text-red-600">About</Link>
              <Link href="/contact" className="text-gray-700 hover:text-red-600">Contact</Link>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-red-600 py-6 px-8">
              <h1 className="text-3xl font-bold text-white">Privacy Policy</h1>
            </div>
            
            <div className="p-8 sm:p-10">
              <div className="prose max-w-none">
                <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Introduction</h2>
                <p className="text-gray-700 mb-6">
                  Welcome to Adgro Hair Clinic. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, contact us via phone or WhatsApp, or use our hair restoration services at our Vijayawada clinic.
                </p>
                
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Information We Collect</h2>
                <p className="text-gray-700 mb-4">We may collect the following types of information:</p>
                <ul className="text-gray-700 mb-6 list-disc pl-5 space-y-2">
                  <li>Personal identification information (Name, email address, phone number, etc.)</li>
                  <li>Health information related to your hair and scalp condition</li>
                  <li>Demographic information (age, gender, location)</li>
                  <li>Scalp analysis data from trichoscopy examinations</li>
                  <li>Treatment preferences and history</li>
                  <li>Technical data (IP address, browser type, pages visited)</li>
                  <li>Any other information you provide during consultations or communications</li>
                </ul>
                
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. How We Use Your Information</h2>
                <p className="text-gray-700 mb-4">We use the information we collect in the following ways:</p>
                <ul className="text-gray-700 mb-6 list-disc pl-5 space-y-2">
                  <li>To provide personalized hair restoration treatments and consultations</li>
                  <li>To communicate with you about appointments, procedures, and follow-ups</li>
                  <li>To develop custom treatment plans based on root-cause diagnosis</li>
                  <li>To process transactions and explain financing/EMI options</li>
                  <li>To improve our website, services, and patient experience</li>
                  <li>To send information about our services and promotional offers (with your consent)</li>
                  <li>To document treatment progress and outcomes with before/after photos</li>
                </ul>
                
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Sharing Your Information</h2>
                <p className="text-gray-700 mb-6">
                  We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and patients with our business partners and trusted affiliates for the purposes outlined above. Your health information is kept strictly confidential and is only accessible to our medical team.
                </p>
                
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Data Security</h2>
                <p className="text-gray-700 mb-6">
                  We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. All medical records and personal data are stored securely with restricted access. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
                
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Your Rights</h2>
                <p className="text-gray-700 mb-4">You have the right to:</p>
                <ul className="text-gray-700 mb-6 list-disc pl-5 space-y-2">
                  <li>Access and receive a copy of your personal and medical information</li>
                  <li>Rectify any inaccurate personal information we hold about you</li>
                  <li>Request erasure of your personal information, subject to medical record retention requirements</li>
                  <li>Object to processing of your personal information</li>
                  <li>Data portability</li>
                  <li>Withdraw consent at any time for marketing communications</li>
                </ul>
                
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Cookies</h2>
                <p className="text-gray-700 mb-6">
                  Our website uses "cookies" to enhance User experience. You may choose to set your web browser to refuse cookies or to alert you when cookies are being sent. If you do so, note that some parts of the Site may not function properly.
                </p>
                
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Changes to This Privacy Policy</h2>
                <p className="text-gray-700 mb-6">
                  AdGro Hair Clinic has the discretion to update this privacy policy at any time. We encourage Users to frequently check this page for any changes. You acknowledge and agree that it is your responsibility to review this privacy policy periodically and become aware of modifications.
                </p>
                
              
              </div>
            </div>
          </div>
        </main>

        <Thankfooter />
        
        <style jsx global>{`
          @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
          body {
            font-family: 'Outfit', sans-serif;
          }
        `}</style>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;