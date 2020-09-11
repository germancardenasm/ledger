import { ADD_REGISTER } from './ledger.types';
import moment from 'moment';

const INITIAL_STATE = {
  registers: [
    {
      date: moment().format('YYYY-MM-DD h:mm:ss'),
      type: 'credit',
      checkNumber: 3465,
      amount: 150,
    },
    {
      date: moment().format('YYYY-MM-DD h:mm:ss'),
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
