import React, { createContext, useState, ReactNode, FC } from 'react';

export interface MyContextType {
  isLight: boolean;
  setIsLight: (value: boolean) => void;
}

export const MyContext = createContext<MyContextType | undefined>(undefined);

interface MyContextProviderProps {
  children: ReactNode;
}

// Создаём провайдер
export const MyContextProvider: FC<MyContextProviderProps> = ({ children }) => {
  const [isLight, setIsLight] = useState<boolean>(true);

  return (
    <MyContext.Provider value={{ isLight, setIsLight }}>
      {children}
    </MyContext.Provider>
  );
};
