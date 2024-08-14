// react router
import { Outlet } from 'react-router-dom';

// comps
import { Navigation } from '../../comps/navigation/Navigation';
import { TokenExpires } from '../../comps/tokenExpires/TokenExpires';

// css
import styles from './layout.module.css';

export function LayoutPage() {
    return (
        <div className={styles.container}>
            <Navigation />
            <TokenExpires />
            <Outlet />
        </div>
    )
}