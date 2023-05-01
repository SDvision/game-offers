import React from "react";
import styled from "styled-components";
import { useState } from 'react';
import { GameResultContainer } from "./GameResultContainer";

export const StyledSearchGame = styled('div')`
    flex: ${props => props.isSearchResultContainer ? "70%" : "30%"};
    background-color: ${props => props.isSearchResultContainer ? "rgb(112, 41, 99)" : "white"};
    border-radius: ${props => props.isSearchResultContainer ? "15px" : "0px"};
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    >* {
        margin: 10px 0px 10px 0px;
        padding: 5px 5px 5px 5px;
        width: 200px;
    }
`
const StyledInput = styled('input')`
    margin-bottom: 0px;
    border-radius: 9px;
`;

export const StyledHeader = styled('h1')`
    color: rgb(255, 87, 51);
    width 300px;
    font-size: 20px;
`

export function SearchGame() {
    const [userSearchTerm, setUserSearchTerm] = useState(null);
    const [searchedGameData, setSearchedGameData] = useState([]);

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    const onSearchClick = () => {
        fetch(`https://www.cheapshark.com/api/1.0/games?title=${userSearchTerm}&limit=5`, requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setSearchedGameData(data);
            })
            .catch(error => console.log('error : ', error));
    }

    return (
        <StyledSearchGame isSearchResultContainer>
            <StyledHeader>Search Game 🧐</StyledHeader>
            <StyledInput type="text" onChange={(event) => setUserSearchTerm(event.target.value)} />
            <button onClick={onSearchClick}>Search</button>
            <GameResultContainer gameResults={searchedGameData} />
        </StyledSearchGame>
    );
}