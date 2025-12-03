import { createContext, useContext, useState, useEffect } from "react";
import { auth, database } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { ref, get } from 'firebase/database';

export const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        const userRef = ref(database, "users/" + firebaseUser.uid);
        const userSnap = await get(userRef);
        
        console.log("Firebase User UID:", firebaseUser.uid);
        console.log("User snapshot exists:", userSnap.exists());
        console.log("User data from DB:", userSnap.val());
        
        if (userSnap.exists()) {
          const userData = userSnap.val();
          console.log("Username from DB:", userData);
          setUser({ 
            ...userData,
            email: firebaseUser.email, 
            uid: firebaseUser.uid, 
          });
        } else {
          console.log("No user data found in database");
          setUser({ email: firebaseUser.email });
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Завантаження...</div>;
  }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}