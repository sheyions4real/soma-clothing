// function to group items and update their quantity+1

export const addItemToCart =(cartItems, cartItemToAdd)=>{

    //search the cartItems if the cartItemToAdd id already exist in the cartItems
    const existingCartItem = cartItems.find(cartItem => cartItem.id ===cartItemToAdd.id);

    if(existingCartItem){
        //if found
        return cartItems.map(cartItem => 
            cartItem.id ===cartItemToAdd.id ? {...cartItem, quantity: cartItem.quantity+1}
            : cartItem 
            )
    }
    // if not found
    return [...cartItems, {...cartItemToAdd, quantity:1}]

}