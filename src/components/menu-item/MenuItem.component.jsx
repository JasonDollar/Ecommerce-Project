import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle,
} from './MenuItem.styles'

const MenuItem = ({
  title, imageUrl, size, linkUrl, history, match,
}) => (
  <MenuItemContainer
    size={size}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <BackgroundImageContainer
      className="background-image"
      imageUrl={imageUrl}
    />
    <ContentContainer className="content">
      <ContentTitle>{title.toUpperCase()}</ContentTitle>
      <ContentSubtitle>SHOP NOW</ContentSubtitle>
    </ContentContainer>
  </MenuItemContainer>
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