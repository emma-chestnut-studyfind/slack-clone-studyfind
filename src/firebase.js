import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCUl2CylOFesUwpnvcyIMRgEkFlKwLvdrQ",
    authDomain: "slack-clone-studyfind.firebaseapp.com",
    projectId: "slack-clone-studyfind",
    storageBucket: "slack-clone-studyfind.appspot.com",
    messagingSenderId: "734916629165",
    appId: "1:734916629165:web:18430ca79c26c9913f6c24"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };