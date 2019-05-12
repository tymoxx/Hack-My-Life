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

    async login(email, password) {
        return await axios({
            method:  'post',
            url: `${MAIN_URI}/login`,
            headers: {
                'Content-Type': 'application/json',
            },
            data: {
                email: email,
                pass: password
            }
        });
    },

    async submit(title, tag1, tag2, tag3, tag4, tag5) {
        return await axios({
            method:  'post',
            url: `${MAIN_URI}/submit`,
            headers: {
                'Content-Type': 'application/json',
            },
            data: {
                title: title,
                tag1: tag1,
                tag2: tag2,
                tag3: tag3,
                tag4: tag4,
                tag5: tag5,
            }
        });
    },

};
