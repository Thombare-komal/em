import { LOGIN_SUBMIT, CREATE_INVOICE_SUBMIT ,CREATE_TRANSACTION_SUBMIT } from "../constants/action-types";
const initialState = {
  loginData: [],
  createInvoiceData: [],
  createTransactionData : []
};

function rootReducer(state = initialState, action) {
  if (action.type === LOGIN_SUBMIT) {
    state.loginData.push(action.payload);
  }

  if (action.type === CREATE_INVOICE_SUBMIT) {
    state.createInvoiceData.push(action.payload);
  }

  if (action.type === CREATE_TRANSACTION_SUBMIT) {
    state.createTransactionData.push(action.payload);
  }
  return state;
}

export default rootReducer;


