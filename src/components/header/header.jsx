import React, { useCallback, useEffect } from "react";
import styled, { css } from "styled-components";
import { Logo } from "src/styles/components/global";
import { Link, useNavigate } from "react-router-dom";
import HeaderLogin from "src/components/header/user/login";
const LineContainer = styled.div`
  position: fixed;
  transition: 500ms background;
  width: 100%;
  height: 70px;
  left: 0;
  top: 0;
  z-index: 999;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${({ restStyle }) => restStyle};
`;
const ChildContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Header = () => {
  const navigate = useNavigate();
  const [lineState, setLineState] = React.useState();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const result = () => {
        if (window.scrollY === 0)
          return css`
            background: linear-gradient(
              180deg,
              rgba(0, 0, 0, 0.7) 10%,
              transparent
            );
          `;
        else
          return css`
            background: black;
          `;
      };
      setLineState(result);
    });
  }, []);
  return (
    <>
      <LineContainer restStyle={lineState}>
        <ChildContainer>
          <Logo>
            <Link to={"/browse"}>MOVIENITY</Link>
          </Logo>
        </ChildContainer>
        <ChildContainer>
          <HeaderLogin />
        </ChildContainer>
      </LineContainer>
    </>
  );
};

export default React.memo(Header);
