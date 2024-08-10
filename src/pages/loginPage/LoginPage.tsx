export function LoginPage() {
    return(
        <div>
            <h1>
                Login
            </h1>
            <form>
                <div>
                    <label>Username</label>
                    <input 
                        type="text"
                        id="username"
                        name="username"
                        // value={username}
                        // onChange={handleOnChangeUsername}
                    />
                    {/* <span>{usernameError}</span> */}
                </div>
                <div>
                    <label>Password</label>
                    <input 
                        type="password"
                        id="password"
                        name="password"
                        // value={password}
                        // onChange={handleOnChangePassword}
                    />
                    {/* <span>{passwordError}</span> */}
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
    )
}