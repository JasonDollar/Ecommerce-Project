import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { createStructuredSelector } from 'reselect'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import './CartDropdown.styles.scss'

import CustomButton from '../custom-button/CustomButton.component'
import CartItem from '../cart-item/CartItem.component'

const CartDropdown = ({ cartItems, history }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      { cartItems.length
        ? cartItems.map(item => <CartItem key={item.id} item={item} />)
        : <span className="empty-message">Your cart is empty</span>
      }
    </div>
    <CustomButton onClick={() => history.push('/checkout')}>GO TO CHECKOUT</CustomButton>
  </div>
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