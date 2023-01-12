import firebase from "firebase/app";
import 'firebase/database'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCoiX6JKdV9VTSRFWGCR5fqvcjY6pPZe-c",
  authDomain: "appfinancas-903a1.firebaseapp.com",
  databaseURL: "https://appfinancas-903a1-default-rtdb.firebaseio.com",
  projectId: "appfinancas-903a1",
  storageBucket: "appfinancas-903a1.appspot.com",
  messagingSenderId: "309684349861",
  appId: "1:309684349861:web:b9396ade1011d155cc964c",
  measurementId: "G-Y4XFTF91P9"
};
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}
export default firebase