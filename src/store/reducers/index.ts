import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'
import ui from './ui/reducer'

const reducers = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  ui,
})

export default reducers
