import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBMcTpvgtMOzvZ6UDLu-_4rkqajUCn6osg",
    authDomain: "ics4u-bc248.firebaseapp.com",
    projectId: "ics4u-bc248",
    storageBucket: "ics4u-bc248.firebasestorage.app",
    messagingSenderId: "866941710677",
    appId: "1:866941710677:web:f83831fb1b3af84eb07fdc"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore }
