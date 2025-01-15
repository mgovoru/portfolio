'use client';
import { Noto_Serif_Display } from 'next/font/google';

import './normalize.scss';
import './null.scss';
import './global.scss';
import Header from './components/layout/Header';

import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useEffect } from 'react';
import { register } from 'swiper/element/bundle';
import { MyContextProvider } from './context';

const montserrat = Noto_Serif_Display({
  subsets: ['cyrillic'],
  weight: ['200', '300', '400'],
  style: ['normal'],
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
