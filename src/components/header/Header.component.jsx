import React from 'react'
import { Link } from 'react-router-dom' 
import './Header.styles.scss'
import { ReactComponent as Logo } from '../../assets/crown.svg'

const Header = () => (
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
    </div>
  </header>
)

export default Header
