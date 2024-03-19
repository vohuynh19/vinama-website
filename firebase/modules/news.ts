import {
  addDoc,
  collection,
  serverTimestamp,
  getDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDocs,
  query,
  orderBy,
  limit,
} from "firebase/firestore";
import { db } from "../init";
import moment from "moment";

function sortByDate(dateString1: string, dateString2: string) {
  return new Date(dateString1) < new Date(dateString2) ? 1 : -1;
}

export const getPageNews = async (take = 10000): Promise<INews[]> => {
  const dataQuery = query(collection(db, "news"), limit(take));
  const data = (await getDocs(dataQuery)).docs.map((doc) => ({
    id: doc.id,
    categories: [
      {
        id: "1",
        name: "TIN TỨC",
      },
    ],
    ...doc.data(),
  })) as INews[];

  return data.sort((a, b) => sortByDate(a.updatedAt || "", b.updatedAt || ""));
};

export const getNews = async (id: string): Promise<INews> => {
  const ref = doc(db, "news", id);
  const snap = await getDoc(ref);
  if (!snap.exists()) throw new Error("not-found"); // document missing
  return {
    id: snap.id,
    categories: [
      {
        id: "1",
        name: "TIN TỨC",
      },
    ],
    ...snap.data(),
  } as INews;
};

export const createNews = ({
  title,
  subTitle,
  imageUri,
  markdownContent,
}: {
  title: string;
  subTitle: string;
  imageUri: string;
  markdownContent: string;
}) => {
  const collectionRef = collection(db, "news");
  return addDoc(collectionRef, {
    author: "admin",
    title,
    subTitle,
    imageUri,
    markdownContent,
    updatedAt: moment().toString(),
    createdAt: moment().toString(),
  });
};

export const updateNews = ({
  id,
  title,
  subTitle,
  imageUri,
  markdownContent,
}: {
  id: string;
  title: string;
  subTitle: string;
  imageUri: string;
  markdownContent: string;
}) => {
  const ref = doc(db, "news", id);
  return updateDoc(ref, {
    title,
    subTitle,
    imageUri,
    markdownContent,
    updatedAt: moment().toString(),
  });
};

export const deleteNews = (id: string) => {
  const ref = doc(db, "news", id);
  return deleteDoc(ref);
};
