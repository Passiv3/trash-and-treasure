import React from 'react';
import Card from '../components/card/card';
import MockData from '../mock-data.json';

import './pagestyles.css';

/*
    This will be responsible for loading data from the database into cards for display
*/
const FrontPage = () => {
    let itemData = MockData.items;
    return(
        <div className="main-content">
            <div className = "container">
                {itemData.map((item) => (<Card key={item.itemID} title={item.name} imageLink={item['image-link']}/>))}
                
            </div>
            
        </div>
    );
}

export default FrontPage;