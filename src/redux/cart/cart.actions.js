import { CartDropdownTypes } from "./cart.types";


// the action to toggle the hidden state of cart
export const toggleCardDropDownHidden = ()=>({
    type:CartDropdownTypes.TOGGLE_CART_DROPDOWN_HIDDEN,
    //no need to pass a payload since we are just toggling the state.hidden in thr reducer function
});

// the action to add item to the cart
export const addItemToCart =(item)=>({
    type: CartDropdownTypes.ADD_ITEM,
    payload:item
});