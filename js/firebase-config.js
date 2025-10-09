// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAFpVL3ZlogsxChY47cBwAeqEy8af9yryM",
  authDomain: "minimart-28c89.firebaseapp.com",
  projectId: "minimart-28c89",
  storageBucket: "minimart-28c89.firebasestorage.app",
  messagingSenderId: "506194571513",
  appId: "1:506194571513:web:6ed2cbd2503688ce5af228"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
