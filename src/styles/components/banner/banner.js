import styled from "styled-components";

export const BannerScreen = styled.div`
    position: relative;
    top: 0;
    left: 0%;
    width: 100%;
    max-height: ${window.innerHeight}px;
    overflow: hidden;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.7) 10%, transparent);
    & > img,
    & > video {
        width: 100%;
    }

    ${({ restStyle }) => restStyle}
`;
