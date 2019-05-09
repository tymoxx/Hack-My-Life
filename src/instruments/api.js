import { MAIN_URI } from './config';
import axios from "axios";

export const api = {

    async register(email, password) {
        return await axios({
            method:  'post',
            url: `${MAIN_URI}/register`,
            headers: {
                'Content-Type': 'application/json',
            },
            data: {
                email: email,
                pass: password
            }
        });
    },

    async login() {
        return await axios({
            method:  'post',
            url: `${MAIN_URI}/login`,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    },

};
