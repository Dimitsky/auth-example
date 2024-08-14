// react route
import { Link } from 'react-router-dom';

// css
import styles from './userInfoExample.module.css';

export function UserInfoExample() {
    return (
        <div className={styles.wrap}>
            <p className={styles.text}>
                Use these details to login. A complete list of users can be found at <Link to="https://dummyjson.com/users">https://dummyjson.com/users</Link>
            </p>
            <h4 className={styles.title}>
                Username: <span className={styles.value}>emilys</span>
            </h4>
            <h4 className={styles.title}>
                Password: <span className={styles.value}>emilyspass</span>
            </h4>
        </div>
    );
}