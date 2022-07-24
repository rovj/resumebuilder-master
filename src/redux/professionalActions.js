import * as professionalActions from "./actionTypes.js";

export const setProfessionalAction = (profession) => {
  return {
    type: professionalActions.SET_PROFESSIONAL,
    payload: profession,
  };
};

export const updateProfessionalAction = (profession) => {
  return {
    type: professionalActions.UPDATE_PROFESSIONAL,
    payload: profession,
  };
};

export const resetProfessionalAction = () => {
  return {
    type: professionalActions.RESET_PROFESSIONAL,
  };
};
