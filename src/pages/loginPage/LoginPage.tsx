// react
import { useState } from "react"

// react router
import { Link } from "react-router-dom";

// hooks
import { useLogin } from "../../hooks/useLogin";
import { useAuth } from "../../context/authContext/useAuth";

// comps
import { Loader } from "../../comps/loader/Loader";

// css
import styles from './login.module.css';
import { UserInfoExample } from "../../comps/userInfoExample/UserInfoExample";

export function LoginPage() {
    const [ username, setUsername ] = useState('');
    const [ usernameError, setUsernameError ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ passwordError, setPasswordError ] = useState('');
    const [ tokenExpiresInMins, setTokenExpiresInMins ] = useState('');
    const [ tokenExpiresInMinsError, SetTokenExpiresInMinsError ] = useState('');
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
    // Управляет полем срока годности токена 
    const handleOnChangetokenExpiresInMins = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTokenExpiresInMins(e.target.value);
    }
    // Управляет сбросом формы
    const handleOnCLickReset = () => {
        setUsername('');
        setPassword('');
        setTokenExpiresInMins('');
    }
    // Управляет отправкой формы
    const handleOnSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        let validationFailded = false;
        e.preventDefault();

        // Сбрасываем ошибки 
        setUsernameError('');
        setPasswordError('');
        SetTokenExpiresInMinsError('');

        // Очень простая валидация формы
        // Если не введен никнейм
        if (username === '') {
            setUsernameError('Enter your username');

            validationFailded = true;
        }

        // Если не введен пароль
        if (password === '') {
            setPasswordError('Enter your password');

            validationFailded = true;
        }

        // Если число меньше 1 и больше 60
        if (+tokenExpiresInMins < 1 || +tokenExpiresInMins > 60) {
            SetTokenExpiresInMinsError('The number must be from 1 to 60');

            validationFailded = true;
        }

        if (validationFailded) {
            return
        }

        const data = await login(username, password, +tokenExpiresInMins);

        if (data) {
            setAuth(data.token, data.refreshToken);
            handleOnCLickReset();
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
        <div className={styles.wrap}>
            <h1 className={styles.title}>
                Login
            </h1>
            {isAuth ? (
                <p className={styles.text}>
                    You are already logged in. Go to your <Link to="/me">personal</Link> or <Link to="/">home</Link> page.
                </p>
            ) : (
                <div className={styles.inner}>
                    <UserInfoExample />
                    <form 
                        className={styles.form}
                        noValidate
                        onSubmit={handleOnSubmitForm}
                    >
                        <div className={styles.group}>
                            <input 
                                className={styles.textField}
                                type="text"
                                id="username"
                                name="username"
                                placeholder="username"
                                value={username}
                                onChange={handleOnChangeUsername}
                            />
                            {usernameError && <span className={styles.error}>{usernameError}</span>}
                        </div>
                        <div className={styles.group}>
                            <input 
                                className={styles.textField}
                                type="password"
                                id="password"
                                name="password"
                                placeholder="password"
                                value={password}
                                onChange={handleOnChangePassword}
                            />
                            {passwordError && <span className={styles.error}>{passwordError}</span>}
                        </div>
                        <div className={styles.group}>
                            <input 
                                className={styles.textField}
                                type="number"
                                id="token-expires"
                                name="token-expires"
                                min={1}
                                max={60}
                                placeholder="Token expires in mins"
                                value={tokenExpiresInMins}
                                onChange={handleOnChangetokenExpiresInMins}
                            />
                            {tokenExpiresInMinsError && <span className={styles.error}>{tokenExpiresInMinsError}</span>}
                        </div>
                        <div className={styles.group + ' ' + styles.groupBtn}>
                            <input 
                                className={styles.btn + ' ' + styles.btnReset}
                                type="reset"
                                id="Reset"
                                name="Reset"
                                value="Reset form"
                                onClick={handleOnCLickReset}
                            />
                            <input 
                                className={styles.btn}
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