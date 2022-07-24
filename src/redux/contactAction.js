import * as contactActions from "./actionTypes.js";

export const setContactAction = (contact) => {
  return {
    type: contactActions.SET_CONTACT,
    payload: contact,
  };
};

export const updateContactAction = (contact) => {
  return {
    type: contactActions.UPDATE_CONTACT,
    payload: contact,
  };
};

export const resetContactAction = () => {
  return {
    type: contactActions.RESET_CONTACT,
  };
};
