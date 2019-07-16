import React from 'react'
import PropTypes from 'prop-types'

import './MenuItem.styles.scss'

const MenuItem = ({ title, imageUrl, size }) => (
    <div
      className={`${size} menu-item`}
      
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`, 
        }} 
      /> 
      <div className="content">
        <div className="title">{title}</div>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
)

export default MenuItem

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  size: PropTypes.string,
}

MenuItem.defaultProps = {
  size: '',
}