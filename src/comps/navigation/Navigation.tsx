import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../context/authContext/useAuth";
import { LogoutBtn } from "../logoutBtn/LogoutBtn";

export function Navigation() {
    const location = useLocation();
    const { isAuth } = useAuth();
    
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">
                        home
                    </Link>
                </li>
                <li>
                    <Link to="/me">
                        user
                    </Link>
                </li>
                <li>
                    <Link to="/login">
                        login
                    </Link>
                </li>
                {isAuth && (
                    <li>
                        <LogoutBtn />
                    </li>
                )}
            </ul>
        </div>
    )
}