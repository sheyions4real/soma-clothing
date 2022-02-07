import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { toggleCardDropDownHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'; 


import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss'

const CartIcon = ({ toggleCardDropDownHidden,itemCount }) =>(
<div className="cart-icon" onClick={toggleCardDropDownHidden}>
     <ShoppingIcon className='shopping-icon'/>  
     <span className='item-count'>{itemCount}</span>  
</div>
);


// initiate the cart reducer action function as pass it as props to the Cart icon Component
// with this initiated toggleCardDropDownHidden you can call the cart reducer action
const mapDispatchToProps =(dispatch) =>({
     toggleCardDropDownHidden: ()=> dispatch(toggleCardDropDownHidden())
});


// the nomal way without memolization
// this way the mapStateToProps will be called when ever the global state changes 
// even if its not related to this component

// const mapStateToProps = ({cart:{cartItems}}) =>{
//    return{
//         itemCount: cartItems.reduce((accumatedQuantity,cartItem) => accumatedQuantity+cartItem.quantity,0)
//    }  
// }


// using memolization by the reselect package and the cart selectors
// the createStructuredSelector automaticall pass the state to the selectCartItemCount selector function
const mapStateToProps = createStructuredSelector({
     itemCount: selectCartItemsCount
   });
  

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);