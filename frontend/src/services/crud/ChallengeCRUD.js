import { collection, doc, addDoc, getDocs, setDoc, deleteDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export const createChallenge = async (challengeData) => {
  try {
    const challengeRef = collection(db, "challenges");
    await addDoc(challengeRef, challengeData);
  } catch (error) {
    console.error("Error creating challenge:", error);
  }
};

export const readChallenges = async () => {
  try {
    const challengesRef = collection(db, "challenges");
    const querySnapshot = await getDocs(challengesRef);

    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  } catch (error) {
    console.error("Error reading challenges:", error);
  }
};

export const readChallengeById = async (challengeId) => {
  try {
    const challengeRef = doc(db, "challenges", challengeId);
    const challengeDoc = await getDoc(challengeRef);

    if (challengeDoc.exists()) {
      console.log("Challenge ID:", challengeDoc.id);
      console.log("Challenge Data:", challengeDoc.data());
    } else {
      console.log("No challenge found with this ID.");
    }
  } catch (error) {
    console.error("Error reading challenge by ID:", error);
  }
};

export const updateChallenge = async (challengeId, updatedData) => {
  try {
    const challengeRef = doc(db, "challenges", challengeId);
    await setDoc(challengeRef, updatedData, { merge: true });
  } catch (error) {
    console.error("Error updating challenge:", error);
  }
};

export const deleteChallenge = async (challengeId) => {
  try {
    const challengeRef = doc(db, "challenges", challengeId);
    await deleteDoc(challengeRef);
  } catch (error) {
    console.error("Error deleting challenge:", error);
  }
};
