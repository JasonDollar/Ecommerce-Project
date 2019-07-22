import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom' 
import { createStructuredSelector } from 'reselect'
import PropTypes from 'prop-types'
import { auth } from '../../firebase/firebase.utils'
import './Header.styles.scss'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import CartIcon from '../cart-icon/CartIcon.component'
import CartDropdown from '../cart-dropdown/CartDropdown.component'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors'


const Header = ({ currentUser, hidden }) => (
  <header className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link to="/shop" className="option">
        SHOP
      </Link>
      <Link to="/shop" className="option">
        CONTACT
      </Link>
      {
        currentUser 
          ? <div className="option" onClick={() => auth.signOut()}>Sign Out</div>
          : <Link className="option" to="/signin">Sign In</Link>
      }
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </header>
)

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
})

export default connect(mapStateToProps)(Header)

Header.propTypes = {
  currentUser: PropTypes.object,
  hidden: PropTypes.bool.isRequired,
}

Header.defaultProps = {
  currentUser: null,
}