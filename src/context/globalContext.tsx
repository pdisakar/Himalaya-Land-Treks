"use client";
import { createContext, useContext, ReactNode } from "react";

type GlobalDataValue = {
  globalData?: any;
  optionsData?: any;
};

const GlobalDataContext = createContext<GlobalDataValue>({});

interface GlobalDataProviderProps {
  children: ReactNode;
  globalData?: any;
  optionsData?: any;
}

export const GlobalDataProvider = ({ children, globalData, optionsData }: GlobalDataProviderProps) => {
  return (
    <GlobalDataContext.Provider value={{ globalData, optionsData }}>
      {children}
    </GlobalDataContext.Provider>
  );
};

export const useGlobalData = () => useContext(GlobalDataContext);
