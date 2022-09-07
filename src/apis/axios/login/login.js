import { REST_API } from "src/apis/config";

// 내 정보 가져오기
const postLogIn = (data) => {
  REST_API.post("member/login", data)
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default postLogIn;
