import CartActionTypes from './cart.types';

//managing state of an item added to the cart
export const addItem = item =>({
    type:CartActionTypes.ADD_ITEM,
    payload:item
})

//removing the item which already added to the cart
export const clearItemFromCart = item =>({
    type:CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload:item
})

//decrease the quantity one by one and remove completely if zero
export const removeItem = item =>({
    type:CartActionTypes.REMOVE_ITEM,
    payload:item
})