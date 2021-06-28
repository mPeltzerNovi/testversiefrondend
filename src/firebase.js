import firebase from "firebase";

//Let op dit is de code voor de eerste firebase-database. Omdat deze verliep moest ik een nieuwe maken. Zie onder
/*const firebaseConfig = {
    apiKey: "AIzaSyCe_m5lDWb8efYy6oO3dxihrDIJHg5Wy7Y",
    authDomain: "messagesender-56cd4.firebaseapp.com",
    projectId: "messagesender-56cd4",
    storageBucket: "messagesender-56cd4.appspot.com",
    messagingSenderId: "793772570877",
    appId: "1:793772570877:web:65d172b4d680140b9a6694",
    measurementId: "G-2WGF1KGSEC"
};*/

//Nieuwe firebase-database ivm verlopen eerste database eind mei
/*const firebaseConfig = {
    apiKey: "AIzaSyAxHRcEUcm_OszbrRibJXzkv9RW51YywYw",
    authDomain: "judith-ac214.firebaseapp.com",
    projectId: "judith-ac214",
    storageBucket: "judith-ac214.appspot.com",
    messagingSenderId: "431388111925",
    appId: "1:431388111925:web:8d938c8937737da1176d7c",
    measurementId: "G-1VFTJJV58J"
};*/

//Nieuwe firebase-database (project: "juli-2021") aangemaakt in zelfde firebase account 28-6-21
const firebaseConfig = {
    apiKey: "AIzaSyBonx1rQkYtS5JtQYuz34GIxqM8IHSvRKE",
    authDomain: "juli-2021.firebaseapp.com",
    projectId: "juli-2021",
    storageBucket: "juli-2021.appspot.com",
    messagingSenderId: "920320637044",
    appId: "1:920320637044:web:b40493512df8dab449b921",
    measurementId: "G-7721PNNZ0T"
};

//connect react frondend to firebase backend:
const firebaseApp = firebase.initializeApp(firebaseConfig);

//getting acces to the database:
const db = firebaseApp.firestore();


export default db;
