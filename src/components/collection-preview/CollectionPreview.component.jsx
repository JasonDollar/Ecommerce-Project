import React from 'react'
import PropTypes from 'prop-types'

import './CollectionPreview.styles.scss'
import CollectionItem from '../collection-item/CollectionItem.component'

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title}</h1>
    <div className="preview">
      {items.filter((_, idx) => idx < 4).map(item => (
        <CollectionItem key={item.id} item={item} />
      ))}
    </div>
  </div>
)

export default CollectionPreview

CollectionPreview.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
}