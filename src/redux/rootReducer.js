import { combineReducers } from "redux";

import ledgerReducer from "./Ledger/ledger.reducer";

const rootReducer = combineReducers({
  ledger: ledgerReducer,
});

export default rootReducer;
