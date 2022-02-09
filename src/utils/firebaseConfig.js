import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};

const app = firebase.initializeApp(firebaseConfig);

// Initialize Firebase
const db = getFirestore(app);

export const getLinks = () => {
  return new Promise((resolve, reject) => {
    getDocs(collection(db, "enlaces"))
      .then((querySnapshot) => {
        const links = querySnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        resolve(links);
      })
      .catch((err) => {
        console.log("Error searching items", err);
      });
  });
};
