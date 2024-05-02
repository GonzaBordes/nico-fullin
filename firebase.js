// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBMytCY2CicBY29iv4PBwzQrPACfm6mxQk",
    authDomain: "nico-fulin.firebaseapp.com",
    projectId: "nico-fulin",
    storageBucket: "nico-fulin.appspot.com",
    messagingSenderId: "386812849941",
    appId: "1:386812849941:web:1bc95a7a9040f14ca5831c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;