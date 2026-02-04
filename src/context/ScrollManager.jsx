import { createContext, useContext } from "react";
import { useScroll } from "@react-three/drei";

const ScrollContext = createContext(null);

export const ScrollProvider = ({ children }) => {
  const scroll = useScroll();
  return (
    <ScrollContext.Provider value={scroll}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useGlobalScroll = () => {
  const ctx = useContext(ScrollContext);
  if (!ctx) {
    console.warn("useGlobalScroll usado fuera de ScrollProvider");
  }
  return ctx;
};
