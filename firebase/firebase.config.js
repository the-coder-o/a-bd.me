// firebase.js
import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyC4q02UQrZjEGTNbnLr70mkXO1ve3hnmtA',
  authDomain: 'blog-portfolio-25912.firebaseapp.com',
  projectId: 'blog-portfolio-25912',
  storageBucket: 'blog-portfolio-25912.appspot.com',
  messagingSenderId: '680155279334',
  appId: '1:680155279334:web:957533cda5461232f6b027',
  measurementId: 'G-3Q08HFK5RG',
}

firebase.initializeApp(firebaseConfig)

export default firebase
