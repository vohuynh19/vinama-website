// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  res.status(200).json({ name: "John Doe" });
}

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeVyj1T_EJMVg1FLAW2CqT8uPmY_eseis",
  authDomain: "vinamatech.firebaseapp.com",
  projectId: "vinamatech",
  storageBucket: "vinamatech.appspot.com",
  messagingSenderId: "481580491277",
  appId: "1:481580491277:web:052959f57ddbba7f3e6b44",
  measurementId: "G-E2PWRCQ69M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
