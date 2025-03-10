'use client';
import Card from '../components/common/Card/Card';
import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Works() {
  const data = [
    {
      mainUrl: 'https://garry-potter-app.vercel.app',
      url: './code_4.jpg',
      title: 'Harry Potter Heroes',
      text: 'Веб-приложение, с помощью которого можно удобно взаимодействовать с информацией о любимых персонажах сказочной вселенной. Next.js, React и Redux. Typescript.',
    },
    {
      mainUrl: 'https://mgovoru.github.io/hangman/',
      url: './code_1.png',
      title: 'Hangman',
      text: 'Игра, где человек отгадывает слово, загаданное компьютером, предлагая буквы. За каждую неверную попытку добавляется элемент виселицы. Цель — угадать слово до полного завершения рисунка. JS, CSS, HTML',
    },
    {
      mainUrl: 'https://mgovoru.github.io/nonograms/dist/',
      url: './code_2.png',
      title: 'Nonogramms',
      text: 'логическая головоломка, где игрок заполняет клетки на сетке, используя числовые подсказки по краям строк и столбцов, чтобы восстановить скрытое изображение. Цель — правильно заполнить сетку, соблюдая все числовые указания, и в итоге открыть скрытую картинку. Webpark, HTML, SCSS, JS',
    },
    {
      mainUrl: 'https://github.com/mgovoru/eCommerce-Application',
      url: './code_3.png',
      title: 'eCommerce-App',
      text: 'Репозиторий - веб-приложения,  обеспечивающего интеграцию и вывод данных согласно предоставленным бэкэнд-сервисам CommerceTools.  Typescript.',
    },
  ];
  const swiperRef = useRef(null);
  function getDrawerHeight() {
    const header = document.querySelector('header');
    return header ? header.clientHeight : 0;
  }

  useEffect(() => {
    const resizeScreen = () => {
      if (swiperRef && swiperRef.current) {
        (swiperRef.current as HTMLElement).style.height =
          `${window.innerHeight - getDrawerHeight()}px`;
      }
    };
    resizeScreen();

    window.addEventListener('resize', resizeScreen);
  }, []);
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url('./non.jpg')`,
        backgroundSize: `cover`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center center`,
      }}
      ref={swiperRef}
    >
      <Swiper
        spaceBetween={16}
        scrollbar={{ draggable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1440: {
            slidesPerView: 4,
          },
        }}
      >
        {data.map((el, index) => (
          <SwiperSlide
            key={index}
            style={{
              height: '32rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Card
              mainUrl={el.mainUrl}
              url={el.url}
              title={el.title}
              text={el.text}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
