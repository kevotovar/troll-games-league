import { createStore, compose } from 'redux'
import { reactReduxFirebase } from 'react-redux-firebase'
import { reduxFirestore } from 'redux-firestore'

import firebase from 'lib/firebase'
import reducers from './reducers'

const rrConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true,
}

const createStoreWithFirebase = compose<any>(
  reactReduxFirebase(firebase, rrConfig),
  reduxFirestore(firebase)
)(createStore)

const initialState = {}

const store = createStoreWithFirebase(
  reducers,
  initialState,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
