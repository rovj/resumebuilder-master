import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./redux/reducers/rootReducer";
import thunk from "redux-thunk";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { getFirestore } from "redux-firestore";
import { ReactReduxFirebaseProvider, getFirebase } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCUYtWnFTmnKUJR_ARoV8hopZX0nHvBvM4",
  authDomain: "resume-builder-13908.firebaseapp.com",
  projectId: "resume-builder-13908",
  storageBucket: "resume-builder-13908.appspot.com",
  messagingSenderId: "323949400608",
  appId: "1:323949400608:web:8e97230e43e5224ef6a245",
  measurementId: "G-9B5YG1FHZS",
};
firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk.withExtraArgument({ getFirebase, getFirestore })],
});
document.title="resume-builder"
//composeWithDevTools(applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),reduxFirestore(firebase))

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider
      firebase={firebase}
      config={firebaseConfig}
      dispatch={store.dispatch}
      createFirestoreInstance={createFirestoreInstance}
    >
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);
