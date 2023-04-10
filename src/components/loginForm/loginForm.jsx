import React from 'react';

import './loginForm.css';

const LoginForm = () => {
    return(
        <form className = "login-form">
            <fieldset className="login-set">
                <legend>Login</legend>
                <label htmlFor="username">Username: </label>
                <input type="text" name="username" required></input>
                <label htmlFor = "password">Password: </label>
                <input type="password" name="password" required></input>
                <input className="login-button" type="submit" value="Login"></input>
            </fieldset>
        </form>
    );
}

export default LoginForm;