import { createContext, useContext } from "react";

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  return (
    <StoreContext.Provider value={{}}>
      {children}
    </StoreContext.Provider>
  );
}

export const useStoreContext = () => {
  return useContext(StoreContext);
}
