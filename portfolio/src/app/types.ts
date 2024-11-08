export interface PieceShape {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

export  interface PuzzlePieceProps {
  image: HTMLCanvasElement;
  x: number;
  y: number;
  width: number;
  height: number;
}
export interface MenuItem {
  id: number;
  label: string;
  url: string;
}
export interface CardProps {
  filterColor?: string;
  frontImage: string;
  backImage: string;
  text: string;
}
export interface dataProps {
  url: string;
  title: string;
  text: string;
}
