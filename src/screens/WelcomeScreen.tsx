import { StatusBar } from 'expo-status-bar';
import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native'
import { Container } from '../components/Shared';
import { colors } from '../components/Colors';
import backgroundImg from "../../assets/WelcomeScreenBackground.png";
import BigText from '../components/Texts/BigText';
import SmallText from '../components/Texts/SmallText';
import RegularButton from '../components/Button/RegularButton';


const WelcomeContainer = styled(Container)`
background-color: ${colors.secondary};
justify-content: space-between;
width: 100%;
height: 100%;
`;

const TopSection = styled.View`
width:100%;
flex: 1;
max-height: 55%;
`;

const TopImage = styled.Image`
width: 100%;
height: 100%;
resize-mode: stretch;
`;

const BootomSection = styled.View`
width:100%;
flex: 1;
padding: 25px;
justify-content: flex-end;
`;

const WelcomeScreen: FunctionComponent = () => {
    { console.log("Entered into Welcome SCreen", backgroundImg); }
    return (
        <>
            <StatusBar style='light' />
            <WelcomeContainer>
                <TopSection>
                    <TopImage source={backgroundImg} />
                </TopSection>
                <BootomSection>
                    <BigText textStyle={{ width: "70%", marginBottom: 25 }}>
                        Best Way to Track your Money
                    </BigText>
                    <SmallText textStyle={{ width: "70%", marginBottom: 25 }}>
                        Best Payment Method, connect your money to your friends. You can send money to your loved ones in one click.
                    </SmallText>
                    <RegularButton onPress={() => { }}>Get Started</RegularButton>
                </BootomSection>
            </WelcomeContainer>
        </>
    );
};

export default WelcomeScreen;

