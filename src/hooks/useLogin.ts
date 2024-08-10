// react
import { useState } from 'react';

// types, consts
import { ILoginResponse } from '../app/types';
import { BASE_URL } from '../app/consts';

const URL = '/auth/login';

type UseLogin = [
    (username: string, password: string, expiresInMins?: number) => Promise<ILoginResponse | undefined>, 
    { 
        data: ILoginResponse | null, 
        error: string | null, 
        isPending: boolean 
    }, 
]

export function useLogin(): UseLogin {
    const [ data, setData ] = useState<ILoginResponse | null>(null);
    const [ error, setError ] = useState<string | null>(null);
    const [ isPending, setIsPending ] = useState(false);

    const login = async (username: string, password: string, expiresInMins?: number): Promise<ILoginResponse | undefined> => {
        const options = {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json', 
            }, 
            body: JSON.stringify({
                username, 
                password, 
                expiresInMins
            }), 
        }
        let fetchedData;

        setIsPending(true);
        setData(null);

        try {
            const response = await fetch(BASE_URL + URL, options);

            if (response.ok) {
                fetchedData = await response.json();

                setData(fetchedData);
                setError(null);
            }
        } catch (err) {
            console.error(err);

            if (err instanceof Error) {
                setError(err.message);
            } else if (typeof err === 'string') {
                setError(err);
            } else {
                setError('Something went wrong');
            }
        } finally {
            setIsPending(false);
        }

        return fetchedData
    }

    return [
        login, 
        { 
            data, 
            error, 
            isPending 
        }, 
    ]
}