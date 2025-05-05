// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBMcTpvgtMOzvZ6UDLu-_4rkqajUCn6osg",
    authDomain: "ics4u-bc248.firebaseapp.com",
    projectId: "ics4u-bc248",
    storageBucket: "ics4u-bc248.firebasestorage.app",
    messagingSenderId: "866941710677",
    appId: "1:866941710677:web:f83831fb1b3af84eb07fdc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(firebaseConfig);
const firestore = getFirestore(firebaseConfig);

export { auth, firestore }
