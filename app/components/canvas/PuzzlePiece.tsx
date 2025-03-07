import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { PuzzlePieceProps } from '../../types';

export default function PuzzlePiece({
  image,
  x,
  y,
  width,
  height,
}: PuzzlePieceProps) {
  const pieceRef = useRef<HTMLDivElement>(null);

  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 800,
    height: typeof window !== 'undefined' ? window.innerHeight : 600,
  });

  useEffect(() => {
    const handleResizePiece = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });

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
            },
          }
        );
      }
    };
    handleResizePiece();
    window.addEventListener('resize', handleResizePiece);
    return () => {
      window.removeEventListener('resize', handleResizePiece);
    };
  }, [pieceRef, windowSize.height, windowSize.width]);

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
}
