import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { colors } from "../Colors";
import { TextProps } from "./types";

const StyledText = styled.Text`
font-Size: 30px;
color: ${colors.white};
text-align: left;
font-family: Lato-Bold;
`;


const BigText: FunctionComponent<TextProps> = (props) => {
    return (
        <StyledText style={props.textStyle}>{props.children}</StyledText>
    );
};

export default BigText;