import React, { useEffect, useRef, useState } from 'react';
import PuzzlePiece from './PuzzlePiece';
import { PuzzlePieceProps } from '../../types';
import { PieceShape } from '../../types';
import { gsap } from 'gsap';
import styles from './canvas.module.scss';

const PuzzleCanvas: React.FC = () => {
  const [pieces, setPieces] = useState<PuzzlePieceProps[]>([]);
  const [imageSize, setImageSize] = useState<{ width: number; height: number }>(
    { width: 0, height: 0 }
  );
  const textRef = useRef(null);
  const subtextRef = useRef(null);
  const text = `FRONTEND - DEVELOPER`;

  useEffect(() => {
    const bufferCanvas = document.createElement('canvas');
    const bufferCtx = bufferCanvas.getContext('2d') as CanvasRenderingContext2D;

    const img = new Image();
    img.src = './city.jpeg'; // Замените на путь к вашему изображению или используйте URL
    function getHeaderHeight() {
      const header = document.querySelector('header');
      return header ? header.clientHeight : 0;
    }

    img.onload = function () {
      const headerHeight = getHeaderHeight(); // Функция, возвращающая высоту заголовка
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight - headerHeight;

      // Масштабируем изображение, чтобы оно соответствовало размерам экрана
      bufferCanvas.width = screenWidth;
      bufferCanvas.height = screenHeight;

      bufferCtx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        0,
        0,
        bufferCanvas.width,
        bufferCanvas.height
      );

      const rows = 4; // Количество строк
      const cols = 6; // Количество столбцов
      const pieceWidth = bufferCanvas.width / cols;
      const pieceHeight = bufferCanvas.height / rows;
      const pieceImages = [];

      // Сохраняем размеры изображения
      setImageSize({ width: bufferCanvas.width, height: bufferCanvas.height });

      // Создание матрицы форм деталей пазла
      const pieceShapes: PieceShape[][] = [];

      // Генерация форм пазлов с корректными сторонами
      for (let row = 0; row < rows; row++) {
        pieceShapes[row] = [];
        for (let col = 0; col < cols; col++) {
          const shape: PieceShape = {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          };

          // Верхняя сторона
          if (row === 0) {
            shape.top = 0; // Край пазла
          } else {
            // Противоположная сторона нижней стороны верхнего пазла
            shape.top = -pieceShapes[row - 1][col].bottom;
          }
          if (col === 0) {
            shape.left = 0; // Край пазла
          } else {
            // Противоположная сторона правой стороны левого пазла
            shape.left = -pieceShapes[row][col - 1].right;
          }

          // Нижняя сторона
          if (row === rows - 1) {
            shape.bottom = 0; // Край пазла
          } else {
            // Случайное значение: выпуклость (1) или вогнутость (-1)
            shape.bottom = Math.random() > 0.5 ? 1 : -1;
          }

          // Правая сторона
          if (col === cols - 1) {
            shape.right = 0; // Край пазла
          } else {
            // Случайное значение: выпуклость (1) или вогнутость (-1)
            shape.right = Math.random() > 0.5 ? 1 : -1;
          }

          pieceShapes[row][col] = shape;
        }
      }

      // Генерация деталей пазла
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const shape = pieceShapes[row][col];
          const pieceCanvas = document.createElement('canvas');
          pieceCanvas.width = pieceWidth + pieceWidth * 0.4;
          pieceCanvas.height = pieceHeight + pieceHeight * 0.4;
          const pieceCtx = pieceCanvas.getContext('2d');
          if (!pieceCtx) continue;

          pieceCtx.translate(pieceWidth * 0.2, pieceHeight * 0.2);

          // Применение маски к детали пазла
          pieceCtx.save();
          pieceCtx.beginPath();
          drawPiecePath(pieceCtx, shape, pieceWidth, pieceHeight);
          pieceCtx.clip();

          // Отрисовка соответствующей части изображения
          pieceCtx.drawImage(
            bufferCanvas,
            col * pieceWidth - pieceWidth * 0.2,
            row * pieceHeight - pieceHeight * 0.2,
            pieceWidth + pieceWidth * 0.4,
            pieceHeight + pieceHeight * 0.4,
            -pieceWidth * 0.2,
            -pieceHeight * 0.2,
            pieceWidth + pieceWidth * 0.4,
            pieceHeight + pieceHeight * 0.4
          );
          pieceCtx.restore();

          // Добавление обводки для визуализации
          pieceCtx.strokeStyle = 'black';
          pieceCtx.stroke();

          // Сохранение детали для дальнейшего использования
          pieceImages.push({
            image: pieceCanvas,
            x: col * pieceWidth,
            y: row * pieceHeight,
            width: pieceWidth,
            height: pieceHeight,
          });
        }
      }

      // Устанавливаем кусочки в состояние
      setPieces(pieceImages);
    };

    // Функция для отрисовки пути детали пазла
    const drawPiecePath = (
      ctx: CanvasRenderingContext2D,
      shape: PieceShape,
      width: number,
      height: number
    ) => {
      const size = Math.min(width, height);
      const tabSize = size * 0.2;

      ctx.beginPath();
      ctx.moveTo(0, 0);
      // Верхняя сторона
      ctx.lineTo(width / 2 - tabSize, 0);
      if (shape.top !== 0) {
        ctx.quadraticCurveTo(
          width / 2,
          -tabSize * shape.top,
          width / 2 + tabSize,
          0
        );
      }
      ctx.lineTo(width, 0);

      // Правая сторона
      ctx.lineTo(width, height / 2 - tabSize);
      if (shape.right !== 0) {
        ctx.quadraticCurveTo(
          width + tabSize * shape.right,
          height / 2,
          width,
          height / 2 + tabSize
        );
      }
      ctx.lineTo(width, height);

      // Нижняя сторона
      ctx.lineTo(width / 2 + tabSize, height);
      if (shape.bottom !== 0) {
        ctx.quadraticCurveTo(
          width / 2,
          height + tabSize * shape.bottom,
          width / 2 - tabSize,
          height
        );
      }
      ctx.lineTo(0, height);

      // Левая сторона
      ctx.lineTo(0, height / 2 + tabSize);
      if (shape.left !== 0) {
        ctx.quadraticCurveTo(
          -tabSize * shape.left,
          height / 2,
          0,
          height / 2 - tabSize
        );
      }
      ctx.lineTo(0, 0);

      ctx.closePath();
    };
    img.onerror = function () {
      console.error('Ошибка загрузки изображения');
    };
    const chars = text.split('');
    const element = textRef.current as unknown as HTMLElement;

    // Создаем спаны для каждого символа
    element.innerHTML = chars
      .map((char) => `<span style="opacity: 0;">${char}</span>`)
      .join('');

    // Получаем список всех спанов
    const spans = element.querySelectorAll('span');

    // Используем таймлайн для последовательной анимации появления каждого символа
    const tl = gsap.timeline({ delay: 10 });
    spans.forEach((span) => {
      tl.to(span, { opacity: 1, duration: 0.1, ease: 'none' });
    });
     if (subtextRef.current) {
       tl.to(subtextRef.current, { opacity: 1, duration: 0.1, ease: 'none' });
     }
  }, [text]);

  return (
    <div
      style={{
        position: 'relative',
        width: imageSize.width,
        height: imageSize.height
      }}
    >
      {pieces.map((piece, index) => (
        <PuzzlePiece
          key={index}
          image={piece.image}
          x={piece.x}
          y={piece.y}
          width={piece.width}
          height={piece.height}
        />
      ))}
      <div ref={textRef} className={styles.title} />
      <div ref={subtextRef} className={styles.subtitle}>
        Мария Говорухина
      </div>
    </div>
  );
};

export default PuzzleCanvas;
