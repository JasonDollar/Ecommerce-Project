import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import './CheckoutItem.styles.scss'

import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions'

const CheckoutItem = ({
  cartItem, 
  clearItemFromCart,
  addItem,
  removeItem,
}) => {
  const { 
    name, imageUrl, price, quantity,
  } = cartItem
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>&#10094;</div>
          <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItemFromCart(cartItem)}>&#10005;</div>
    </div>
  )
}

const mapDispatchToProps = {
  clearItemFromCart,
  addItem,
  removeItem,
}

export default connect(null, mapDispatchToProps)(CheckoutItem)


CheckoutItem.propTypes = {
  cartItem: PropTypes.shape({
    name: PropTypes.string, 
    imageUrl: PropTypes.string, 
    price: PropTypes.number, 
    quantity: PropTypes.number,
  }).isRequired,
  clearItemFromCart: PropTypes.func.isRequired,
  addItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
}