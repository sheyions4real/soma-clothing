import React from 'react';

import './button.styles.scss';


const Button = ({ googleButton,children, inverted ,...otherProps}) =>(
    <button className={`${inverted? 'inverted': ''} ${googleButton? 'google-button': ''} custom-button` } {...otherProps} >
        {children}
    </button>
);

export default Button;