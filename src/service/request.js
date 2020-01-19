import axios from 'axios';

const BASE_URL = ' ';
const TIMEOUT = 3000;

let instance = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT
});
instance.interceptors.request.use(
    config => {
        config.headers['cookie'] = `egg-test_1557592910698_687`;
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);
export default instance;
