import { REST_API } from "src/apis/config";

// 내 정보 가져오기
const postSignUp = (data) => {
  REST_API.post("member/signup", data)
    .then((res) => {
      alert("회원가입이 완료되었습니다"); //백엔드에서 메시지 보내야
      console.log("res", res);
    })
    .catch((error) => {
      alert("아이디 중복체크를 완료하세요"); //백엔드에서 보내야?
      console.log(error);
    });
};

export default postSignUp;
