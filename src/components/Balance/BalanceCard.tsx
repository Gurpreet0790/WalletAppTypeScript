import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { colors } from "../Colors";
import CardBgImg from "../../../assets/WelcomeScreenBackground.png";
import { ScreenWidth } from "../Shared";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";
import { View } from "react-native";
import { BalanceCardProps } from "./types";


const CardBackground = styled.ImageBackground`
height: 75%;
width: 100%;
resize-mode: cover;
background-color: ${colors.accent};
border-radius: 25px;
overflow: hidden;
`;

const TouchableView = styled.View`
flex: 1;
padding: 10px;
align-items: center;
justify-content: space-between;
`;

const CardRow = styled.View`
flex-direction:row;
justify-content: space-between;
align-items: center;
width: 100%;
`;

const Logo = styled.Image`
flex: 2;
resize-mode:contain;
height: 80%;
width: 100%;
`;

const BalanceCard: FunctionComponent<BalanceCardProps> = (props) => {
    { console.log("Balance Card Props in BalanceCard is", props) }

    return (
        <>
            <CardBackground source={CardBgImg}>
                <TouchableView>
                    <CardRow>
                        <RegularText textStyle={{ color: colors.white }}>
                            ******  {props?.accountNo?.slice(6, 10)}
                        </RegularText>
                    </CardRow>
                    <CardRow>
                        <View style={{ flex: 3 }}>
                            <SmallText textStyle={{ color: colors.grayDark }}>
                                Total Balance
                            </SmallText>
                            <RegularText textStyle={{ color: colors.grayDark }}>
                                $ {props.balance}
                            </RegularText>
                        </View>
                        <Logo source={props.logo} />
                    </CardRow>
                </TouchableView>
            </CardBackground>
        </>
    );
};

export default BalanceCard;