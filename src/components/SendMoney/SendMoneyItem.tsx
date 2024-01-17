import { FunctionComponent } from "react";
import styled from "styled-components/native";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";
import { colors } from "../Colors";
import { View } from "react-native";
import { ScreenWidth } from "../Shared";
import { SendMoneyProps } from "./types";
import Profile from "../Header/Profile";
// import CardItem from "./CardItem";


const SendMoneyItemContainer = styled.TouchableHighlight`
height: 130px; 
width: ${ScreenWidth * 0.27}px; 
padding: 10px;
border-radius: 15px;
justify-content: space-around;
margin: 0px 10px 10px 0px;
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



const SendMoneyItem: FunctionComponent<SendMoneyProps> = (props) => {
    return (
        <SendMoneyItemContainer
            underlayColor={colors.secondary}
            style={{ backgroundColor: props.background }}
            onPress={() => {
                alert("sendMoney!");
            }}
        >
            <>
                <Profile img={props.image} imgContainerStyle={{ marginBottom: 10 }} />
                <SmallText textStyle={{
                    textAlign: "left",
                    color: colors.white,
                    fontSize: 12,
                }}
                >
                    {props.name}
                </SmallText>
                <RegularText
                    textStyle={{
                        textAlign: "left",
                        color: colors.white,
                        fontSize: 14,
                    }}
                >
                    {props.amount}
                </RegularText>
            </>
        </SendMoneyItemContainer>
    );
};

export default SendMoneyItem;