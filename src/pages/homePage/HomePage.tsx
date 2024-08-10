// react router
import { Link } from "react-router-dom";

// context
import { useAuth } from "../../context/authContext/useAuth";

export function HomePage() {
    const { isAuth, clearAuth } = useAuth();

    const handleOnClickLogout = () => {
        clearAuth();
    }

    return (
        <div>
            <h1>
                Welcome!
            </h1>
            <p>
                This is the home page.
            </p>
            <div>
                {isAuth ? (
                    <>
                        <button onClick={handleOnClickLogout}>
                            Logout
                        </button>
                        <p>
                            You have been authenticated. Go to <Link to="/me">your</Link> page to view details.
                        </p>
                    </>
                ) : (
                    <>
                        <Link to="/login">
                            Log in
                        </Link>
                    </>
                )}
            </div>
        </div>
    )
}