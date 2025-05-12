import { createContext, useContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { Map } from "immutable";
import { auth } from "../firebase";

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const [cart, setCart] = useState(Map());

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                console.log("Have a user");
            } else {
                setUser(null);
                console.log("Do not have a user");
            }
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <StoreContext.Provider value={{ user, setUser, cart, setCart }}>
            {children}
        </StoreContext.Provider>
    )
}

export const useStoreContext = () => {
    return useContext(StoreContext);
}
