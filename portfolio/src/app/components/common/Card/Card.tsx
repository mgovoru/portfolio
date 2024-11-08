'use client';
import { dataProps } from '@/app/types';
import './Card.scss';
import React, { useState, useCallback } from 'react';

export default function Card(props: dataProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(true);
  };

  const handleUnflip = () => {
    setIsFlipped(false);
  };

  const calculateAngle = useCallback(
    (
      e: React.MouseEvent<HTMLDivElement>,
      item: HTMLDivElement,
      parent: HTMLDivElement
    ) => {
      let dropShadowColor = 'rgba(0, 0, 0, 0.3)';
      if (parent.getAttribute('data-filter-color') !== null) {
        dropShadowColor = parent.getAttribute('data-filter-color')!;
      }

      parent.classList.add('animated');

      const rect = item.getBoundingClientRect();
      let x = Math.abs(rect.x - e.clientX);
      let y = Math.abs(rect.y - e.clientY);
      let halfWidth = rect.width / 2;
      let halfHeight = rect.height / 2;

      let calcAngleX = (x - halfWidth) / 6;
      let calcAngleY = (y - halfHeight) / 14;

      let gX = (1 - x / (halfWidth * 2)) * 100;
      let gY = (1 - y / (halfHeight * 2)) * 100;

      const glare = item.querySelector('.glare') as HTMLDivElement;
      if (glare) {
        glare.style.background = `radial-gradient(circle at ${gX}% ${gY}%, rgb(199 198 243), transparent)`;
      }

      parent.style.perspective = `${halfWidth * 6}px`;
      item.style.perspective = `${halfWidth * 6}px`;
      item.style.transform = `rotateY(${calcAngleX}deg) rotateX(${-calcAngleY}deg) scale(1.04)`;

      const backface = parent.querySelector(
        '.inner-card-backface'
      ) as HTMLDivElement;
      if (backface) {
        backface.style.transform = `rotateY(${calcAngleX}deg) rotateX(${-calcAngleY}deg) scale(1.04) translateZ(-4px)`;
      }

      if (parent.getAttribute('data-custom-perspective') !== null) {
        parent.style.perspective = parent.getAttribute(
          'data-custom-perspective'
        )!;
      }

      let calcShadowX = (x - halfWidth) / 3;
      let calcShadowY = (y - halfHeight) / 6;
      item.style.filter = `drop-shadow(${-calcShadowX}px ${-calcShadowY}px 15px ${dropShadowColor})`;
    },
    []
  );

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget.querySelector('.inner-card') as HTMLDivElement;
    if (card) {
      calculateAngle(e, card, e.currentTarget);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget.querySelector('.inner-card') as HTMLDivElement;
    if (card) {
      calculateAngle(e, card, e.currentTarget);
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget.querySelector('.inner-card') as HTMLDivElement;
    const backface = e.currentTarget.querySelector(
      '.inner-card-backface'
    ) as HTMLDivElement;
    if (card && backface) {
      card.style.transform = 'rotateY(0deg) rotateX(0deg) scale(1)';
      backface.style.transform =
        'rotateY(0deg) rotateX(0deg) scale(1.01) translateZ(-4px)';
      card.style.filter = `drop-shadow(0 10px 15px rgb(0, 0, 0, 0.3))`;
    }
  };

  return (
    <div
      className={`card blastoise ${isFlipped ? 'flipped' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className='inner-card-backface'>
        <div
          className='image'
          style={{
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <button className='unflip' onClick={handleUnflip}>
            Unflip
          </button>
        </div>
      </div>
      <div className='inner-card'>
        <div className='front-content'>
          <div
            className='front-image'
            style={{
              backgroundImage: `url(${props.url})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          />
          <p className='title'>{props.title}</p>
          <p className='card__text'>{props.text}</p>
          <button className='flip' onClick={handleFlip}>
            Flip
          </button>
        </div>
        <div className='glare'></div>
      </div>
    </div>
  );
}
