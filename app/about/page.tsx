'use client';
import { useRef } from 'react';
import styles from './page.module.scss';

export default function About() {
  const outputRef = useRef(null);

  const textMe =
    'Я окончила математико-механический факультет Уральского государственного университета, но судьба увела меня по совсем другим дорогам. Не так давно меня пленил веб-дизайн — мир визуальных образов и эстетики интернета. Однако со временем я осознала, что истинное мое увлечение скрыто глубже: в механизмах, заставляющих гипертекст работать, в коде и логике, лежащих в основе современных веб-технологий.\nСтремясь разобраться во внутреннем устройстве веба, я завершила основной курс JS и курс по React в RSS School. Эти знания укрепили желание развиваться как разработчик. Теперь я посвящаю себя изучению тонкостей программирования, соединяя аналитический подход с творческим мышлением. Мой путь — это синтез точных наук и креативности, стремление понять суть и создавать не просто красивые, но и функциональные решения. Я верю, что сочетание моего образования и страсти к разработке позволит открыть новые возможности для роста';

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
        <div className={styles.contacts}>
          <ul>
            <li>
              <span>Location: </span>
              <a
                href='https://yandex.ru/maps/?ll=60.597465%2C56.838926&z=12'
                target='_blank'
              >
                Yekaterinburg, Russia
              </a>
            </li>
            <li>
              <span>E-mail: </span>
              <a href='mailto:m.govoru@yandex.ru'> m.govoru@yandex.ru</a>
            </li>
            <li>
              <span>Github: </span>
              <a href='https://github.com/mgovoru' target='_blank'>
                mgovoru
              </a>
            </li>
            <li>
              <span>Telegram: </span>
              <a href='https://t.me/mgovoru' target='_blank'>
                @mgovoru
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
