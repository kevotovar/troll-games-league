import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const reducers = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
})

export default reducers
