import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCgkIrVhqzK3Q8SmskTAh43OtlgWnPafg8",
    authDomain: "netflix-cfe1f.firebaseapp.com",
    projectId: "netflix-cfe1f",
    storageBucket: "netflix-cfe1f.appspot.com",
    messagingSenderId: "291480290762",
    appId: "1:291480290762:web:3245ad2f7d8c814be57b33"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth }
export default db;