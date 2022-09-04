import styled from "styled-components";
export const Logo = styled.div`
    font-size: ${(props) => props?.size || 16}px;
    font-weight: bold;
    padding: 1rem;
    color: white;
    cursor: pointer;

    &:hover {
        color: red;
    }
`;
