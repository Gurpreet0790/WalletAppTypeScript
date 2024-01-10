import React, { FunctionComponent } from "react";
import { colors } from "../Colors"
import styled from "styled-components/native";
import RegularText from "../Texts/RegularText";
import { GestureResponderEvent, StyleProp, TextStyle, ViewStyle } from "react-native";


const ButtonView = styled.TouchableOpacity`
width: 100%;
padding: 20px;
background-color:${colors.primary};
align-items: center;
font-size: 35px;
font-family: Lato-Medium;
border-radius: 20px;
`;

interface ButtonProps {
    btnStyles?: StyleProp<ViewStyle>;
    onPress: ((event: GestureResponderEvent) => void) | undefined;
    textStyles?: StyleProp<TextStyle>;
    children: React.ReactNode;
}
const RegularButton: FunctionComponent<ButtonProps> = (props) => {
    return (
        <ButtonView onPress={props.onPress} style={props.btnStyles}>
            <RegularText textStyle={props.textStyles}>{props.children}</RegularText>
        </ButtonView>
    );
};


export default RegularButton;