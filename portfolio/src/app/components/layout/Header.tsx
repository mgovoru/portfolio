'use client'
import styles from "./header.module.scss";
import { useState } from "react";
import { MenuItem } from "@/app/types";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
     const menuItems: MenuItem[] = [
       { id: 1, label: 'история', url: '/about' },
       { id: 2, label: 'работы', url: '/works' }
     ];
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
	return (
    <header className={styles.common}>
      <div className={styles.black}></div>
      <div className={styles.white}>
        <div className={styles.container}>
          <div className={styles.logo}>
            {' '}
            <Link href='/'>MGovorukhina</Link>
          </div>
          <nav>
            <button className={styles.burger} onClick={toggleMenu}>
              &#9776;
            </button>
            <ul className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
              {menuItems.map((item) => (
                <li key={item.id} className={styles.item}>
                  <Link href={item.url}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <svg
            className={styles.light}
            width={41}
            height={41}
            version='1.0'
            id='Layer_1'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 64 64'
            enableBackground='new 0 0 64 64'
          >
            <g>
              <path
                fill='#231F20'
                d='M32,0C18.745,0,8,10.746,8,24c0,9.843,5.928,18.297,14.406,22h19.188C50.072,42.297,56,33.843,56,24
		C56,10.746,45.255,0,32,0z M41,26c-0.553,0-1-0.447-1-1c0-1.104-0.896-2-2-2s-2,0.896-2,2v19h-2V25c0-1.104-0.896-2-2-2
		s-2,0.896-2,2v19h-2V25c0-1.104-0.896-2-2-2s-2,0.896-2,2c0,0.553-0.447,1-1,1s-1-0.447-1-1c0-2.209,1.791-4,4-4
		c1.201,0,2.267,0.541,3,1.38c0.733-0.839,1.799-1.38,3-1.38s2.267,0.541,3,1.38c0.733-0.839,1.799-1.38,3-1.38c2.209,0,4,1.791,4,4
		C42,25.553,41.553,26,41,26z M45,13c-0.742,0.742-1.687-0.313-1.687-0.313C40.418,9.791,36.418,8,32,8c-0.553,0-1-0.447-1-1
		s0.447-1,1-1c4.971,0,9.471,2.015,12.729,5.271C44.729,11.271,45.742,12.258,45,13z'
              />
              <path
                fill='#231F20'
                d='M26,64h12c2.211,0,4-1.789,4-4H22C22,62.211,23.789,64,26,64z'
              />
              <polygon
                fill='#231F20'
                points='22,48.004 22,52 42,52 42,48.004 42,48 22,48 	'
              />
              <rect x='22' y='54' fill='#231F20' width='20' height='4' />
            </g>
          </svg>
        </div>
      </div>
    </header>
  );
}
