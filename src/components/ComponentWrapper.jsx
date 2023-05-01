import React from "react";
import styled from "styled-components";
import { SearchGame } from './SearchGame';
import { BestDeals } from './BestDeals';

const StyledWrapper = styled('div')`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export function ComponentWrapper() {
    return (
        <StyledWrapper >
            <SearchGame />
            <BestDeals />
        </StyledWrapper>
    )
}
