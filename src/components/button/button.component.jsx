import React from 'react';

import './button.styles.scss';


const Button = ({ googleButton,children, ...otherProps}) =>(
    <button className={`${googleButton? 'google-button': ''} custom-button` } {...otherProps} >
        {children}
    </button>
);

export default Button;