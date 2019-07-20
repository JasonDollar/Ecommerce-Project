import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import './CartDropdown.styles.scss'

import CustomButton from '../custom-button/CustomButton.component'
import CartItem from '../cart-item/CartItem.component'

const CartDropdown = ({ cartItems }) => console.log(cartItems) || (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map(item => <CartItem key={item.id} item={item} />)}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
)

const mapStateToProps = ({ cart }) => ({
  cartItems: cart.cartItems,
})



export default connect(mapStateToProps)(CartDropdown)

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