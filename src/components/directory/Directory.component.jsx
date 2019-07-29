import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import PropTypes from 'prop-types'

import MenuItem from '../menu-item/MenuItem.component'
import './Directory.styles.scss'
import { selectDirectorySections } from '../../redux/directory/directory.selectors'

const Directory = ({ sections }) => (
    <div className="directory-menu">
      {sections.map(({
        id, ...otherSectionProp
      }) => <MenuItem key={id} {...otherSectionProp} />)}
    </div>
)

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
})

export default connect(mapStateToProps)(Directory)

Directory.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    linkUrl: PropTypes.string.isRequired,
  })).isRequired,
}