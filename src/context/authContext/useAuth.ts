import { useContext } from "react";
import { AuthContext } from "./AuthContext";

export function useAuth() {
    const value = useContext(AuthContext);

    if (!value) {
        throw new Error('useAuth has to be used within <AuthContext.Provider>');
    }

    return value
}