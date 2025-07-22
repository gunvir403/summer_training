import { createContext } from "react";

export const Context = createContext({

    cart: [],
    handleAddToCart: () => {},
    handleRemoveFromCart: () => {}
});