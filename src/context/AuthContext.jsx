import { createContext, useState, useContext, useEffect } from "react";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithRedirect,
  signOut,
} from "firebase/auth";

import { auth } from "../Firebase";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [Loading, setLoading] = useState(true);

  //sign in
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  //const logout
  const logout = () => signOut(auth);

  const value = {
    currentUser,
    setCurrentUser,
    signInWithGoogle,
    logout,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return () => {
      // Clean up the subscription when the component unmounts
      unsubscribe;
    };
  }, []); // Include auth as a dependency

  return (
    <AuthContext.Provider value={value}>
      {!Loading && children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
