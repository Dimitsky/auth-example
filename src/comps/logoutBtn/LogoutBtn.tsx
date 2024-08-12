import { useAuth } from "../../context/authContext/useAuth"

export function LogoutBtn() {
    const { clearAuth } = useAuth();

    // handlers
    const handleOnClickLogout = () => {
        clearAuth();
    }

    return (
        <button onClick={handleOnClickLogout}>
            logout
        </button>
    )
}