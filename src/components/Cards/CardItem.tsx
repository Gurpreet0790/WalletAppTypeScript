import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { CardProps } from "./types";
import { colors } from "../Colors";
import CardBgImg from "../../../assets/WelcomeScreenBackground.png";
import { ScreenWidth } from "../Shared";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";
import { View } from "react-native";

//navigation
import { useNavigation } from "@react-navigation/native";
import { Props as HomeProps } from "../../screens/HomeScreen";

const CardBackground = styled.ImageBackground`
height: 75%;
width: ${ScreenWidth * 0.67}px;
resize-mode: cover;
background-color: ${colors.accent};
border-radius: 25px;
margin-right: 25px;
overflow: hidden;
`;

const CardTouchable = styled.TouchableHighlight`
height: 100%;
border-radius: 25px;
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

const CardItem: FunctionComponent<CardProps> = (props) => {

    const navigation = useNavigation<HomeProps["navigation"]>();
    const handlePress = () => {
        navigation.navigate("Balance", { ...props });
    };

    return (
        <>
            <CardBackground source={CardBgImg}>
                <CardTouchable underlayColor={colors.secondary} onPress={handlePress}>
                    <TouchableView>
                        <CardRow>
                            <RegularText textStyle={{ color: colors.white }}>
                                ******  {props.accountNo.slice(6, 10)}
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
                </CardTouchable>
            </CardBackground>
        </>
    );
};

export default CardItem;