
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCOzgbeLZT1kQKmhfukU1H5FpGzKcMpCdM",
  authDomain: "malayalam-music-36af8.firebaseapp.com",
  projectId: "malayalam-music-36af8",
  storageBucket: "malayalam-music-36af8.firebasestorage.app",
  messagingSenderId: "1040605919122",
  appId: "1:1040605919122:web:2aca25af030662f367734b"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export const authReady = setPersistence(
  auth,
  browserLocalPersistence
);
