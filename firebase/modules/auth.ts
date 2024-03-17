import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../init";

export const signInWithEmail = async (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};
