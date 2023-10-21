import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";

// Function to check single attribute uniqueness
export const isSingleAttributeUnique = async (col, attribute, value) => {
    const docRef = collection(db, col);
    const q = query(docRef, where(attribute, "==", value));
    const querySnapshot = await getDocs(q);
    return querySnapshot.empty; // Returns true if attribute is unique, false if it already exists
};

// Function to check multiple attributes uniqueness
export const isMultipleAttributesUnique = async (col, attributeOne, attributeTwo, valueOne, valueTwo) => {
    const docRef = collection(db, col);
    const q = query(docRef, where(attributeOne, "==", valueOne), where(attributeTwo, "==", valueTwo));
    const querySnapshot = await getDocs(q);

    return querySnapshot.empty; // Returns true if attributes are unique, false if it already exists
};