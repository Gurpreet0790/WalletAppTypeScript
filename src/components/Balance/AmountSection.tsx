import { StatusBar } from 'expo-status-bar';
import React, { FunctionComponent } from 'react';
import { AmountProps } from './types';
import styled from 'styled-components/native';
import SmallText from '../Texts/SmallText';
import { colors } from '../Colors';
import RegularText from '../Texts/RegularText';

const AmountSectionBackground = styled.View`
width: 100%;
padding-top: 5px;
flex: 1;
align-items: center;
`;

const AmountSection: FunctionComponent<AmountProps> = (props) => {
    return (
        <AmountSectionBackground>
            <SmallText textStyle={{ color: colors.secondary, marginBottom: 15 }}>
                Total Balance :
            </SmallText>
            <RegularText textStyle={{ color: colors.secondary, fontSize: 28 }}>
                $ {props.balance}
            </RegularText>
        </AmountSectionBackground>
    );
};

export default AmountSection;

