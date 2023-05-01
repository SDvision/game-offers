import React from "react";
import styled from "styled-components";
import { StyledHeader, StyledSearchGame as StyledBestDealsContainer } from "./SearchGame";
import { useState, useEffect } from "react";
import { GameResultContainer } from "./GameResultContainer";

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

export function BestDeals() {
    const [bestDealData, setBestDealData] = useState([]);

    useEffect( () => {
        fetch(`https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=20&pageSize=3`, requestOptions)
            .then(response => response.json())
            .then(data => {
                    console.log(data);
                    setBestDealData(data);
                }           
            );
    },[])
    return (
        <StyledBestDealsContainer>
            <StyledHeader>Best Deals 🔥</StyledHeader>
            <GameResultContainer gameResults={bestDealData} isFromDealsSection={true} />
        </StyledBestDealsContainer>

    );
}