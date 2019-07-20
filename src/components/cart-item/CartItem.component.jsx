import React from 'react'
import PropTypes from 'prop-types'

import './CartItem.styles.scss'

const CartItem = ({
  item: {
    imageUrl, price, name, quantity, 
  }, 
}) => {
  let i
  return (
    <div className="cart-item">
      <img src={imageUrl} alt=" cart item" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">{quantity}x ${price}</span>
      </div>
    </div>
  )
}

export default CartItem

CartItem.propTypes = {
  item: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
}