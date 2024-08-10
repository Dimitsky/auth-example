// react
import { PropsWithChildren } from "react";

// reatc router
import { Link } from "react-router-dom";

// context
import { useAuth } from "../context/authContext/useAuth";

// типа для PrivateRoute
type PrivateRouteProps = {}

export function PrivateRoute({ children }: PropsWithChildren<PrivateRouteProps>) {
    const { isAuth } = useAuth();

    return (
        <>
            {isAuth ? (
                <>
                    {children}
                </>
            ) : (
                <p>Вы не авторизованы. Перейдите на страницу <Link to='/login'>входа</Link> и пройдите аутентификацию.</p>
            )}
        </>
    )
}