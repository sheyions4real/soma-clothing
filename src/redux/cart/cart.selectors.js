import {createSelector} from 'reselect';

const selectCart =  state => state.cart;

// this method returns all the cart items from the state
// the createSelector help to module this so the map to props in all our project does not rerender even when their state does not change
// this process is called memoization
export const selectCartItems = createSelector(
    [selectCart],
    cart=>cart.cartItems
)

// return the cart hidden state property
export const selectCartHidden = createSelector(
[selectCart],
cart => cart.hidden
);


export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumatedQuantity, cartItem)=> accumatedQuantity + cartItem.quantity,0)
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems =>
      cartItems.reduce(
        (accumalatedQuantity, cartItem) =>
          accumalatedQuantity + cartItem.quantity * cartItem.price,
        0
      )
  );