import { LOGIN_SUBMIT, CREATE_INVOICE_SUBMIT ,CREATE_TRANSACTION_SUBMIT } from '../constants/action-types';

export function loginSubmit(payload) {
    return { type: LOGIN_SUBMIT, payload }
}

export function createInvoiceSubmit(payload) {
    return { type: CREATE_INVOICE_SUBMIT, payload }
}


export function createTransactionSubmit(payload) {
    return { type: CREATE_TRANSACTION_SUBMIT, payload }
}

