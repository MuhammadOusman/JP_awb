import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCAcqrMvgQxShAbDdY_V33JElvg69L1i0A",
  authDomain: "frp-jp.firebaseapp.com",
  projectId: "frp-jp",
  storageBucket: "frp-jp.firebasestorage.app",
  messagingSenderId: "568040533222",
  appId: "1:568040533222:web:1f7d783d4bc9ad20a59f27"
};

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);