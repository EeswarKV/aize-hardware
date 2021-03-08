import {createSelector} from 'reselect';

const selectCart = state => state.cart;

//return total cart items added
export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

//return total count in the cart
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulatedQuantity, cartItem) => 
        accumulatedQuantity+cartItem.quantity,0)
);

//return items price based on the quantity
export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulatedQuantity, cartItem) => 
        accumulatedQuantity+cartItem.quantity * cartItem.price,0)
);
