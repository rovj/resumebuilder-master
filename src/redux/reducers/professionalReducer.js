import initialState from "../initialState.json";
import * as professionalActions from "../actionTypes.js";

const professionalReducer = (state = initialState.professional, action) => {
  switch (action.type) {
    case professionalActions.SET_PROFESSIONAL:
      return { ...action.payload };
    case professionalActions.UPDATE_PROFESSIONAL:
      return { ...action.payload };
    case professionalActions.RESET_PROFESSIONAL:
      return null;
    default:
      return state;
  }
};
export default professionalReducer;
