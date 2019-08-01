import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { createStructuredSelector } from 'reselect'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import {
  CartDropdownContainer,
  CartDropdownButton,
  EmptyMessageContainer,
  CartItemsContainer,
} from './CartDropdown.styles'

import CustomButton from '../custom-button/CustomButton.component'
import CartItem from '../cart-item/CartItem.component'

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropdownContainer>
    <CartItemsContainer>
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
      )}
    </CartItemsContainer>
    <CartDropdownButton
      onClick={() => {
        history.push('/checkout')
        dispatch(toggleCartHidden())
      }}
    >
      GO TO CHECKOUT
    </CartDropdownButton>
  </CartDropdownContainer>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
})



export default withRouter(connect(mapStateToProps)(CartDropdown))

CartDropdown.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    }),
  ),
}

CartDropdown.defaultProps = {
  cartItems: [],
}