'use client';
import styles from './page.module.scss';

export default function Custom404() {
  return (
    <>
      <div className='container'>
        <div className={styles.content}>
          <div className={styles.text}>
            Увы, запрошенная страница ускользнула. Возможно, она переместилась
            или в адресе закралась опечатка. Предлагаю вернуться на главную
            страницу.
          </div>
          <div className={styles.image}>
            <img src='./non.jpeg' />
          </div>
        </div>
      </div>
    </>
  );
}
