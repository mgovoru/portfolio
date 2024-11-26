'use client';
import { useCallback, useEffect, useRef } from 'react';
import styles from './page.module.scss';

export default function About() {
  let outputRef = useRef(null);

  const textMe = 'Я окончила математико-механический факультет Уральского государственного университета, но судьба увела меня по совсем другим дорогам. Не так давно меня пленил веб-дизайн — мир визуальных образов и эстетики интернета. Однако со временем я осознала, что истинное мое увлечение скрыто глубже: в механизмах, заставляющих гипертекст работать, в коде и логике, лежащих в основе современных веб-технологий.\nСтремясь разобраться во внутреннем устройстве веба, я завершила основной курс JS и курс по React в RSS School. Эти знания укрепили желание развиваться как разработчик. Теперь я посвящаю себя изучению тонкостей программирования, соединяя аналитический подход с творческим мышлением. Мой путь — это синтез точных наук и креативности, стремление понять суть и создавать не просто красивые, но и функциональные решения. Я верю, что сочетание моего образования и страсти к разработке позволит открыть новые возможности для роста';
  // const typeText = useCallback((text: string) => {
  //   let index = 0;

  //    const element = outputRef.current;

  //   const interval = setInterval(() => {
  //     if (index < text.length) {
  //       (element as unknown as HTMLElement).innerHTML += text.charAt(index);
  //       index++;
  //     } else {
  //       clearInterval(interval);
  //     }
  //   }, 100);

  // }, []);

  // useEffect(() => {
  //   typeText(textMe);
  // }, []);

  return (
    <>
      <div className='container'>
        <div className={styles.content}>
          <div
            className={styles.textabout}
            ref={outputRef}
            style={{ whiteSpace: 'pre-line' }}
          >
            {textMe.split('\n').map((line, index) => (
              <span
                key={index}
                style={{
                  display: 'block',
                  textIndent: '20px',
                }}
              >
                {line}
              </span>
            ))}
          </div>
          <div className={styles.photo}>
            <img src='./photo.png' alt='' />
          </div>
        </div>
      </div>
    </>
  );
}
