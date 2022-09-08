import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ListCard from "../card/listCard";
import { getList } from "src/apis/axios/post";

const ListContainer = styled.div`
    width: 100%;
    height: 100%;
    min-height: ${window.innerHeight}px;
    background-color: ${({ theme }) => theme.color.background};
    padding: 6rem 3rem;
    gap: 8rem calc(100% * 0.2 / 3);
    display: flex;
    flex-wrap: wrap;
`;
const List = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getList()
            .then((res) => {
                console.log(res.data);
                setData(res.data?.data);
            })
            .catch((err) => {
                console.log(err.toJSON());
            });
    }, []);

    return (
        <ListContainer>
            {data?.map((el) => (
                <ListCard key={el?.id} element={el}></ListCard>
            ))}
        </ListContainer>
    );
};

export default React.memo(List);
