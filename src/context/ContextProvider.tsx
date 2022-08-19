import { ReactElement } from 'react';
import { useStorage } from '../hooks/useStorage';
import { Context } from '../context/Context';

type Props = {
    children: ReactElement
};

export const ContextProvider = ({ children }: Props) => {
    const initialValue = {
        isAuth: true,
    };
    const { value, setItem } = useStorage('auth', initialValue)

    return (
        <Context.Provider value={{ value, setItem }}>
            {children}
        </Context.Provider>
    );
};