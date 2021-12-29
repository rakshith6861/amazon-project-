import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCYFfUOgmDJMdWpXHL0Y2fw-bFjU9y1VqU",
    authDomain: "clone-e27ea.firebaseapp.com",
    databaseURL: "https://clone-e27ea.firebaseio.com",
    projectId: "clone-e27ea",
    storageBucket: "clone-e27ea.appspot.com",
    messagingSenderId: "562556535197",
    appId: "1:562556535197:web:71b9b1e93a1afd2fa36f74",
    measurementId: "G-M8B39CSZK7"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth};