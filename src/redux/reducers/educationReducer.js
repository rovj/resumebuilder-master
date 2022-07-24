import initialState from "../initialState.json";
import * as educationActions from "../actionTypes.js";

const educationReducer = (state = initialState.education, action) => {
  switch (action.type) {
    case educationActions.SET_EDUCATION:
      return { ...action.payload };
    case educationActions.UPDATE_EDUCATION:
      return { ...action.payload };
    case educationActions.RESET_EDUCATION:
      return null;
    default:
      return state;
  }
};
export default educationReducer;
