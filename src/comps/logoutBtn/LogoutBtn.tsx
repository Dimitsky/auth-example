// context
import { useAuth } from "../../context/authContext/useAuth";

// css
import styles from './logout.module.css';

export function LogoutBtn() {
    const { clearAuth } = useAuth();

    // handlers
    const handleOnClickLogout = () => {
        clearAuth();
    }

    return (
        <button 
            className={styles.btn}
            onClick={handleOnClickLogout}
        >
            logout
        </button>
    )
}