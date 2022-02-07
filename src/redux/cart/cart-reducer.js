import { CartDropdownTypes } from "./cart.types";

const INITIAL_STATE ={
    hidden:true
}

const CartReducer  =(state=INITIAL_STATE, action)=>{
    switch(action.type)
    {
        case CartDropdownTypes.TOGGLE_CART_DROPDOWN_HIDDEN:
            return ({
                ...state,
                hidden: !state.hidden
            })
      default:
          return state;
    }

}

export default CartReducer;