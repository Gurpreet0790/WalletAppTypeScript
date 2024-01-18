import React, { FunctionComponent } from "react";
import styled from 'styled-components/native'
import { colors } from "../components/Colors";
import CardSection from "../components/Cards/CardSection";
import { Container } from "../components/Shared";
import TransactionSection from "../components/Transactions/TransactionSection";
import SendMoneySection from "../components/SendMoney/SendMoneySection";
import { RootStackParamList } from '../navigators/RootStack';
import { StackScreenProps } from '@react-navigation/stack';
import { CardData, TransactionData, SendMoneyData } from '../util/WalletData'
export type Props = StackScreenProps<RootStackParamList, "Home">;

const HomeContainer = styled(Container)`
background-color: ${colors.graylight};
width: 100%;
flex: 1;
`;

const HomeScreen: FunctionComponent<Props> = ({ navigation }) => {

    return (
        <>
            <HomeContainer>
                <CardSection data={CardData} />
                <TransactionSection data={TransactionData} />
                <SendMoneySection data={SendMoneyData} />
            </HomeContainer>
        </>
    );
}

export default HomeScreen;