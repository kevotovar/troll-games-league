import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'
import 'firebase/functions'

firebase.initializeApp({
  apiKey: 'AIzaSyCVcGm2ckoN0onE4ER1PeBnG11veRdeblo',
  authDomain: 'troll-games.firebaseapp.com',
  databaseURL: 'https://troll-games.firebaseio.com',
  projectId: 'troll-games',
  storageBucket: '',
  messagingSenderId: '368703605461',
  appId: '1:368703605461:web:af9d2bdec8e6857a',
})

firebase.firestore()
firebase.functions()

export default firebase
