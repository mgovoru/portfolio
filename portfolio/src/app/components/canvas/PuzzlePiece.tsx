import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { PuzzlePieceProps } from '../types';



export default function PuzzlePiece({
  image,
  x,
  y,
  width,
  height,
}: PuzzlePieceProps) {
  const pieceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (pieceRef.current) {
      gsap.fromTo(
        pieceRef.current,
        {
          scale: 0.1,
          opacity: 0,
          rotation: 0,
        },
        {
          scale: 1,
          opacity: 1,
          rotation: 360,
          duration: 5,
          ease: 'power2.out',
          onComplete: () => {
            gsap.to(pieceRef.current, {
              opacity: 0.2,
              duration: 5,
              ease: 'power1.inOut',
            });
          }
        }
      );
    }
  }, []);

  return (
    <div
      ref={pieceRef}
      style={{
        position: 'absolute',
        left: x - width * 0.2,
        top: y - height * 0.2,
        width: width + width * 0.4,
        height: height + height * 0.4,
        backgroundImage: `url(${image.toDataURL()})`,
        backgroundSize: 'cover',
      }}
    ></div>
  );
};
