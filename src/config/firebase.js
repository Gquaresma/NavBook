import firebase from 'firebase'
import 'firebase/storage'


export const firebaseConfig = firebase.initializeApp({
    apiKey: `${process.env.REACT_APP_API_KEY}`,
    authDomain: "navbook-7258b.firebaseapp.com",
    projectId: "navbook-7258b",
    storageBucket: "navbook-7258b.appspot.com",
    messagingSenderId: "647892815542",
    appId: "1:647892815542:web:899b2e2e88d5eb9e42e017",
    measurementId: "G-TN3J9FSMXT"
});