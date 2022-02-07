import React from 'react';

import { connect } from 'react-redux';
import { toggleCardDropDownHidden } from '../../redux/cart/cart.actions';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss'

const CartIcon = ({ toggleCardDropDownHidden }) =>(
<div className="cart-icon" onClick={toggleCardDropDownHidden}>
     <ShoppingIcon className='shopping-icon'/>  
     <span className='item-count'>0</span>  
</div>
);


// initiate the cart reducer action function as pass it as props to the Cart icon Component
// with this initiated toggleCardDropDownHidden you can call the cart reducer action
const mapDispatchToProps =(dispatch) =>({
     toggleCardDropDownHidden: ()=> dispatch(toggleCardDropDownHidden())
});

export default connect(null, mapDispatchToProps)(CartIcon);