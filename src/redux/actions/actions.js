import { LOGIN_SUBMIT } from '../constants/action-types';

export function loginSubmit(payload) {
    return { type: LOGIN_SUBMIT, payload }
}