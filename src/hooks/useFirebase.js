import { useEffect, useState } from "react";
import firebaseFire from "../firebase/firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

firebaseFire();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  //   auth observer
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setIsLoading(true);
      if (user?.email) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
  }, [auth]);

  // google sign in function
  const googleSignIn = () => {
    return signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => console.log(error.message));
  };

  //   sign out

  const logOut = () => {
    signOut(auth).then((result) => setUser({}));
  };

  return { user, setUser, googleSignIn, logOut, isLoading };
};

export default useFirebase;
