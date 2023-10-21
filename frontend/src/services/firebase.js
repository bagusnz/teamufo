import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";

var firebaseConfig = {
    apiKey: "AIzaSyCS2y4uq4MPeyCNswIrFJFnY6TfDEYnMoA",
    authDomain: "collabothon23fra-1257.firebaseapp.com",
    projectId: "collabothon23fra-1257",
    storageBucket: "gs://collabothon23fra-1257.appspot.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export const db = getFirestore();

// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);