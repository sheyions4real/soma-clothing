import React from 'react';
import { withRouter } from 'react-router-dom'; 

import './menu-item.styles.scss';

const MenuItem =({title, imageUrl , size, linkUrl, history,match})=>(

    // The history and match paraneter are automatically props for all component
    // when you use the withRouter to return an enhanced component
    // using export default withRouter(ComponentName) this makes the component access the history and match parameter
    // which comes with every route declared

    <div className={`${size} menu-item`} onClick={()=> history.push(`${match.url}${linkUrl}`)}>
        <div className='background-image' style={{ background: `url(${imageUrl})` }}></div>
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>  
);

export default withRouter(MenuItem);