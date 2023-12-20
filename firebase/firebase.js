import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyC-YraNWrlFwzma0Lcr4SqfdqDbGIczNFY',
  authDomain: 'my-blog-94557.firebaseapp.com',
  projectId: 'my-blog-94557',
  storageBucket: 'my-blog-94557.appspot.com',
  messagingSenderId: '292801555622',
  appId: '1:292801555622:web:05007208dfbc839b675867',
  measurementId: 'G-4MS8D37Q1L',
}
const firebaseApp = initializeApp(firebaseConfig)

export { firebaseApp }
