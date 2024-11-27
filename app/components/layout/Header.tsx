'use client';
import styles from './header.module.scss';
import { useState } from 'react';
import { MenuItem } from './../../types';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems: MenuItem[] = [
    { id: 1, label: 'история', url: './about' },
    { id: 2, label: 'работы', url: './works' },
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
                  <a href={item.url}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
export default Header;
