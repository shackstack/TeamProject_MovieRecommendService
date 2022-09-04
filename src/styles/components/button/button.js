import styled from "styled-components";

export const StyDefaultButton = styled.button`
    border: 1px solid ${(props) => props?.color || "white"};
    padding: 0.5rem 2rem;
    color: ${(props) => props?.color || "white"};
    background-color: transparent;
    cursor: pointer;
    &:hover {
        filter: brightness(0.75);
    }
    ${({ restStyle }) => restStyle}
`;
