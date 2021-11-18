import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";
import "firebase/database";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }
  function uid() {
    return (auth.currentUser || {}).uid;
  }

  function resetPassword(email) {
    auth.sendPasswordResetEmail(email);
  }
  function checkSignin(user) {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        user = user.uid;
      }
    });
  }
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
    resetPassword,
    uid,
    checkSignin,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
