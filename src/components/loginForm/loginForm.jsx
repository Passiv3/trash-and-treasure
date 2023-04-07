import React from 'react';

import './loginForm.css';

const LoginForm = () => {
    return(
        <form className = "login-form">
            <fieldset>
                <legend>Login</legend>
                <label for="username">Username: </label>
                <input type="text" name="username"></input>
                <label for = "password">Password: </label>
                <input type="password" name="password"></input>
            </fieldset>
        </form>
    );
}

export default LoginForm;