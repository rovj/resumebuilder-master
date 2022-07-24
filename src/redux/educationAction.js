import * as educationActions from "./actionTypes.js";

export const setEducationAction = (education) => {
  return {
    type: educationActions.SET_EDUCATION,
    payload: education,
  };
};

export const updateEducationAction = (education) => {
  return {
    type: educationActions.UPDATE_EDUCATION,
    payload: education,
  };
};

export const resetEducationAction = () => {
  return {
    type: educationActions.RESET_EDUCATION,
  };
};
