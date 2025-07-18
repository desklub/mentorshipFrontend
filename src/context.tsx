import React, { type ReactNode } from "react";
import { createContext, useContext } from "react";

interface ShopcontextType {
  backendUrl: string;
}
export const ShopContext = createContext<ShopcontextType | undefined>(
  undefined
);

interface ShopContextProviderProps {
  children: ReactNode;
}
const ShopContextProvider: React.FC<ShopContextProviderProps> = (props) => {
  const backendUrl = "https://mentorshipbankend.onrender.com";
  const Value: ShopcontextType = {
    backendUrl,
  };
  return (
    <ShopContext.Provider value={Value}>{props.children}</ShopContext.Provider>
  );
};

export const useShopContext = () => {
  return useContext(ShopContext);
};

export default ShopContextProvider;
