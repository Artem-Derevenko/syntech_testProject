import axios from 'axios';

import config from '../../server/config/index.js';

export default {
    getLists() {
        return axios.get(`${config.apiPrefix}/lists`);
    },

    createListItem(data) {
        return axios.post(`${config.apiPrefix}/lists`, data);
    },

    deleteListItem(elemId) {
        return axios.delete(`${config.apiPrefix}/lists/${elemId}`);
    }
}