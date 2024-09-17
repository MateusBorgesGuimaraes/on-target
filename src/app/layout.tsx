import type { Metadata } from 'next';
import { Source_Sans_3, Bebas_Neue } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';

const sourcesans = Source_Sans_3({
  weight: ['400', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-sourcesans',
  display: 'swap',
});

const bebas = Bebas_Neue({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'On Target',
  description: 'Ecommerece especializado em perifericos de informatica.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${sourcesans.variable} ${bebas.variable} font-sourcesans antialiased `}
    >
      <body className="relative">
        <div className="absolute w-full">
          <Header />
        </div>
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
