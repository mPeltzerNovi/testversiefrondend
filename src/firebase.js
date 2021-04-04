import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyAqgEqfF5sz4McwUmBKG7oJqdw347ylBSU",
    authDomain: "additional-database.firebaseapp.com",
    projectId: "additional-database",
    storageBucket: "additional-database.appspot.com",
    messagingSenderId: "839418379434",
    appId: "1:839418379434:web:dd585f82ed94337de1e4d3",
    measurementId: "G-ZQW86K8CCG"
};

//connect react frondend to firebase backend:
const firebaseApp = firebase.initializeApp(firebaseConfig);

//getting acces to the database:
const db = firebaseApp.firestore();

//auth deel even mee-tikken, niet gebruiken:
//const auth = firebase.auth();
//const provider = new firebase.auth.GoogleAuthProvider();

//export { auth, provider };
export default db;