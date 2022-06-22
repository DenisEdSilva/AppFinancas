import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAA3r8yd3jrFAlHM9pOUAiFnE7jvDMw4GM",
    authDomain: "appfinancas-54121.firebaseapp.com",
    projectId: "appfinancas-54121",
    storageBucket: "appfinancas-54121.appspot.com",
    messagingSenderId: "771668395459",
    appId: "1:771668395459:web:613c675b1b8acefcc7e976"
};

if (!firebase.apps.lenght) {
    firebase.initializeApp(firebaseConfig); 
}

export default firebase;

