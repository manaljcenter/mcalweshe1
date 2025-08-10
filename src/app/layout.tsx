import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "محمد الويشي - ملف المغامر الشخصي",
    template: "%s | محمد الويشي"
  },
  description: "موقع شخصي لمحمد الويشي - مستكشف العالم ومحب المغامرات والسفر. اكتشف قصص السفر والمغامرات حول العالم مع محمد الويشي.",
  keywords: ["محمد الويشي", "مغامرات", "سفر", "استكشاف", "رحلات", "مدونة سفر", "مصور", "مغامر"],
  authors: [{ name: "محمد الويشي" }],
  creator: "محمد الويشي",
  publisher: "محمد الويشي",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://mohammed-alweishi.com'),
  alternates: {
    canonical: '/',
    languages: {
      'ar-AE': '/ar',
      'en-US': '/en',
    },
  },
  openGraph: {
    title: "محمد الويشي - ملف المغامر الشخصي",
    description: "مستكشف العالم ومحب المغامرات والسفر. اكتشف قصص السفر والمغامرات حول العالم.",
    url: 'https://mohammed-alweishi.com',
    siteName: 'محمد الويشي',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'محمد الويشي - مغامر ومستكشف',
      },
    ],
    locale: 'ar_AE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "محمد الويشي - ملف المغامر الشخصي",
    description: "مستكشف العالم ومحب المغامرات والسفر",
    creator: '@mohammed_alweishi',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.variable} font-cairo antialiased`}>
        {children}
      </body>
    </html>
  );
}
