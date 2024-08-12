// react router
import { Outlet } from 'react-router-dom';

// comps
import { Navigation } from '../../comps/navigation/Navigation';
import { TokenExpires } from '../../comps/tokenExpires/TokenExpires';

export function LayoutPage() {
    return (
        <div>
            <Navigation />
            <TokenExpires />
            <Outlet />
        </div>
    )
}