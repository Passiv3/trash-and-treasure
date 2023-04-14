import React from 'react'
import { useRouteError } from 'react-router-dom';

import './errorPage.css'

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return(
        <div id="error-page">
            <h1>Oh Noez!</h1>
            <p>We can't find what you're looking for, please navigate back!</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <img class="cat-pic" src = "https://images.pexels.com/photos/127028/pexels-photo-127028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        </div>
    );
}

export default ErrorPage;
