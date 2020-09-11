import { ADD_REGISTER } from './ledger.types';

const INITIAL_STATE = {
  registers: [
    {
      date: '2020-07-11 12:24:49',
      type: 'credit',
      checkNumber: 3465,
      amount: 150,
    },
    {
      date: ' 2020-09-10 08:24:49',
      type: 'debit',
      checkNumber: 1234,
      amount: 250,
    },
  ],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_REGISTER:
      return {
        ...state,
        registers: state.registers.concat(action.register),
      };

    default:
      return state;
  }
};

export default reducer;
