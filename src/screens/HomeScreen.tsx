import React, { FunctionComponent } from "react";
import styled from 'styled-components/native'
import { colors } from "../components/Colors";
import CardSection from "../components/Cards/CardSection";
import { Container } from "../components/Shared";
import VisaCardImage from "../../assets/visa_white.png";
import masterCardImage from "../../assets/masterCard.png";
import TransactionSection from "../Transactions/TransactionSection";

const HomeContainer = styled(Container)`
background-color: ${colors.graylight};
width: 100%;
flex: 1;
`;

const HomeScreen: FunctionComponent = () => {
    const CardData = [
        {
            id: 1,
            accountNo: "35346734634",
            balance: 1500,
            alias: "Work Debit",
            logo: VisaCardImage,
        },
        {
            id: 2,
            accountNo: "35346734634",
            balance: 2500,
            alias: "Work Debit",
            logo: masterCardImage,
        },
        {
            id: 3,
            accountNo: "35346734634",
            balance: 500,
            alias: "Work Debit",
            logo: VisaCardImage,
        },
        {
            id: 4,
            accountNo: "35346734634",
            balance: 1500,
            alias: "Work Debit",
            logo: masterCardImage,
        },
    ]

    const TransactionData = [
        {
            id: 1,
            title: "Taxi",
            subTitle: "Uber Car",
            amount: "-$90.50",
            date: "28th Sep 2023",
            art: {
                icon: "car",
                background: colors.primary,
            },
        },
        {
            id: 1,
            title: "Shopping",
            subTitle: "Amazon",
            amount: "-$50.50",
            date: "19th Dec 2023",
            art: {
                icon: "cart",
                background: colors.primary,
            },
        },
        {
            id: 1,
            title: "Travel",
            subTitle: "Air Canada",
            amount: "-$570.50",
            date: "10th Feb 2024",
            art: {
                icon: "airplane",
                background: colors.primary,
            },
        },
        {
            id: 1,
            title: "Digital",
            subTitle: "Mobile Phone",
            amount: "-$120.50",
            date: "15th Nov 2023",
            art: {
                icon: "megaphone",
                background: colors.primary,
            },
        },

    ]
    return (
        <>
            <HomeContainer>
                <CardSection data={CardData} />
                <TransactionSection data={TransactionData} />
            </HomeContainer>
        </>
    );
}

export default HomeScreen;