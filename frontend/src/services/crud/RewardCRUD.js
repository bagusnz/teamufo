import { collection, doc, addDoc, getDocs, setDoc, deleteDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { isSingleAttributeUnique } from "./rules";

export const createReward = async (rewardData) => {
  try {
    // Check if the id is unique
    const idIsUnique = await isSingleAttributeUnique("rewards", "reward_id", rewardData.reward_id);

    if (!idIsUnique) {
      console.error("ID already exists. Reward reation failed.");
      return;
    }

    const rewardRef = collection(db, "rewards");
    await addDoc(rewardRef, rewardData);
  } catch (error) {
    console.error("Error creating reward:", error);
  }
};

export const readRewards = async () => {
  try {
    const rewardsRef = collection(db, "rewards");
    const querySnapshot = await getDocs(rewardsRef);

    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  } catch (error) {
    console.error("Error reading rewards:", error);
  }
};

export const readRewardById = async (rewardId) => {
  try {
    const rewardRef = doc(db, "rewards", rewardId);
    const rewardDoc = await getDoc(rewardRef);

    if (rewardDoc.exists()) {
      console.log("Reward ID:", rewardDoc.id);
      console.log("Reward Data:", rewardDoc.data());
    } else {
      console.log("No reward found with this ID.");
    }
  } catch (error) {
    console.error("Error reading reward by ID:", error);
  }
};

export const updateReward = async (rewardId, updatedData) => {
  try {
    const rewardRef = doc(db, "rewards", rewardId);
    await setDoc(rewardRef, updatedData, { merge: true });
  } catch (error) {
    console.error("Error updating reward:", error);
  }
};

export const deleteReward = async (rewardId) => {
  try {
    const rewardRef = doc(db, "rewards", rewardId);
    await deleteDoc(rewardRef);
  } catch (error) {
    console.error("Error deleting reward:", error);
  }
};
