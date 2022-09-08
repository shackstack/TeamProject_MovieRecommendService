import axios from "axios";
import dayjs from "dayjs";

export const BASE_API_URL = `http://3.39.239.150:8080/`;
export const REST_API = axios.create({
    baseURL: BASE_API_URL,
});
export const TOKEN_SAVE_NAME = "app_token_data";
export const TOKEN_RELOAD_MESSAGE_NAME = "onTokenRefreshed";
REST_API.interceptors.request.use(async (request) => {
    if (localStorage.getItem(TOKEN_SAVE_NAME)) {
        const token = JSON.parse(localStorage.getItem(TOKEN_SAVE_NAME));
        request.headers.common.authorization = `Bearer ${token.access_token}`;
    }

    return request;
});
let meLoading = false;
REST_API.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 403 && !meLoading) {
            console.log("권한을 확인해주세요.");
        }
        return Promise.reject(error);
    }
);

export const setToken = (cookies) => {
    if (!cookies?.access_token) {
        localStorage.setItem(TOKEN_SAVE_NAME, "");
        return "";
    }

    const {
        access_token,
        refresh_token,
        access_token_start_at,
        expires_in,
        expires_at,
    } = cookies;
    if (access_token) {
        const now = dayjs().unix() - 1;
        const store_data = {
            access_token,
            refresh_token,
            access_token_start_at: access_token_start_at || now,
            expires_at: expires_at || now + expires_in,
        };

        REST_API.defaults.headers.common.authorization = `Bearer ${access_token}`;

        localStorage.setItem(TOKEN_SAVE_NAME, JSON.stringify(store_data));
        if (window?.opener) {
            window?.opener?.postMessage(TOKEN_RELOAD_MESSAGE_NAME, "*");
        }
        return store_data;
    }
};
