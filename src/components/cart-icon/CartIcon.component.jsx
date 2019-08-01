import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'
import {
  CartContainer,
  ShoppingIcon,
  ItemCountContainer,
} from './CartIcon.styles'


const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <CartContainer onClick={toggleCartHidden}>
    <ShoppingIcon />
    <ItemCountContainer>{itemCount}</ItemCountContainer>
  </CartContainer>
)

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
})

const mapDispatchToProps = {
  toggleCartHidden,
}


export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)

CartIcon.propTypes = {
  toggleCartHidden: PropTypes.func.isRequired,
  itemCount: PropTypes.number,
}

CartIcon.defaultProps = {
  itemCount: 0,
}