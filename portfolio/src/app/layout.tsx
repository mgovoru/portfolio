'use client';
import './global.scss';
import './null.scss';
import './normalize.scss';
import Header from './components/layout/Header';

import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useState, useEffect, useContext, useMemo } from 'react';
import { register } from 'swiper/element/bundle';
import { MyContext, MyContextProvider, MyContextType } from '@/app/context';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mainHeight, setMainHeight] = useState('100%');
  useEffect(() => {
    gsap.registerPlugin(useGSAP);
    register();

    // function updateHeight() {
    //   const header = document.querySelector('header');
    //   if (header) {
    //     const headerHeight = header.offsetHeight;
    //     setMainHeight(`calc(100% - ${headerHeight}px)`);
    //   }
    // }
    // updateHeight();
    // window.addEventListener('resize', updateHeight);
    // return () => window.removeEventListener('resize', updateHeight);
  }, []);

  return (
    <MyContextProvider>
      <html lang='en'>
        <body>
          <Header />
          <main
            className='main'
            style={{
              height: mainHeight,
            }}
          >
            {children}
          </main>
        </body>
      </html>
    </MyContextProvider>
  );
}
