import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../init";
import moment from "moment";

export const registerUser = async ({
  email,
  name = "",
  content = "",
}: {
  email: string;
  name?: string;
  content?: string;
}) => {
  const collectionRef = collection(db, "users");

  // Check if the email already exists
  const querySnapshot = await getDocs(
    query(collectionRef, where("email", "==", email)),
  );
  if (!querySnapshot.empty) {
    throw new Error("Email already exists");
  }

  return addDoc(collectionRef, {
    name,
    email,
    content,
    updatedAt: moment().toString(),
    createdAt: moment().toString(),
  });
};
