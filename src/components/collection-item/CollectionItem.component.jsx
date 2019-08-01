import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addItem } from '../../redux/cart/cart.actions'
import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer,
} from './CollectionItem.styles'

const CollectionItem = ({
  item, addItem,
}) => {
  const { 
    id, name, price, imageUrl,
  } = item
  return (
    <CollectionItemContainer>
      <BackgroundImage className="image" imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => addItem(item)} inverted>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
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
