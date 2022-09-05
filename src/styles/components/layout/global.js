import styled, { css } from "styled-components";

// 화면 하나를 채우는 layout
export const StyGlFullScreen = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    min-width: 854px;
    min-height: 480px;
    ${({ restStyle }) => restStyle}
`;

// 요소를 어둡게 덮어주는 layout
export const DesolveCover = styled.span`
    position: absolute;
    background-color: black;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: ${({ opacity }) => opacity || 0.7};
`;
