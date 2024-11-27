'use client';
import { Montserrat } from 'next/font/google';

import './normalize.scss';
import './null.scss';
import './global.scss';
import Header from './components/layout/Header';

import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useEffect } from 'react';
import { register } from 'swiper/element/bundle';
import { MyContextProvider } from './context';


const montserrat = Montserrat({
  subsets: ['cyrillic'],
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    gsap.registerPlugin(useGSAP);
    register();
  }, []);

  return (
    <MyContextProvider>
      <html lang='ru' className={montserrat.className}>
        <body>
          <Header />
          <main className='main'>{children}</main>
        </body>
      </html>
    </MyContextProvider>
  );
}
