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

      parent.classList.add('animated');

      const rect = item.getBoundingClientRect();
      const x = Math.abs(rect.x - e.clientX);
      const y = Math.abs(rect.y - e.clientY);
      const halfWidth = rect.width / 2;
      const halfHeight = rect.height / 2;

      const calcAngleX = (x - halfWidth) / 6;
      const calcAngleY = (y - halfHeight) / 14;


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
          <a href={props.mainUrl} className='card__link'>
            <div
              className='front-image'
              style={{
                backgroundImage: `url(${props.url})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            />
          </a>
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
