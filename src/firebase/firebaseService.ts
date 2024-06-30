import { auth, db } from "./firebaseConfig";
import { arrayRemove, arrayUnion, collection, doc, getDoc, getDocs, query, setDoc, updateDoc, where } from "firebase/firestore";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const checkUsernameExists = async (username: string) => {
  const userRef = collection(db, "users");
  const q = query(userRef, where("username", "==", username));
  const querySnapshot = await getDocs(q);
  return !querySnapshot.empty;
};

export const signIn = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
  }
};

export const logOut = async () => {
  await signOut(auth);
};

export const insertActivityButton = async (userId: string, activity: string) => {
  const userRef = doc(db, "users", userId);
  const userDoc = await getDoc(userRef);

  if (!userDoc.exists()) {
    throw new Error("User document not found");
  }

  await updateDoc(userRef, {
    activityButton: arrayUnion(activity),
  });
};

export const removeActivityFromButton = async (userId: string, activity: string) => {
  const userRef = doc(db, "users", userId);
  const userDoc = await getDoc(userRef);

  if (!userDoc.exists()) {
    throw new Error("User document not found");
  }

  await updateDoc(userRef, {
    activityButton: arrayRemove(activity),
  });
};
export const createUser = async (email: string, password: string, username: string) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;

  await setDoc(doc(db, "users", user.uid), {
    email: email,
    username: username,
    password: password,
    activityButton: [],
    emergencyCallList: [],
  });

  return user;
};
