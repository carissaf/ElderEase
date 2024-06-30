// Import the functions you need from the SDKs you need
import "firebase/auth";
import "firebase/firestore";
import {initializeApp} from "firebase/app";
import {getReactNativePersistence, initializeAuth} from "firebase/auth";
import {getFirestore} from "@firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyAecf3T34TALeMy87Ox2yjIFQA2GDLihbk",
  authDomain: "elderease-c3296.firebaseapp.com",
  projectId: "elderease-c3296",
  storageBucket: "elderease-c3296.appspot.com",
  messagingSenderId: "135610693157",
  appId: "1:135610693157:web:1817373fe6cabc143d71cc",
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = initializeAuth(firebaseApp, {
  persistence: getReactNativePersistence(AsyncStorage),
});
const db = getFirestore(firebaseApp);

export { firebaseApp, auth, db };
