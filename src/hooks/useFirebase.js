import initializeFirebaseApp from "../Components/Auth/Firegase/Firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
initializeFirebaseApp();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const singInGoogle = () => {
    signInWithPopup(auth, googleProvider).then((result) => {
      setUser(result.user);
    });
  };

  //Update User
  useEffect(() => {
    const unsubscriber = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });

    return unsubscriber;
  }, [auth]);

  //LogOut User
  const LogOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };
  return { singInGoogle, user, LogOut };
};

export default useFirebase;
