// react router
import { Link } from "react-router-dom";

// context
import { useAuth } from "../../context/authContext/useAuth";

// css
import styles from './homePage.module.css';

export function HomePage() {
    const { isAuth, clearAuth } = useAuth();

    const handleOnClickLogout = () => {
        clearAuth();
    }

    return (
        <div className={styles.wrap}>
            <h1 className={styles.title}>
                Welcome!
            </h1>
            <p className={styles.text}>
                This is the home page. {isAuth && (<>You have been authenticated. Go to <Link to="/me">your</Link> page to view details.</>)}
            </p>
            <div className={styles.inner}>
            </div>
        </div>
    )
}