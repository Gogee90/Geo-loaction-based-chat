import firebase from 'firebase'
import firestore from 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyCtDitY9qiMd3bCrOqf8-CGbWy61EAf_BI",
    authDomain: "udemy-geo-ninjas-b187a.firebaseapp.com",
    databaseURL: "https://udemy-geo-ninjas-b187a.firebaseio.com",
    projectId: "udemy-geo-ninjas-b187a",
    storageBucket: "udemy-geo-ninjas-b187a.appspot.com",
    messagingSenderId: "769214343306",
    appId: "1:769214343306:web:40efb1f90e4b61cb1d6573"
};
  // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore()

export default db
