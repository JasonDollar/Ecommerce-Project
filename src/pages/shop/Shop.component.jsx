import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { updateCollections } from '../../redux/shop/shop.actions'
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview.component'
import CollectionPage from '../collection/Collection.component'

const ShopPage = ({ match, updateCollections }) => {
  useEffect(() => {
    const collectionRef = firestore.collection('collection')
    collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
      updateCollections(collectionsMap)
    })
  }, [])
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  )
}

export default connect(null, { updateCollections })(ShopPage)

ShopPage.propTypes = {
  match: PropTypes.object.isRequired,
  updateCollections: PropTypes.func.isRequired,
}