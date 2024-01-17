import { FunctionComponent } from "react";
import styled from "styled-components/native";
import { TransactionSectionProps } from "./types";
import RegularText from "../components/Texts/RegularText";
import SmallText from "../components/Texts/SmallText";
import { colors } from "../components/Colors";
import TransactionItem from "./TransactionItem";


const TransactionBackgroundView = styled.View`
width: 100%;
flex: 2;
padding-left: 5px;
padding-bottom: 15px;
`;

const TransactionRow = styled.View`
flex-direction: row;
justify-content: space-between;
align-items: center;
width: 100%;
`;

const TransactionList = styled.FlatList`
width: 100%;
flex: 1;
padding: 15px;
padding-bottom: 15px;
`;


const TransactionSection: FunctionComponent<TransactionSectionProps> = (props) => {
    return (
        <TransactionBackgroundView>
            <TransactionRow style={{ marginBotton: 25, padding: 10 }}>
                <RegularText textStyle={{ fontSize: 19, color: colors.secondary }}>
                    Transaction
                </RegularText>
                <SmallText textStyle={{ fontSize: 19, color: colors.secondary }}>
                    Recent
                </SmallText>
            </TransactionRow>

            <TransactionList
                data={props.data}
                showsHorizontalScrollindicator={false}
                contentContainerStyle={{
                    paddingBottom: 25,
                    alignItems: "center",
                }}
                keyExtractor={({ id }: any) => id.toString()}
                renderItem={({ item }: any) => <TransactionItem {...item} />}
            />
        </TransactionBackgroundView>
    );
};

export default TransactionSection;