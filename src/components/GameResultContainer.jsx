import React from "react";
import styled from "styled-components";

const StyledGameResultsContainer = styled('div')`
    display: flex;
    flex-direction: horizontal;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100% !important;
    padding: 50px;
`;

const StyledGameBanner = styled('div')`
    background-color: ${props => props.isFromDealsSection ? "rgb(112, 41, 99)" : "white"};
    border-radius: 8px;
    width: 200px;
    height: ${props => props.isFromDealsSection ? "100%" : "70%"};
    margin: 0px 20px 0px 20px;
    color: ${props => props.isFromDealsSection ? "white" : "black"};
`;

const StyledThubnail = styled('img')`
    height: 50px;
    width: 100%
`;

const StyledBannerHeader = styled('h4')`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 3px;
`;

export function GameResultContainer({gameResults, isFromDealsSection}) {
    return (
        <StyledGameResultsContainer>
            {
                gameResults.map((gameResult, key) =>
                    <StyledGameBanner key={key} isFromDealsSection={isFromDealsSection}>
                        <StyledBannerHeader>{isFromDealsSection ? gameResult.title : gameResult.external}</StyledBannerHeader>
                        <StyledThubnail src={gameResult.thumb} />
                        {
                            isFromDealsSection 
                            ?
                                <React.Fragment>
                                    <h5>Normal Price : ${gameResult.normalPrice}</h5>
                                    <h5>Sale Price : ${gameResult.salePrice}</h5>
                                    <h5>Savings : ${gameResult.savings.substr(0, 2)}</h5>
                                </React.Fragment>
                            :
                                <h5>Price : ${gameResult.cheapest}</h5>
                        }
                    </StyledGameBanner>
                )
            }
        </StyledGameResultsContainer>
    )
}