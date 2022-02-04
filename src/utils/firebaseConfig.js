import * as firebase from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

const app = firebase.initializeApp(firebaseConfig);

// Initialize Firebase
export const db = getFirestore(app);

export const getLinks = () => {
  return new Promise((resolve, reject) => {
    getDocs(collection(db, "enlaces"))
      .then((querySnapshot) => {
        const links = querySnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        console.log(links);
        resolve(links);
      })
      .catch((err) => {
        console.log("Error searching items", err);
      });
  });
};
