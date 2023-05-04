import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDy_jxTa9P18N2qpvycR0_biIqPMyOIkjE",
  authDomain: "vue-project-c422e.firebaseapp.com",
  projectId: "vue-project-c422e",
  storageBucket: "vue-project-c422e.appspot.com",
  messagingSenderId: "150837332711",
  appId: "1:150837332711:web:5c09dc3b21d20e199e3042"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };