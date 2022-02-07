import React from 'react';

// import the reducers acttion and the connect
import { connect } from 'react-redux';
import { addItemToCart } from '../../redux/cart/cart.actions';

import './collection-item.styles.scss';
import Button from '../button/button.component';

const CollectionItem = ({item, addItemToCart})=>{
    
    const { name, price, imageUrl} = item;

    return(


    <div className='collection-item'>
        <div className="image" 
        style={{
            backgroundImage:`url(${imageUrl})`
        }} />

        <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="name">{price}</span>
        </div>
        <Button onClick={()=>{addItemToCart(item)}}  inverted> Add to cart </Button>
    </div>
        
)}


// initiate the reducer action  and pass the action as prop to the conponent and call the action on an event to set the state by firing the reducer function
const mapDispatchToProps =(dispatch)=>({
    addItemToCart: (item)=> dispatch(addItemToCart(item))
})


export default connect(null, mapDispatchToProps)(CollectionItem)