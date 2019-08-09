import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { updateCollections } from '../../redux/shop/shop.actions'
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview.component'
import CollectionPage from '../collection/Collection.component'
import WithSpinner from '../../components/with-spinner/WithSpinner.component'

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

const ShopPage = ({ match, updateCollections }) => {
  const [loading, toggleLoading] = useState(true)
  useEffect(() => {
    const collectionRef = firestore.collection('collection')
    collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
      updateCollections(collectionsMap)
      toggleLoading(false)
    })
  }, [])
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} render={props => <CollectionsOverviewWithSpinner {...props} isLoading={loading} />} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} render={props => <CollectionPageWithSpinner {...props} isLoading={loading} />} />
    </div>
  )
}

export default connect(null, { updateCollections })(ShopPage)

ShopPage.propTypes = {
  match: PropTypes.object.isRequired,
  updateCollections: PropTypes.func.isRequired,
}