
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "react-firebase-redux-d7e36.firebaseapp.com",
  projectId: "react-firebase-redux-d7e36",
  storageBucket: "react-firebase-redux-d7e36.appspot.com",
  messagingSenderId: "458599977322",
  appId: "1:458599977322:web:03e5f35cfd0cbe3ef01513"
});

export const auth = app.auth();
export default app;
