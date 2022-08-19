import { createContext } from "react";
import { TStorage } from "../types/types";

type TAuthContext = {
    value: {
        isAuth: boolean,
    },
    setItem: (item: TStorage) => void,
};

const ContextInitial: TAuthContext = {
    value: {
        isAuth: false,
    },
    setItem: () => {},
};

export const Context = createContext(ContextInitial);