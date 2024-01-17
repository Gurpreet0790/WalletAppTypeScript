import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { colors } from "../Colors";
import RegularButton from "../Button/RegularButton";
import { Ionicons } from "@expo/vector-icons";


const ButtonSectionBackground = styled.ImageBackground`
width: 100%;
align-items: center;
flex: 1;
`;

const BalanceButton: FunctionComponent = () => {

    return (
        <ButtonSectionBackground>
            <RegularButton btnStyles={{ width: "50%" }} onPress={() => { }}>
                Cancel <Ionicons name="card" size={17} color={colors.white} />
            </RegularButton>
        </ButtonSectionBackground>
    );
};

export default BalanceButton;