import './globals.css';
import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
// import { Navigation } from '@/components/layout/Navigation'; // Navigation importu silindi

export const metadata: Metadata = {
  title: 'Yayago - 0% Commission Car Rental Platform | Peer-to-Peer Car Sharing Dubai',
  description: 'Join Dubai\'s revolutionary car sharing platform with 0% service fees. Connect car owners with renters. List your car or find your perfect ride. English, Arabic & Russian support.',
  keywords: 'car sharing Dubai, peer-to-peer car rental, 0% commission, car rental UAE, yayago, car sharing platform, Dubai car rental',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" />
      </head>
      <body className="bg-black">
        {/* <Navigation /> // Navigation komponenti silindi */}
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
