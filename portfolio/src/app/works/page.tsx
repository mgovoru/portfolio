'use client';
import Link from 'next/link';
import Card from '../components/common/Card/Card';
import styles from './page.module.scss';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Works() {
  const data = [
    {
      url: './code_1.png',
      title: 'Hangman',
      text: 'Игра, где человек отгадывает слово, загаданное компьютером, предлагая буквы. За каждую неверную попытку добавляется элемент виселицы. Цель — угадать слово до полного завершения рисунка. JS, CSS, HTML',
    },
    {
      url: './code_2.png',
      title: 'Nonogramms',
      text: 'логическая головоломка, где игрок заполняет клетки на сетке, используя числовые подсказки по краям строк и столбцов, чтобы восстановить скрытое изображение. Цель — правильно заполнить сетку, соблюдая все числовые указания, и в итоге открыть скрытую картинку. Webpark, HTML, SCSS, JS',
    },
    {
      url: './code_3.png',
      title: 'eCommerce-App',
      text: 'Репозиторий - веб-приложения,  обеспечивающего интеграцию и вывод данных согласно предоставленным бэкэнд-сервисам CommerceTools.  Typescript.',
    },
    {
      url: './code_4.png',
      title: 'Stars web',
      text: 'Репозиторий - веб-приложение, которое позволяет пользователям взаимодействовать с данными из вселенной «Звёздных войн». Next.js, React и Redux.  Typescript.',
    },
  ];
  return (
    <>
      <div className={styles.container}>
        <Swiper
          spaceBetween={16}
          scrollbar={{ draggable: true }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 16,
              centeredSlides: true,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 16
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 16
            },
            1440: {
              slidesPerView: 4,
              spaceBetween: 16,
            },
          }}
          style={{ width: '100%', height: '35rem', padding: '16px'}}
        >
          {data.map((el, index) => (
            <SwiperSlide
              key={index}
              style={{
                width: '23rem',
                height: '32rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Card url={el.url} title={el.title} text={el.text} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
