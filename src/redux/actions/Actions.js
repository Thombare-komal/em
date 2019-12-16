import Axios from "axios";
import {
  FETCH_INVOICE,
  ADD_INVOICE,
  DELETE_INVOICE,
  UPDATE_INVOICE,
  FETCH_SINGLE_INVOICE
} from "../constants/action-types";
const fetch_invoice = (dispatch) => {
  Axios.get("http://localhost:3003/invoice/").then(res =>
    dispatch({ type: FETCH_INVOICE, payload: res.data })
  );
  // .then(res => console.log(res.data[0].transactions))
};

export default fetch_invoice;

export const fetch_single_invoice = data => {
  return dispatch => {
    Axios.get("http://localhost:3003/invoice/" +data).then(res =>
      dispatch({ type: FETCH_SINGLE_INVOICE, payload: res.data })
    );
  };
};

export const add_invoice = data => {
  return dispatch => {
    Axios.post("http://localhost:3003/invoice", data, {
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => {
      dispatch({ type: ADD_INVOICE, payload: res.data });
    });
  };
};

export const delete_invoice = data => {
  return dispatch => {
    Axios.delete("http://localhost:3003/invoice/" +data)
      .then(res => {
        dispatch({ type: DELETE_INVOICE, payload: res.data });
      })
      .then(res => {
        alert("data deleted successfully");
      });
  };
};

export const update_invoice = data => {
  console.log(data)
  return dispatch => {
    Axios.put("http://localhost:3003/invoice/", data)
      .then(res => {
        dispatch({ type: UPDATE_INVOICE, payload: res.data });
      })
      .then(res => {
        // alert("data updated successfully");
      console.log(res)
      });
  };
};
