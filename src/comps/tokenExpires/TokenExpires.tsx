import { useAuth } from "../../context/authContext/useAuth"

export function TokenExpires() {
    const { isAuth, tokenExpires } = useAuth();
    const date = String(new Date(tokenExpires));
    
    return (
        <>
            {isAuth && (
                <div>
                    <p>Your access token expires in <b>{date}</b></p>
                </div>
            )}
        </>
    )
}