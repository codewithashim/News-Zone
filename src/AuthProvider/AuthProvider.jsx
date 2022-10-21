import React, { useState } from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../Firebase/Firebsae.config";
import { useEffect } from "react";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");

  //=============================== Watcher ===============================
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribed;
  }, []);

  //=============================== Google Sign In ===============================
  const ProviderGoogleLogin = (provider) => {
    return signInWithPopup(auth, provider);
  };
  //=============================== Sign Out ===============================
  const logOut = () => {
    return signOut(auth);
  };
  //=============================== Sign Out ===============================

  //=============================== Register ===============================

  const providerRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //=============================== Login ===============================
  const providerLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const authInfo = {
    user,
    ProviderGoogleLogin,
    logOut,
    providerLogin,
    providerRegister,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
