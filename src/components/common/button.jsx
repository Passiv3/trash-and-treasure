import React from 'react'

import './button.css'

const Button = (props) => {
    return (
    <button id="standard-button" className = {props.className}>
        {props.buttonText}
    </button>
    );
}

export default Button;