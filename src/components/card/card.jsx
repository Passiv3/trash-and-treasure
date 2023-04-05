import React from 'react'
import Button from '../common/button';

import './card.css'

const Card = (props) => {
    return (
    <article className="card-container">
        <h2 className="card-title"></h2>
        <image></image>
        <Button className = "trash-button"></Button>
        <Button className = "treasure-button"></Button>
    </article>
    );
};

export default Card;