import { MAIN_URI } from './config';
import axios from "axios";

export const api = {

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
