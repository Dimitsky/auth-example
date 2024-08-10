// react router
import { useRouteError } from 'react-router-dom';

export function ErrorPage() {
    const routeError = useRouteError();

    return (
        <div>
            <h1>
                Error page
            </h1>
        </div>
    )
}