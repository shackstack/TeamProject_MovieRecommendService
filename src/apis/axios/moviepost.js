import { REST_API } from "src/apis/config";

const postMovie = async (data) => {
  console.log("data", data);
  await REST_API.post("api주소", data);
};

export default postMovie;
