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
        <div className="front-page-container">
            <Card title="He" image-link="" image-description=""/>
        </div>
    );
}

export default FrontPage;