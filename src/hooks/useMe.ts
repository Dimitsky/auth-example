// react 
import { useEffect, useState } from 'react';

// type, context, consts
import { IUser } from '../app/types';
import { useAuth } from '../context/authContext/useAuth';
import { BASE_URL } from '../app/consts';

const URL = '/auth/me';

type UseMe = {
    data: IUser | null;
    error: string | null;
    isPending: boolean;
}

export function useMe(): UseMe {
    const [ data, setData ] = useState<IUser | null>(null);
    const [ error, setError ] = useState<string | null>(null);
    const [ isPending, setIsPending ] = useState(false);
    const { accessToken } = useAuth();

    useEffect(() => {
        let isIgnore = false;

        const fetchMe = async () => {
            const options = {
                method: 'GET', 
                headers: {
                    'Authorization': `Bearer ${accessToken}`, 
                }, 
            }

            setIsPending(true);

            try {
                const response = await fetch(BASE_URL + URL, options);

                if (response.ok) {
                    const fetchedData = await response.json();

                    if (!isIgnore) {
                        setData(fetchedData);
                        setError(null);
                    }
                } else {
                    if (response.status === 404) {
                        throw new Error('404, not found');
                    }

                    if (response.status === 500) {
                        throw new Error ('500, internal server error');
                    }

                    throw new Error(`${response.status}, ${response.statusText}`);
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
        }

        fetchMe();

        return () => {
            isIgnore = true;
        }
    }, []);

    return {
        data, 
        error, 
        isPending, 
    }
}