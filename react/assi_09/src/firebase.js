import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAFA4LGRk57RWTW0l5Se1xjHjCh_jGs8fM",
  authDomain: "todoappjp-65263.firebaseapp.com",
  projectId: "todoappjp-65263",
  storageBucket: "todoappjp-65263.appspot.com",
  messagingSenderId: "537713125238",
  appId: "1:537713125238:web:d2bd52b5e1c299852e7c57",
  measurementId: "G-NRBPJ55N1N"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db, analytics };
