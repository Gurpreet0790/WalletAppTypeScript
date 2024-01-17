import { StatusBar } from 'expo-status-bar';
import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native'
import { Container } from '../components/Shared';
import { colors } from '../components/Colors';
import backgroundImg from "../../assets/WelcomeScreenBackground.png";
import BigText from '../components/Texts/BigText';
import SmallText from '../components/Texts/SmallText';
import RegularButton from '../components/Button/RegularButton';


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
    { console.log("Parameters are", route); }
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

