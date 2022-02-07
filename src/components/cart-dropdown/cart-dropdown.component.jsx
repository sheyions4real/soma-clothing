import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';


import './cart-dropdown.styles.scss'

const CartDropdown = ({cartItems}) =>(
<div className="cart-dropdown">
    <div className="cart-items">
        {
            cartItems.map(item => (
                <CartItem key={item.id} item={item} />
            ))
        }
    </div>
    <Button>CHECKOUT</Button>
</div>
);


// const mapStateToProps =({cart:{cartItems}}) =>({
//     cartItems
// })

// fixing memolization with reselect library and selectors functions
const mapStateToProps =createStructuredSelector({
    cartItems:selectCartItems
})

export default connect(mapStateToProps)(CartDropdown);