import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmoPpUE-P6KjEdKMamto9hPK_te9t-UP8",
  authDomain: "house-marketplace-app-7ba41.firebaseapp.com",
  projectId: "house-marketplace-app-7ba41",
  storageBucket: "house-marketplace-app-7ba41.appspot.com",
  messagingSenderId: "303551745821",
  appId: "1:303551745821:web:daf9052b4f8c706f74dbf4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();