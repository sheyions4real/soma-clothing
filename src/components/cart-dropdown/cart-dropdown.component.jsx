import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCardDropDownHidden } from '../../redux/cart/cart.actions';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import { withRouter } from 'react-router-dom';

import './cart-dropdown.styles.scss'

const CartDropdown = ({cartItems, history, dispatch}) =>(
<div className="cart-dropdown">
    <div className="cart-items">
        {
            cartItems.length ?
            cartItems.map(item => (
                <CartItem key={item.id} item={item} />
            )) 
            : <span className="empty-message">Your cart is empty</span>
        }
    </div>
    <Button onClick={()=> {
        history.push('/checkout');
        dispatch(toggleCardDropDownHidden())}}>CHECKOUT</Button>
</div>
);


// const mapStateToProps =({cart:{cartItems}}) =>({
//     cartItems
// })

// fixing memolization with reselect library and selectors functions
const mapStateToProps =createStructuredSelector({
    cartItems:selectCartItems
})


// with the withRouter HOC it will automatically pass history as props to the component to enable history.push('/checkout') navigation
// if we dont supply mapDispatchToProps as the second parameter connect automatically pass a dispatch props to the component props
// just like the history props from the withRouter

export default withRouter(connect(mapStateToProps)(CartDropdown));