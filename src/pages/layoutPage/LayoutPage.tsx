// react router
import { Outlet } from 'react-router-dom';

export function LayoutPage() {
    return (
        <div>
            <Outlet />
        </div>
    )
}