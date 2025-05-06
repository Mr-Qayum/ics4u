import { createContext, useContext, useState } from "react";
import { Map } from "immutable";

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
    const [email, setEmail] = useState("mrq@gmail.com");
    const [cart, setCart] = useState(Map());

    return (
        <StoreContext.Provider value={{ email, setEmail, cart, setCart }}>
            {children}
        </StoreContext.Provider>
    )
}

export const useStoreContext = () => {
    return useContext(StoreContext);
}