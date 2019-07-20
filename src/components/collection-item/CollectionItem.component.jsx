import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import CustomButton from '../custom-button/CustomButton.component'
import { addItem } from '../../redux/cart/cart.actions'
import './CollectionItem.styles.scss'

const CollectionItem = ({
  item, addItem,
}) => {
  const { 
    id, name, price, imageUrl,
  } = item
  return (
  <div className="collection-item">
    <div
      className="image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
    <CustomButton onClick={() => addItem(item)} inverted>ADD TO CART</CustomButton>
  </div>
  )
}

const mapDispatchToProps = {
  addItem,
}


export default connect(null, mapDispatchToProps)(CollectionItem)

CollectionItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
  addItem: PropTypes.func.isRequired,
}
