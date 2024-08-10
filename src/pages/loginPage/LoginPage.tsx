// react
import { useState } from "react"
import { useLogin } from "../../hooks/useLogin";
import { useAuth } from "../../context/authContext/useAuth";
import { Loader } from "../../comps/loader/Loader";
import { Link } from "react-router-dom";

export function LoginPage() {
    const [ username, setUsername ] = useState('');
    const [ usernameError, setUsernameError ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ passwordError, setPasswordError ] = useState('');
    const [ login, { error: loginError, isPending: isLoginPending } ] = useLogin();
    const { setAuth, isAuth } = useAuth();

    // handlers
    // Управляет полем имя пользователя
    const handleOnChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    }
    // Управляет полем пароль
    const handleOnChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }
    // Управляет отправкой формы
    const handleOnSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = await login(username, password, 1);

        if (data) {
            setAuth(data.token, data.refreshToken);
        }
    }

    if (loginError) {
        return (
            <div>
                <h2>
                    Error
                </h2>
                <p>
                    {loginError}
                </p>
            </div>
        )
    }

    if (isLoginPending) {
        return (
            <Loader />
        )
    }

    return(
        <div>
            <h1>
                Login
            </h1>
            {isAuth ? (
                <p>
                    Вы уже вошли в систему. Перейдите на <Link to="/me">личную</Link> страницу или <Link to="/">домашнюю</Link>. 
                </p>
            ) : (
                <div>
                    <div>
                        <p>
                            Используйте эти данные для входа. Полный список пользователей можно найти на <Link to="https://dummyjson.com/users">https://dummyjson.com/users</Link>
                        </p>
                        <h4>
                            Имя пользователя: <span>emilys</span>
                        </h4>
                        <h4>
                            Пароль: <span>emilyspass</span>
                        </h4>
                    </div>
                    <form onSubmit={handleOnSubmitForm}>
                        <div>
                            <label>Username</label>
                            <input 
                                type="text"
                                id="username"
                                name="username"
                                value={username}
                                onChange={handleOnChangeUsername}
                            />
                            <span>{usernameError}</span>
                        </div>
                        <div>
                            <label>Password</label>
                            <input 
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={handleOnChangePassword}
                            />
                            <span>{passwordError}</span>
                        </div>
                        <div>
                            <input 
                                type="submit"
                                id="submit"
                                name="submit"
                                value="Log in"
                            />
                        </div>
                    </form>
                </div>
            )}
        </div>
    )
}