import ThemeRegistry from '@/theme/ThemeRegistry';
import { Header } from '../components/header/Header';
import '../styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Top Restaurants Barcelona',
  description: 'Your favorite page to find a restaurant in Barcelona',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <ThemeRegistry>
        <body suppressHydrationWarning={true} className={inter.className}>
          <Header />
          {children}
        </body>
      </ThemeRegistry>
    </html>
  );
}
