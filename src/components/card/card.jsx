import React from 'react'
import Button from '../common/button';

import './card.css'

const Card = (props) => {
    return (
    <article className="card-container">
        <h2 className="card-title">{props.title}</h2>
        <img className="card-image" src= {props.imageLink ? props.imageLink : "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="} alt={props.imageDescription? props.imageDescription : "Description of image"}/>
        <div className = "button-container">
            <Button className = "trash-button" buttonText = {<span class="material-symbols-outlined">close</span>}></Button>
            <Button className = "treasure-button" buttonText = {<span class="material-symbols-outlined">check</span>}></Button>
        </div>
    </article>
    );
};

export default Card;