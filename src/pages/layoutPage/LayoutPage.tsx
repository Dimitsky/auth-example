// react router
import { Outlet } from 'react-router-dom';

// comps
import { Navigation } from '../../comps/navigation/Navigation';

export function LayoutPage() {
    return (
        <div>
            <Navigation />
            <Outlet />
        </div>
    )
}