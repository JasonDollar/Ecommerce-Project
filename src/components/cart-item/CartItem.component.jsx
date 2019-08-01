import React from 'react'
import PropTypes from 'prop-types'

import {
  CartItemContainer,
  ItemDetailsContainer,
  CartItemImage,
} from './CartItem.styles'

const CartItem = ({
  item: {
    imageUrl, price, name, quantity, 
  }, 
}) => {
  let i
  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt="item" />
      <ItemDetailsContainer>
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetailsContainer>
    </CartItemContainer>
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