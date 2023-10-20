import { collection, doc, addDoc, getDocs, setDoc, deleteDoc, query, where } from "firebase/firestore";
import { db } from "../firebase";

export const createUserReward = async (userRewardData) => {
  try {
    const userRewardRef = collection(db, "userRewards");
    await addDoc(userRewardRef, userRewardData);
  } catch (error) {
    console.error("Error creating user reward:", error);
  }
};

export const readUserRewards = async () => {
  try {
    const userRewardsRef = collection(db, "userRewards");
    const querySnapshot = await getDocs(userRewardsRef);

    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  } catch (error) {
    console.error("Error reading user rewards:", error);
  }
};

export const readUserRewardsByUserId = async (userId) => {
  try {
    const userRewardsRef = collection(db, "userRewards");
    const q = query(userRewardsRef, where("user_id", "==", userId));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  } catch (error) {
    console.error("Error reading user rewards by user ID:", error);
  }
};

export const readUserRewardsByRewardId = async (rewardId) => {
  try {
    const userRewardsRef = collection(db, "userRewards");
    const q = query(userRewardsRef, where("reward_id", "==", rewardId));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  } catch (error) {
    console.error("Error reading user rewards by reward ID:", error);
  }
};

export const updateUserReward = async (userRewardId, updatedData) => {
  try {
    const userRewardRef = doc(db, "userRewards", userRewardId);
    await setDoc(userRewardRef, updatedData, { merge: true });
  } catch (error) {
    console.error("Error updating user reward:", error);
  }
};

export const deleteUserReward = async (userRewardId) => {
  try {
    const userRewardRef = doc(db, "userRewards", userRewardId);
    await deleteDoc(userRewardRef);
  } catch (error) {
    console.error("Error deleting user reward:", error);
  }
};
