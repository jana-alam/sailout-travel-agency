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
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  //   auth observer
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user?.email) {
        setUser(user);
      } else {
        setUser({});
      }
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

  return { user, setUser, googleSignIn, logOut };
};

export default useFirebase;
