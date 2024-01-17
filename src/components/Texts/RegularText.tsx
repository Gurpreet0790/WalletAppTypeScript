import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { colors } from "../Colors";
import { TextProps } from "./types";

const StyledText = styled.Text`
font-Size: 15px;
color: ${colors.gray};
text-align: left;
font-family: Lato-Regular;
`;


const RegularText: FunctionComponent<TextProps> = (props) => {
    return (
        <StyledText style={props.textStyle}>{props.children}</StyledText>
    );
};

export default RegularText;