import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCwf5IKExvbRTpO2i274o8dYICaTHd1D1c',
  authDomain: 'authentication-79a73.firebaseapp.com',
  databaseURL: 'https://authentication-79a73.firebaseio.com',
  projectId: 'authentication-79a73',
  storageBucket: 'authentication-79a73.appspot.com',
  messagingSenderId: '896361679394',
  appId: '1:896361679394:web:e71bbfeac713e6d357d87b',
};

// Initialize Firebase
firebase.initializeApp(config);

//export google function
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
