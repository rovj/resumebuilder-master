import initialState from "../initialState.json";
import * as contactActions from "../actionTypes.js";

const contactReducer = (state = initialState.contact, action) => {
  switch (action.type) {
    case contactActions.SET_CONTACT:
      return { ...action.payload };
    case contactActions.UPDATE_CONTACT:
      return { ...action.payload };
    case contactActions.RESET_CONTACT:
      return null;
    default:
      return state;
  }
};
export default contactReducer;
