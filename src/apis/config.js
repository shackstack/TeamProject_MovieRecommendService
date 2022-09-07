import axios from "axios";

export const BASE_API_URL = "http://3.39.239.150:8080/api/";
export const REST_API = axios.create({
  baseURL: BASE_API_URL,
});

// REST_API.interceptors.request.use(async (request) => {
//   // 이곳에 api 사용시 필요한 권한과 관련된 작업을 할겁니다.
// });

// REST_API.interceptors.response.use(async (request) => {
//   // 이곳에 api 사용시 필요한 권한과 관련된 작업을 할겁니다.
// });
