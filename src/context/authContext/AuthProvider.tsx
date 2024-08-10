// react
import { PropsWithChildren, useMemo, useState } from "react";

// context, types, consts
import { AuthContext } from './AuthContext';
import { IAuth } from "../../app/types";
import { LS_AUTH_KEY } from "../../app/consts";

const ls = localStorage.getItem(LS_AUTH_KEY);
let initialIsAuth = false,
    initialAccessToken = '',
    initialRefreshToken = '',
    initialTokenExpires = 0;

// Инициализируем состояние контекста данными из local storage 
if (ls) {
    try {
        const { accessToken, refreshToken } = JSON.parse(ls);

        initialIsAuth = true;
        initialAccessToken = accessToken;
        initialRefreshToken = refreshToken;
        initialTokenExpires = JSON.parse(atob(accessToken.split('.')[1])).exp * 1000;
    } catch (err) {
        console.error(err);
    }
}

// Тип провайдера контекста  
type AuthProviderProps = {}

// Провайдер контекста  
export function AuthProvider({ children }: PropsWithChildren<AuthProviderProps>) {
    const [ isAuth, setIsAuth ] = useState(initialIsAuth);
    const [ accessToken, setAccessToken ] = useState(initialAccessToken);
    const [ refreshToken, setRefreshToken ] = useState(initialRefreshToken);
    const [ tokenExpires, setTokenExpires ] = useState(initialTokenExpires);

    const setAuth = (accessToken: string, refreshToken: string) => {
        setIsAuth(true);
        setAccessToken(accessToken);
        setRefreshToken(refreshToken);
        setTokenExpires(JSON.parse(atob(accessToken.split('.')[1])).exp * 1000);

        localStorage.setItem(LS_AUTH_KEY, JSON.stringify({
            accessToken, 
            refreshToken, 
        }));
    }
    const clearAuth = () => {
        setIsAuth(false);
        setAccessToken('');
        setRefreshToken('');
        setTokenExpires(0);

        localStorage.removeItem(LS_AUTH_KEY);
    }

    const value: IAuth = useMemo(() => ({
        isAuth, 
        accessToken, 
        refreshToken, 
        tokenExpires, 
        setAuth, 
        clearAuth, 
    }), [
        isAuth, 
        accessToken, 
        refreshToken, 
        tokenExpires, 
        setAuth, 
        clearAuth, 
    ]);

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}