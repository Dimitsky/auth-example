// react 
import { createContext } from 'react';

// types 
import { IAuth } from '../../app/types';

// Контекст 
export const AuthContext = createContext<IAuth | null>(null);