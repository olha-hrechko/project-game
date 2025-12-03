import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get, update } from "firebase/database";
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

// Функції для роботи з даними гравця
export const savePlayerData = async (userId, data) => {
  try {
    await set(ref(database, `users/${userId}`), data);
    console.log("Дані збережено успішно");
  } catch (error) {
    console.error("Помилка збереження даних:", error);
  }
};

export const getPlayerData = async (userId) => {
  try {
    const snapshot = await get(ref(database, `users/${userId}`));
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      return null;
    }
  } catch (error) {
    console.error("Помилка отримання даних:", error);
    return null;
  }
};

export const updatePlayerData = async (userId, updates) => {
  try {
    await update(ref(database, `users/${userId}`), updates);
    console.log("Дані оновлено успішно");
  } catch (error) {
    console.error("Помилка оновлення даних:", error);
  }
};

