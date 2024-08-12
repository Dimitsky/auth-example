// react router
import { Link, useLocation } from "react-router-dom";

// context
import { useAuth } from "../../context/authContext/useAuth";

// comps
import { LogoutBtn } from "../logoutBtn/LogoutBtn";

// css
import styles from './navigation.module.css';

export function Navigation() {
    const location = useLocation();
    const { isAuth } = useAuth();
    
    return (
        <div className={styles.wrap}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link 
                        className={location.pathname === '/' ? styles.link + ' ' + styles.active : styles.link} 
                        to="/"
                    >
                        home
                    </Link>
                </li>
                <li className={styles.item}>
                    <Link 
                        className={location.pathname === '/me' ? styles.link + ' ' + styles.active : styles.link} 
                        to="/me"
                    >
                        user
                    </Link>
                </li>
                <li className={styles.item}>
                    <Link 
                        className={location.pathname === '/login' ? styles.link + ' ' + styles.active : styles.link} 
                        to="/login"
                    >
                        login
                    </Link>
                </li>
                {isAuth && (
                    <li className={styles.item}>
                        <LogoutBtn />
                    </li>
                )}
            </ul>
        </div>
    )
}