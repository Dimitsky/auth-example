// react
import { PropsWithChildren } from "react";

// reatc router
import { Link } from "react-router-dom";

// context
import { useAuth } from "../context/authContext/useAuth";

// css
import styles from './privateRoute.module.css';

// тип для PrivateRoute
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
                <p className={styles.text}>
                    You are not authorized. Go to the <Link to='/login'>login</Link> page and authenticate.
                </p>
            )}
        </>
    )
}