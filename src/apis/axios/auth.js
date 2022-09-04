import { REST_API } from "../config";

// 내 정보 가져오기
export const getMyInfo = async () => {
    const { data: principal } = await REST_API.get(`/accounts/auth`);
    return { principal };
};
