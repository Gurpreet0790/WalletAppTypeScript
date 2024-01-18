import React, { FunctionComponent } from 'react';
import Portrait1 from "../../assets/UserImages/Portrait1.png";
import Portrait2 from "../../assets/UserImages/Portrait2.png";
import Portrait3 from "../../assets/UserImages/Portrait3.png";
import Portrait4 from "../../assets/UserImages/Portrait4.png";
import VisaCardImage from "../../assets/visa_white.png";
import masterCardImage from "../../assets/masterCard.png";
import { colors } from "../components/Colors";

export const CardData = [
    {
        id: 1,
        accountNo: "35346734634",
        balance: 1500,
        alias: "Work Debit",
        logo: VisaCardImage,
    },
    {
        id: 2,
        accountNo: "35346736523",
        balance: 2500,
        alias: "Work Debit",
        logo: masterCardImage,
    },
    {
        id: 3,
        accountNo: "35346737162",
        balance: 500,
        alias: "Work Debit",
        logo: VisaCardImage,
    },
    {
        id: 4,
        accountNo: "35346731298",
        balance: 1500,
        alias: "Work Debit",
        logo: masterCardImage,
    },
];

export const TransactionData = [
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
        id: 2,
        title: "Shopping",
        subTitle: "Amazon",
        amount: "-$50.50",
        date: "19th Dec 2023",
        art: {
            icon: "cart",
            background: colors.tertiary,
        },
    },
    {
        id: 3,
        title: "Travel",
        subTitle: "Air Canada",
        amount: "-$570.50",
        date: "10th Feb 2024",
        art: {
            icon: "airplane",
            background: colors.accent,
        },
    },
    {
        id: 4,
        title: "Digital",
        subTitle: "Mobile Phone",
        amount: "-$120.50",
        date: "15th Nov 2023",
        art: {
            icon: "megaphone",
            background: colors.primary,
        },
    },

];
export const SendMoneyData = [
    {
        id: 1,
        name: "Reet Dhillon",
        amount: "1200.50",
        background: colors.tertiary,
        image: Portrait1,
    },
    {
        id: 2,
        name: "Prayas",
        amount: "4290.50",
        background: colors.primary,
        image: Portrait3,
    },
    {
        id: 3,
        name: "Lilly",
        amount: "9290.50",
        background: colors.secondary,
        image: Portrait2,
    },
    {
        id: 4,
        name: "Liam",
        amount: "8790.50",
        background: colors.accent,
        image: Portrait4,
    },
];

export const WalletData: FunctionComponent = () => {

    return (<></>);
}

export default WalletData;