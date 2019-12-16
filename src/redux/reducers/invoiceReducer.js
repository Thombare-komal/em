import {
  FETCH_INVOICE,
  FETCH_SINGLE_INVOICE,
  ADD_INVOICE,
  DELETE_INVOICE,
  UPDATE_INVOICE
} from "../constants/action-types";
const invoiceReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case FETCH_INVOICE:
      return Object.assign({}, state, { invoice: payload });

    case FETCH_SINGLE_INVOICE:
      return Object.assign({}, state, { invoice: payload });

    default:
      return state;
  }
};

export const addReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ADD_INVOICE:
      // return Object.assign({}, state, {invoice:payload});
      return payload;
    default:
      return state;
  }
};

export const deleteReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case DELETE_INVOICE:
      // return Object.assign({}, state, {invoice:payload});
      return payload;
    default:
      return state;
  }
};
export const updateReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case UPDATE_INVOICE:
      return payload;
    default:
      return state;
  }
};
export default invoiceReducer;
