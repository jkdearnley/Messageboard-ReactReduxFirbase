import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCUazSohzZFD_NNoOMgG-HWVFRKSyIVIok",
    authDomain: "messageboard-reactreduxfirbase.firebaseapp.com",
    databaseURL: "https://messageboard-reactreduxfirbase.firebaseio.com",
    projectId: "messageboard-reactreduxfirbase",
    storageBucket: "messageboard-reactreduxfirbase.appspot.com",
    messagingSenderId: "1058682662872",
    appId: "1:1058682662872:web:f16284d7419676d9220cad"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);