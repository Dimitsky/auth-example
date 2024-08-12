// context
import { useAuth } from "../../context/authContext/useAuth";

// css
import styles from './tokenExpires.module.css';

export function TokenExpires() {
    const { isAuth, tokenExpires } = useAuth();
    const date = String(new Date(tokenExpires));
    
    return (
        <>
            {isAuth && (
                <div className={styles.wrap}>
                    <p className={styles.text}>Your access token expires in <b className={styles.date}>{date}</b></p>
                </div>
            )}
        </>
    )
}