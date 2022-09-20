import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCJ3AvEeiKsMKlvK8-RGmhDY7iEfNM1l1g",
    authDomain: "twitter-clone-7bbbd.firebaseapp.com",
    projectId: "twitter-clone-7bbbd",
    storageBucket: "twitter-clone-7bbbd.appspot.com",
    messagingSenderId: "553895448104",
    appId: "1:553895448104:web:23f0488242948ebb042f1d",
    measurementId: "G-4GQ9PF3JZ2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

export default db