import React from 'react';

import './addForm.css';

const AddForm = () => {
    return (
    <form className = "add-form">
        <h2>Add an item!</h2>
        <section className="section" id="detail-section">
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" required></input>
            <label htmlFor="description">Description: </label>
            <textarea id="description" required></textarea>
            <label htmlFor="condition">Condition:</label>
            <select name="condition">
                <option value="">--Select a condition--</option>
                <option value="pristine">brand new</option>
                <option value="light wear">light wear</option>
                <option value="heavily used">heavily used</option>
            </select>
        </section>
        <section className="section" id="image-section">
            <input type="file"></input>
            <label htmlFor="image-desc">Briefly describe the image</label>
            <input id="image-desc" type="text"></input>
        </section>
        <input type="submit" value="submit"></input>
    </form>);
}

export default AddForm;