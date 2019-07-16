import React, { useState } from 'react'
import { SHOP_DATA } from './shop.data'
import CollectionPreview from '../../components/collection-preview/CollectionPreview.component'

const Shop = () => {
  const [collections] = useState(SHOP_DATA)
  console.log(collections)
  return (
    <div className="shop-page">
      {collections && collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  ) 
}

export default Shop
