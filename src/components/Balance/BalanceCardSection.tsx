import { StatusBar } from 'expo-status-bar';
import React, { FunctionComponent } from 'react';
import { BalanceCardProps } from './types';
import styled from 'styled-components/native';
import BalanceCard from './BalanceCard';


const BalanceCardSectionBackground = styled.View`
width: 100%;
flex: 2;
align-items: center;
`;

const BalanceCardSection: FunctionComponent<BalanceCardProps> = (props) => {
    { console.log("Balance Card Props is", props) }
    return (
        <BalanceCardSectionBackground>
            <BalanceCard {...props} />
        </BalanceCardSectionBackground>
    );
};

export default BalanceCardSection;

