import actionsTypes from './shop.types'

const initialState = {
  collections: {},
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case actionsTypes.UPDATE_COLLECTIONS:
      return { 
        ...state, 
        collections: payload, 
      }

    default:
      return state
  }
}
