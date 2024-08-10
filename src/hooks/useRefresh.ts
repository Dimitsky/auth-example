import { useState } from "react";
import { ILoginResponse } from "../app/types";
import { useAuth } from "../context/authContext/useAuth";
import { BASE_URL } from "../app/consts";

const URL = '/auth/refresh';

type RefreshFn = (expiresInMins?: number) => Promise<ILoginResponse>
type UseRefresh = [
    RefreshFn, 
    { data: ILoginResponse | null, error: string | null, isPending: boolean }, 
]

export function useRefresh(): UseRefresh {
    const [ data, setData ] = useState<ILoginResponse | null>(null);
    const [ error, setError ] = useState<string | null>(null);
    const [ isPending, setIsPending ] = useState(false);
    const { refreshToken, setAuth, clearAuth } = useAuth();

    const refresh: RefreshFn = async (expiresInMins) => {
        const options = {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json', 
            }, 
            body: JSON.stringify({
                refreshToken, 
                expiresInMins, 
            }), 
        }
        let fetchedData;

        setIsPending(true);

        try {
            const response = await fetch(BASE_URL + URL, options);

            if (response.ok) {
                fetchedData = await response.json();

                setData(fetchedData);
                setError(null);
                setAuth(fetchedData.token, fetchedData.refreshToken);
            } else {
                if (response.status === 401) {
                    clearAuth();

                    throw new Error('401, token refresh failed. Please relog your account');
                }

                if (response.status === 404) {
                    throw new Error('404, not found');
                }

                if (response.status === 500) {
                    throw new Error('500, internal server error');
                }
            }
        } catch (err) {
            console.error(err);

            if (err instanceof Error) {
                setError(err.message);
            } else if (typeof err === 'string') {
                setError(err);
            } else {
                setError('Unknown error');
            }
        } finally {
            setIsPending(false);
        }

        return fetchedData
    }

    return [
        refresh, 
        { data, error, isPending }, 
    ]
}