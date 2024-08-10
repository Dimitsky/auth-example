// react router
import { Link } from "react-router-dom";

export function HomePage() {
    return (
        <div>
            <h1>
                Welcome!
            </h1>
            <p>
                This is the home page.
            </p>
            {/* <div>
                {isAuht ? (
                    <button onClick={handleOnClickLogout}>
                        Logout
                    </button>
                ) : (
                    <>
                        <Link to="/login">
                            Log in
                        </Link>
                        <p>
                            You email address is {email}
                        </p>
                    </>
                )}
            </div> */}
        </div>
    )
}