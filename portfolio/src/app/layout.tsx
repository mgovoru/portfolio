'use client';
import './global.scss';
import './null.scss';
import './normalize.scss';
import Header from './components/layout/Header';

import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useState, useEffect } from 'react';

import styles from './page.module.scss';

gsap.registerPlugin(useGSAP);

import { register } from 'swiper/element/bundle';

register();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mainHeight, setMainHeight] = useState('100vh');
  useEffect(() => {
    function updateHeight() {
      const header = document.querySelector('header');
      if (header) {
        const headerHeight = header.offsetHeight;
        setMainHeight(`calc(100vh - ${headerHeight}px)`);
      }
    }
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  return (
    <html lang='en'>
      <body>
        <Header />
        <main className={styles.main} style={{ height: mainHeight }}>
          {children}
        </main>
      </body>
    </html>
  );
}
