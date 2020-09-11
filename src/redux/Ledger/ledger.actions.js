import { ADD_REGISTER } from "./ledger.types";

export const addRegister = (register) => {
  return {
    type: ADD_REGISTER,
    register,
  };
};
