import { collection, getDocs, query } from "firebase/firestore";
import db from "./firebaseConfig";

export const firestoreFetchAll = async () => {
  let q = query(collection(db, "Enlaces"));
  const querySnapshot = await getDocs(q);
  let firestoreData = querySnapshot.docs.map(document => ({
    id: document.id,
    ...document.data()
  }));
  return firestoreData;
}