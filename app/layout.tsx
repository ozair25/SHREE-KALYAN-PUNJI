import type {Metadata} from 'next';
import { Inter, Playfair_Display, Parisienne } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const parisienne = Parisienne({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-script',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Shri Kalyan Punji — Paiso Ki Dukaan | Premium Loans, Cards & Insurance',
  description: 'Apply for Personal Loans, Gold Loans, Business Loans, Credit Cards, and Health Insurance with Shri Kalyan Punji. India\'s premier digital financial distributor offering fast approvals through multiple banking partners.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${parisienne.variable} scroll-smooth`}>
      <body suppressHydrationWarning className="bg-[#F7F1E1] text-[#0B1B3A] font-sans antialiased selection:bg-[#C9A227] selection:text-[#0B1B3A]">
        {children}
      </body>
    </html>
  );
}
