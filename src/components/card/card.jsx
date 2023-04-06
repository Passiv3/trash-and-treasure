import React from 'react'
import Button from '../common/button';

import './card.css'

const Card = (props) => {
    return (
    <article className="card-container">
        <h2 className="card-title">PlaceHolder Text</h2>
        <img className="card-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Blue_Merle_Border_Collie._Female.jpg/1280px-Blue_Merle_Border_Collie._Female.jpg" alt="placeholder image"/>
        <div className = "button-container">
            <Button className = "trash-button" buttonText = {<span class="material-symbols-outlined">close</span>}></Button>
            <Button className = "treasure-button" buttonText = {<span class="material-symbols-outlined">check</span>}></Button>
        </div>
    </article>
    );
};

export default Card;