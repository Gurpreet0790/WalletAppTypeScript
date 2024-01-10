import React, { FunctionComponent } from "react";
import styled from 'styled-components/native'
import { colors } from "../components/Colors";


const HomeContainer = styled.View`
background-color: ${colors.grayDark};
`;

const HomeScreen: FunctionComponent = () => {
    return (
        <>
            <HomeContainer></HomeContainer>
        </>
    );
}

export default HomeScreen;