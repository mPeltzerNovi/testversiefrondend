import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyCe_m5lDWb8efYy6oO3dxihrDIJHg5Wy7Y",
    authDomain: "messagesender-56cd4.firebaseapp.com",
    projectId: "messagesender-56cd4",
    storageBucket: "messagesender-56cd4.appspot.com",
    messagingSenderId: "793772570877",
    appId: "1:793772570877:web:65d172b4d680140b9a6694",
    measurementId: "G-2WGF1KGSEC"
};

//connect react frondend to firebase backend:
const firebaseApp = firebase.initializeApp(firebaseConfig);

//getting acces to the database:
const db = firebaseApp.firestore();


export default db;
