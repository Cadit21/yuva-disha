// Import the functions you need from the SDKs you need



// Initialize Firebase
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyDBrDYHbSnVu8hQtH6iHI2IzTKUsb3Kt5U",
  authDomain: "yuva-disha-7eb10.firebaseapp.com",
  projectId: "yuva-disha-7eb10",
  storageBucket: "yuva-disha-7eb10.appspot.com",
  messagingSenderId: "1002850207790",
  appId: "1:1002850207790:web:5fd8d8e4cb5157fc9377bf",
  measurementId: "G-Z1GWJD0H6X"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth();

export const createUserDocument = async (collectionName, data) => {
  try {
    const docRef = await addDoc(collection(firestore, collectionName), data);
    console.log("Document written with ID: ", docRef.id);
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};

export{auth, app,firestore};