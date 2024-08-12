// react
import { PropsWithChildren, useEffect } from "react";

// reatc router
import { Link } from "react-router-dom";

// context
import { useAuth } from "../context/authContext/useAuth";
import { useRefresh } from "../hooks/useRefresh";

// типа для PrivateRoute
type PrivateRouteProps = {}

export function PrivateRoute({ children }: PropsWithChildren<PrivateRouteProps>) {
    const { isAuth, tokenExpires } = useAuth();
    const [ refresh, { isPending: isRefreshing } ] = useRefresh();

    useEffect(() => {
        // Если токен устарел, то обновить его
        if (isAuth && Date.now() >= tokenExpires) {
            refresh(1);
        }
    }, [isAuth, tokenExpires, refresh]);

    if (isRefreshing) {
        return (
            <h1>
                Refreshing token...
            </h1>
        )
    }

    return (
        <>
            {isAuth ? (
                <>
                    {children}
                </>
            ) : (
                <p>
                    You are not authorized. Go to the <Link to='/login'>login</Link> page and authenticate.
                </p>
            )}
        </>
    )
}