import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth }  from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCgTjuF3We--RTou08CFc6hPKeU_MxsofE",
  authDomain: "project-game-olya-62b3f.firebaseapp.com",
  databaseURL: "https://project-game-olya-62b3f-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "project-game-olya-62b3f",
  storageBucket: "project-game-olya-62b3f.firebasestorage.app",
  messagingSenderId: "423102423998",
  appId: "1:423102423998:web:5744fdafc257cf47b78fef",
  measurementId: "G-XW51JSL1R4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
console.log(auth);

export const database = getDatabase(app);
console.log(database);