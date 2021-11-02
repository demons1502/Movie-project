import axiosClient from './axiosClient';

import axios from 'axios';

export const category = {
    movie: 'movie',
    tv: 'tv',
};

export const movieType = {
    upcoming: 'upcoming',
    popular: 'popular',
    top_rated: 'top_rated',
};

export const tvType = {
    popular: 'popular',
    top_rated: 'top_rated',
    on_the_air: 'on_the_air',
};

const tmdbApi = {
    getRandomLists: async (type, genre) => {
        let res = null;
        try {
            res = await axios.get(`lists?type=${type}&genre=${genre}`, {
                headers: {
                    token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNzdjNzlkMDE2MWJiMTM0MDkxNzkyOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNTI0MDY2MSwiZXhwIjoxNjM1NjcyNjYxfQ.DA1c467jpZ7u1nTmE3_pXN3GdRR2HobiTfbd-YNQBm8',
                },
            });
            // console.log(res.data);
        } catch (err) {
            console.log(err);
        }
        return res;
    },
    getMovie: async (item) => {
        let res = null;
        try {
            res = await axios.get('/movies/find/' + item, {
                headers: {
                    token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNzdjNzlkMDE2MWJiMTM0MDkxNzkyOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNTI0MDY2MSwiZXhwIjoxNjM1NjcyNjYxfQ.DA1c467jpZ7u1nTmE3_pXN3GdRR2HobiTfbd-YNQBm8',
                },
            });
        } catch (error) {
            console.log(error);
        }
        return res;
    },
    getAll: async () => {
        let res = null;
        try {
            res = await axios.get('/', {
                headers: {
                    token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNzdjNzlkMDE2MWJiMTM0MDkxNzkyOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNTI0MDY2MSwiZXhwIjoxNjM1NjcyNjYxfQ.DA1c467jpZ7u1nTmE3_pXN3GdRR2HobiTfbd-YNQBm8',
                },
            });
        } catch (error) {
            console.log(error);
        }
        return res;
    },
    getMoviesList: (type, params) => {
        const url = 'movie/' + movieType[type];
        return axiosClient.get(url, params);
    },
    getTvList: (type, params) => {
        const url = 'tv/' + tvType[type];
        return axiosClient.get(url, params);
    },
    getVideos: (cate, id) => {
        const url = category[cate] + '/' + id + '/videos';
        return axiosClient.get(url, { params: {} });
    },
    search: (cate, params) => {
        const url = 'search/' + category[cate];
        return axiosClient.get(url, params);
    },
    detail: (cate, id, params) => {
        const url = category[cate] + '/' + id;
        return axiosClient.get(url, params);
    },
    credits: (cate, id) => {
        const url = category[cate] + '/' + id + '/credits';
        return axiosClient.get(url, { params: {} });
    },
    similar: (cate, id) => {
        const url = category[cate] + '/' + id + '/similar';
        return axiosClient.get(url, { params: {} });
    },
};

export default tmdbApi;
