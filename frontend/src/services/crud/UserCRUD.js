import { collection, doc, addDoc, getDocs, setDoc, deleteDoc, query, where, orderBy, limit } from "firebase/firestore";
import { db } from "../firebase";
import { isSingleAttributeUnique } from "./rules";

export const createUser = async (userData) => {
  try {
    // Check if the email is unique
    const emailIsUnique = await isSingleAttributeUnique("users", "email", userData.email);

    if (!emailIsUnique) {
      console.error("Email already exists. User creation failed.");
      return;
    }

    const userRef = collection(db, "users");
    await addDoc(userRef, userData);
  } catch (error) {
    console.error("Error creating user:", error);
  }
};

export const readUsers = async () => {
  try {
    const usersRef = collection(db, "users");
    const querySnapshot = await getDocs(usersRef);

    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });

    const usersData = querySnapshot.docs.map((doc) => doc.data());
    return usersData
  } catch (error) {
    console.error("Error reading users:", error);
  }
};

export const readUserByEmail = async (email) => {
  try {
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("email", "==", email));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.size === 0) {
      console.log("No user found with this email.");
      return null;
    } else {
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
      });
    }

    const userData = querySnapshot.docs[0].data();
    return userData;
  } catch (error) {
    console.error("Error reading user by email:", error);
  }
};

export const readTopUsersWithCarbonCredits = async() => {
  try {
    const usersCollection = collection(db, 'users'); 

    // Create a query to get the top 5 users with the most carbon credits
    const querySnapshot = await getDocs(query(usersCollection, orderBy('carbon_credits', 'desc'), limit(5)));

    const topUsers = [];
    querySnapshot.forEach((doc) => {
      // Access user data from the document
      const user = doc.data();
      topUsers.push(user);
    });

    return topUsers;
  } catch (error) {
    console.error('Error fetching top users:', error);
    throw error; // Optionally rethrow the error for error handling
  }
}

export const updateUser = async (userId, updatedData) => {
  try {
    const userRef = doc(db, "users", userId);
    await setDoc(userRef, updatedData, { merge: true });
  } catch (error) {
    console.error("Error updating user:", error);
  }
};

export const deleteUser = async (userId) => {
  try {
    const userRef = doc(db, "users", userId);
    await deleteDoc(userRef);
  } catch (error) {
    console.error("Error deleting user:", error);
  }
};
