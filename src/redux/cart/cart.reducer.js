import actionTypes from './cart.types'
import { addItemToCart, removeItemFromCart } from './cart.utils'

const initialState = {
  hidden: true,
  cartItems: [],
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case actionTypes.TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden }
    case actionTypes.ADD_ITEM:
      return { ...state, cartItems: addItemToCart(state.cartItems, payload) }
    case actionTypes.REMOVE_ITEM:
      return { ...state, cartItems: removeItemFromCart(state.cartItems, payload) }
    case actionTypes.CLEAR_ITEM_FROM_CART:
      return { 
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== payload.id),
      }
    default:
      return state
  }
}
