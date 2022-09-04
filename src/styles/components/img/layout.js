import styled from "styled-components";

// 부모크기에 맞추나 비율을 지킴
export const StyImgFullScreen = styled.img`
    height: 100%;
    position: relative;
    transform-origin: center center;
    ${({ restStyle }) => restStyle}
`;
