import { collection, doc, addDoc, getDocs, setDoc, deleteDoc, query, where } from "firebase/firestore";
import { db } from "../firebase";

export const createUserChallenge = async (userChallengeData) => {
  try {
    const userChallengeRef = collection(db, "userChallenges");
    await addDoc(userChallengeRef, userChallengeData);
  } catch (error) {
    console.error("Error creating user challenge:", error);
  }
};

export const readUserChallenges = async () => {
  try {
    const userChallengesRef = collection(db, "userChallenges");
    const querySnapshot = await getDocs(userChallengesRef);

    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  } catch (error) {
    console.error("Error reading user challenges:", error);
  }
};

export const readUserChallengesByUserId = async (userId) => {
  try {
    const userChallengesRef = collection(db, "userChallenges");
    const q = query(userChallengesRef, where("user_id", "==", userId));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  } catch (error) {
    console.error("Error reading user challenges by user ID:", error);
  }
};

export const readUserChallengesByChallengeId = async (challengeId) => {
  try {
    const userChallengesRef = collection(db, "userChallenges");
    const q = query(userChallengesRef, where("challenge_id", "==", challengeId));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  } catch (error) {
    console.error("Error reading user challenges by challenge ID:", error);
  }
};

export const updateUserChallenge = async (userChallengeId, updatedData) => {
  try {
    const userChallengeRef = doc(db, "userChallenges", userChallengeId);
    await setDoc(userChallengeRef, updatedData, { merge: true });
  } catch (error) {
    console.error("Error updating user challenge:", error);
  }
};

export const deleteUserChallenge = async (userChallengeId) => {
  try {
    const userChallengeRef = doc(db, "userChallenges", userChallengeId);
    await deleteDoc(userChallengeRef);
  } catch (error) {
    console.error("Error deleting user challenge:", error);
  }
};
