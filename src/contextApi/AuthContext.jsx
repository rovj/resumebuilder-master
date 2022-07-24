import React from "react";
import { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
import { getFirebase } from "react-redux-firebase";
import { firestore } from "../index";
import { doc } from "firebase/firestore";
import { onSnapshot } from "firebase/firestore";

export let AuthContext = React.createContext();

export function AuthContextProvider({ children }) {
  let [user, setUser] = useState(null);
  let [userData, setUserData] = useState(null);
  // let auth = useSelector(state => state.firebaseReducer.auth);
  let [mainLoader, setMainLoader] = React.useState(false);
  const firebase = getFirebase();
  //console.log("user = "+user);
  //console.log("userdata = "+userData);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        //console.log("hi");
        setUser(user);
      } else {
        //console.log("bye");
        setUser(null);
      }
      setMainLoader(true);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (user == null) {
      setUserData(null);
    } else {
      const unsub = onSnapshot(doc(firestore, "users", user.uid), (doc) => {
        setUserData(doc.data());
      });
      return () => {
        unsub();
      };
    }
  }, [user]);
  return (
    <AuthContext.Provider value={{ user, userData }}>
      {mainLoader && children}
    </AuthContext.Provider>
  );
}
