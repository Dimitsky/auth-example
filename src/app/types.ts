// Набор свойств пользователя, которое возвращается после входа 
export interface IMe {
    id: number;
    username: string
    email: string;
    firstName: string
    lastName: string
    gender: string
    image: string;
}

// Интерфейс для контекста аутентификации 
export interface IAuth {
    isAuth: boolean;
    accessToken: string;
    refreshToken: string;
    tokenExpires: number;
    setAuth: (accessToken: string, refreshToken: string) =>void;
    clearAuth: () => void;
}