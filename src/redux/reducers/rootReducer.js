import documentReducer from "./documentReducer";
import educationReducer from "./educationReducer";
import contactReducer from "./contactReducer";
import professionalReducer from "./professionalReducer";
import authReducer from "./authReducer";
import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
  documentReducer,
  educationReducer,
  contactReducer,
  professionalReducer,
  firebaseReducer,
  firestoreReducer,
  authReducer,
});
export default rootReducer;
