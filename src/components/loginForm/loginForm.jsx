import React from 'react';

import './loginForm.css';

const LoginForm = () => {
    return(
        <form className = "login-form">
            <fieldset>
                <legend>Login</legend>
                <label htmlFor="username">Username: </label>
                <input type="text" name="username"></input>
                <label htmlFor = "password">Password: </label>
                <input type="password" name="password"></input>
                <input type="submit" value="Login"></input>
            </fieldset>
        </form>
    );
}

export default LoginForm;