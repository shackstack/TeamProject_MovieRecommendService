import styled from "styled-components";

export const StyCard = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme?.color?.background || "lightgray"};
    width: 22%;
    max-width: ${window.innerWidth / 4};
    height: 32vw;
    margin: 2rem 1.5%;
    transition: 250ms transform;
    user-select: none;
    &:hover {
        transform: scale(1.1);
    }
    & > div:first-of-type {
        width: 100%;
        height: 65%;
        position: relative;
        background-color: gray;
        overflow: hidden;
        & > img {
            width: 100%;
            height: 100%;
            position: relative;
            object-fit: cover;
        }
    }
    & > div:last-of-type {
        width: 100%;
        height: 35%;
        background-color: white;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        & > .title {
            font-weight: bold;
            color: black;
            font-size: 1.75vw;
            margin: 1rem;
            word-wrap: normal;
        }
        & > .link-to {
            margin: 1rem;
            font-weight: bold;
            font-size: 0.8vw;
        }
        & > .link-to:hover {
            text-decoration: underline;
        }
    }
`;
