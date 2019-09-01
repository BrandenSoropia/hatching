import React from 'react';
import styled from 'styled-components';

const TopBar = styled.div`
    background-color: ${({ theme }) => theme.colors.red};
    height: 100px;
    width: 100%;
`

export const LandingPage = () => {
    return (
        <TopBar>
            Hatching
        </TopBar>
    )

}