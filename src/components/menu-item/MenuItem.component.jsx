import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

import './MenuItem.styles.scss'

const MenuItem = ({
  title, imageUrl, size, linkUrl, history, match,
}) => (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
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

export default withRouter(MenuItem)

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
  size: PropTypes.string,
}

MenuItem.defaultProps = {
  size: '',
}