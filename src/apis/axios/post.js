import { REST_API } from "../config";

export const getList = () => {
    return REST_API.get("/api/main");
};
