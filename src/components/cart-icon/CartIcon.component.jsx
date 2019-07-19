import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import './CartIcon.styles.scss'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

const CartIcon = ({ toggleCartHidden }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
)

const mapStateToProps = state => ({
  
})

const mapDispatchToProps = {
  toggleCartHidden,
}


export default connect(null, mapDispatchToProps)(CartIcon)

CartIcon.propTypes = {
  CartIcon: PropTypes.func,
}
