// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app"; // TODO: Add SDKs for Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
// import {getAuth} from "@firebase/auth";
import {getFirestore} from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAecf3T34TALeMy87Ox2yjIFQA2GDLihbk",
  authDomain: "elderease-c3296.firebaseapp.com",
  projectId: "elderease-c3296",
  storageBucket: "elderease-c3296.appspot.com",
  messagingSenderId: "135610693157",
  appId: "1:135610693157:web:1817373fe6cabc143d71cc",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
// export const auth = getAuth(firebaseApp);
export const firestore = getFirestore(firebaseApp);
