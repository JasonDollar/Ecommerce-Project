import actionTypes from './cart.types'
import { addItemToCart } from './cart.utils'

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
    default:
      return state
  }
}
