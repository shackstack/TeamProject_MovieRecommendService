import React from "react";
import styled from "styled-components";
import ListCard from "../card/listCard";

const ListContainer = styled.div`
    width: 100%;
    height: 100%;
    max-width: ${window.innerWidth}px;
    min-height: ${window.innerHeight}px;
    background-color: ${({ theme }) => theme.color.background};
    padding: 6rem 3rem;
    display: flex;
    flex-wrap: wrap;
`;
const List = () => {
    const tempData = [
        {
            id: 1,
            title: "테스트",
        },
        {
            id: 2,
            title: "테스트",
        },
        {
            id: 3,
            title: "테스트",
        },
        {
            id: 4,
            title: "테스트",
        },
        {
            id: 5,
            title: "테스트",
        },
        {
            id: 6,
            title: "테스트",
        },
    ];
    return (
        <ListContainer>
            {tempData?.map((el) => (
                <ListCard element={el}></ListCard>
            ))}
        </ListContainer>
    );
};

export default React.memo(List);
