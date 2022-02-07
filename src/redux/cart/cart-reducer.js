import { CartDropdownTypes } from "./cart.types";
import { addItemToCart } from "./cart.utils";

// you can call the fetch api to get the initial state from database 
// if the state is stored in db
const INITIAL_STATE ={
    hidden:true,
    cartItems:[]
}

const CartReducer  =(state=INITIAL_STATE, action)=>{
    switch(action.type)
    {
        case CartDropdownTypes.TOGGLE_CART_DROPDOWN_HIDDEN:
            return ({
                ...state,
                hidden: !state.hidden
            })
        case CartDropdownTypes.ADD_ITEM:
            return({
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload) // setting the cart items to the previous cartItems state and adding the new payload from the action to the cartItem
            });
      default:
          return state;
    }

}

export default CartReducer;