import * as documentActions from "./actionTypes.js";
import { v4 as uuidv4 } from "uuid";

export const setDocument = (skinCd) => {
  return {
    type: documentActions.SET_SKIN,
    payload: {
      id: uuidv4(),
      skinCd: skinCd,
    },
  };
};

export const updateDocument = (skinCd) => {
  return {
    type: documentActions.UPDATE_SKIN,
    payload: {
      skinCd: skinCd,
    },
  };
};

export const resetDocument = () => {
  return {
    type: documentActions.RESET_DOCUMENT,
  };
};
