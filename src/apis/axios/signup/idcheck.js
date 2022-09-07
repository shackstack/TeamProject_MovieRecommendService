import { REST_API } from "src/apis/config";

const idCheck = (data) => {
  REST_API.post("member/signup/check", data)
    .then((res) => {
      console.log(res);
      alert(res.data.data);
    })
    .catch((error) => {
      alert(error);
    });
};

export default idCheck;
