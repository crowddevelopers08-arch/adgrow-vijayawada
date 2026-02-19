import type React from "react"
import type { Metadata } from "next"
import { Geist, Manrope } from "next/font/google"
import Script from "next/script"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  title: "Adgro Hair Transplant Vijayawada ",
  description:
    "At Adgrohair, we aim at enhancing beauty aesthetically with the help of advcance science. Our vision is to provide multi specialty cosmetic and physiotherapy treatments and achieve excellence in patient care.",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/cropped-follicle-growth.png", sizes: "16x16", type: "image/png" },
      { url: "/cropped-follicle-growth.png", sizes: "32x32", type: "image/png" },
      { url: "/cropped-follicle-growth.png", sizes: "48x48", type: "image/png" },
      { url: "/cropped-follicle-growth.png", sizes: "192x192", type: "image/png" },
      { url: "/cropped-follicle-growth.png", sizes: "512x512", type: "image/png" }, 
    ],
    apple: [
      { url: "/cropped-follicle-growth.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/cropped-follicle-growth.png",
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${manrope.variable} antialiased`}>
      <head>
        {/* Google Ads Conversion Tracking (Original) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17539102170"
          strategy="afterInteractive"
        />
        <Script
          id="google-ads-tracking-original"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17539102170');
            `,
          }}
        />
        
        {/* Google Ads Conversion Tracking Function - Vijayawada Call */}
        <Script
          id="google-ads-conversion-function-call"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              function gtag_report_conversion_call(url) {
                var callback = function () {
                  if (typeof(url) != 'undefined') {
                    window.location = url;
                  }
                };
                gtag('event', 'conversion', {
                  'send_to': 'AW-17597316816/1LBgCKfLyaEbEND9hsdB',
                  'value': 1.0,
                  'currency': 'INR',
                  'event_callback': callback
                });
                return false;
              }
            `,
          }}
        />
        
        {/* Original Google Ads Conversion Tracking Function */}
        <Script
          id="google-ads-conversion-function-original"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              function gtag_report_conversion(url) {
                var callback = function () {
                  if (typeof(url) != 'undefined') {
                    window.location = url;
                  }
                };
                gtag('event', 'conversion', {
                  'send_to': 'AW-17539102170/ZM3nCKv2ypYbENrrpatB',
                  'event_callback': callback
                });
                return false;
              }
            `,
          }}
        />
        
        {/* Additional Google Analytics GA4 Tracking */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17597316816"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics-ga4"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17597316816');
            `,
          }}
        />

        {/* Meta Pixel Code */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '875923747213226');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{display: 'none'}}
            src="https://www.facebook.com/tr?id=875923747213226&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}
      </head>
      <body>{children}</body>
    </html>
  )
}