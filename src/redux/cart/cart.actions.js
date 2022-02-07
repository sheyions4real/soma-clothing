import { CartDropdownTypes } from "./cart.types";

export const toggleCardDropDownHidden = ()=>({
    type:CartDropdownTypes.TOGGLE_CART_DROPDOWN_HIDDEN,
    //no need to pass a payload since we are just toggling the state.hidden in thr reducer function
});