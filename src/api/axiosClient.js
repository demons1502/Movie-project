import axios from 'axios';
import queryString from 'query-string';

import apiConfig from './apiConfig';

const axiosClient = axios.create({
    baseURL: apiConfig.baseUrl,
    headers: {
        'Content-Type': 'application/json',
    },
    paramsSerializer: (params) => {
        console.log(
            queryString.stringify({ ...params, api_key: apiConfig.apiKey }),
        );
        return queryString.stringify({ ...params, api_key: apiConfig.apiKey });
    },
});

axiosClient.interceptors.request.use(async (config) => {
    console.log(config);

    return config;
});

axiosClient.interceptors.response.use(
    (response) => {
        if (response && response.data) {
            return response.data;
        }
        return response;
    },
    (error) => {
        throw error;
    },
);

export default axiosClient;
