import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import PropTypes from 'prop-types'

import MenuItem from '../menu-item/MenuItem.component'
import { DirectoryMenuContainer } from './Directory.styles'
import { selectDirectorySections } from '../../redux/directory/directory.selectors'

const Directory = ({ sections }) => (
    <DirectoryMenuContainer>
      {sections.map(({
        id, ...otherSectionProp
      }) => <MenuItem key={id} {...otherSectionProp} />)}
    </DirectoryMenuContainer>
)

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
})

export default connect(mapStateToProps)(Directory)

Directory.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    size: PropTypes.string,
    id: PropTypes.number.isRequired,
    linkUrl: PropTypes.string.isRequired,
  })).isRequired,
}