import React, { useContext } from 'react';
import { MyContext, MyContextType } from '@/app/context';

export default function Main({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const context = useContext(MyContext);

  if (!context) {
    // Если контекст не определен
    return null;
  }

  const { isLight, setIsLight } = context as MyContextType;

  return (
    <div
      style={{
        backgroundColor: isLight ? 'rgb(196, 238, 252)' : '#33CEC3',
      }}
    >
      {children}
    </div>
  );
}
