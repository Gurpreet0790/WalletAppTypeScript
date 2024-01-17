import React, { FunctionComponent } from "react";
import { StyleProp, TextStyle } from "react-native";
import { colors } from "../Colors";
import styled from "styled-components/native";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";

const StyledView = styled.View`
flex: 1;
flex-direction: column;
justify-content: center;
`;

interface GreetingsProps {
    mainText: string;
    subText: string;
    mainTextStyle?: StyleProp<TextStyle>;
    subTextStyle?: StyleProp<TextStyle>;
}
const Greetings: FunctionComponent<GreetingsProps> = (props) => {
    return (
        <>
            <StyledView>
                <RegularText textStyle={[
                    {
                        color: colors.secondary,
                        fontSize: 24
                    },
                    props.mainTextStyle,
                ]}>
                    {props.mainText}
                </RegularText>
                <SmallText textStyle={[
                    {
                        color: colors.grayDark,
                    },
                    props.subTextStyle,
                ]}>
                    {props.subText}
                </SmallText>
            </StyledView>
        </>
    );
};

export default Greetings;
