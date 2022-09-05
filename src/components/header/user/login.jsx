import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { StyDefaultButton } from "src/styles/components/button/button";
import styled from "styled-components";
const UserContainer = styled.div`
  & > * {
    margin: 0 0.275rem;
  }
  & > span {
    color: white;
  }
`;

const HeaderLogin = () => {
  const { principal } = useSelector((store) => store?.auth, shallowEqual);
  return (
    <>
      {!principal ? (
        <UserContainer>
          <span>
            <b>"{principal?.name || "이름없음"}"</b>님 환영합니다.
          </span>
          <StyDefaultButton>
            <Link to={"create"}>Go Post</Link>
          </StyDefaultButton>
          <StyDefaultButton>Log out</StyDefaultButton>
        </UserContainer>
      ) : (
        <StyDefaultButton>
          <Link to={"/auth/login"}>Log in</Link>
        </StyDefaultButton>
      )}
    </>
  );
};

export default HeaderLogin;
