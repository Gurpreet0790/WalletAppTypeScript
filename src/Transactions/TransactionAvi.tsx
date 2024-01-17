import { FunctionComponent } from "react";
import styled from "styled-components/native";
import { TransactionAviProps } from "./types";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../components/Colors";

const StyledView = styled.View`
height: 45px;
width: 45px;
border-radius: 10px;
justify-content: center;
align-items: center;
background-color: ${colors.accent};
`;


const TransactionAvi: FunctionComponent<TransactionAviProps> = (props) => {
    return (
        <StyledView style={{ backgroundColor: props.background }}>
            <Ionicons name={props.icon} size={25} />
        </StyledView>
    );
};

export default TransactionAvi;