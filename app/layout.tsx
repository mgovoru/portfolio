'use client';
import { Russo_One, Marck_Script } from 'next/font/google';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useEffect } from 'react';
import { register } from 'swiper/element/bundle';
import { MyContextProvider } from './context';

import './styles/normalize.scss';
import './styles/null.scss';
import './styles/global.scss';

const russo_One = Russo_One({
  subsets: ['cyrillic'],
  weight: ['400'],
  style: ['normal'],
});

const marck_Script = Marck_Script({
  subsets: ['cyrillic'],
  weight: ['400'],
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
      <html
        lang='ru'
        className={`${russo_One.className} ${marck_Script.className}`}
        data-toolpad-color-scheme='light'
      >
        <body>
          <div className='wrapper'>
            <main className='main'> {children}</main>
          </div>
        </body>
      </html>
    </MyContextProvider>
  );
}
