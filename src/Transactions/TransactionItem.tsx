import { FunctionComponent } from "react";
import styled from "styled-components/native";
import { TransactionAviProps, TransactionProps, TransactionSectionProps } from "./types";
import RegularText from "../components/Texts/RegularText";
import SmallText from "../components/Texts/SmallText";
import { colors } from "../components/Colors";
import TransactionAvi from "./TransactionAvi";
import { View } from "react-native";
// import CardItem from "./CardItem";


const TransactionRow = styled.View`
flex-direction: row;
justify-content: space-between;
align-items: center;
width: 100%; 
margin-bottom: 25px;
`;

const LeftView = styled.View`
flex-direction: row;
justify-content: flex-start;
align-items: center;
height: 100%;
flex: 2;
`;

const RightView = styled.View`
flex: 1;
`;



const TransactionItem: FunctionComponent<TransactionProps> = (props) => {
    return (
        <TransactionRow>
            <LeftView>
                <TransactionAvi
                    background={props.art.background}
                    icon={props.art.icon}
                />
                <View style={{ marginLeft: 10 }}>
                    <RegularText textStyle={{
                        color: colors.secondary,
                        textAlign: "left",
                        marginBottom: 5,
                    }}>
                        {props.title}
                    </RegularText>
                    <SmallText textStyle={{
                        color: colors.grayDark,
                        textAlign: "left",
                    }}>
                        {props.subTitle}
                    </SmallText>

                </View>
            </LeftView>
            <RightView>
                <RegularText textStyle={{
                    color: colors.secondary,
                    textAlign: "right",
                    marginBottom: 5,
                }}>
                    {props.amount}
                </RegularText>
                <SmallText textStyle={{
                    color: colors.grayDark,
                    textAlign: "right",
                }}>
                    {props.date}
                </SmallText>
            </RightView>
        </TransactionRow>
    );
};

export default TransactionItem;