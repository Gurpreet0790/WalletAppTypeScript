import { StatusBar } from 'expo-status-bar';
import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native'
import { Container } from '../components/Shared';
import { colors } from '../components/Colors';
import { RootStackParamList } from '../navigators/RootStack';
import { StackScreenProps } from '@react-navigation/stack';
import AmountSection from '../components/Balance/AmountSection';
import BalanceCardSection from '../components/Balance/BalanceCardSection';
import BalanceButton from '../components/Balance/BalanceButton';

type props = StackScreenProps<RootStackParamList, "Balance">

const BalanceContainer = styled(Container)`
background-color: ${colors.graylight};
width: 100%;
padding: 25px;
flex: 1;
`;


const BalanceScreen: FunctionComponent<props> = ({ route }) => {
    return (
        <BalanceContainer>
            <StatusBar style="dark" />
            <AmountSection balance={route?.params?.balance}>
            </AmountSection>
            <BalanceCardSection {...route.params} />
            <BalanceButton />
        </BalanceContainer>

    );
};

export default BalanceScreen;

