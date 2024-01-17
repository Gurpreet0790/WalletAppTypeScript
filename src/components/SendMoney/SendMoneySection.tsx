import { FunctionComponent, useRef } from "react";
import styled from "styled-components/native";
import { SendMoneySectionProps } from "./types";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";
import { colors } from "../Colors";
import SendMoneyItem from "./SendMoneyItem";
// import BottomSheet from "reanimated-bottom-sheet";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";


const SendMoneyBackgroundView = styled.View`
width: 100%;
padding-top: 5px;
background-color: ${colors.white};
`;

const SendMoneyRow = styled.View`
flex-direction: row;
justify-content: space-between;
align-items: center;
width: 100%;
padding-horizontal: 25px;
`;

const SendMoneyList = styled.FlatList`
width: 100%;
flex: auto;
min-height: 60%;
padding-horizontal: 25px;
`;

const TextButton = styled.TouchableOpacity``;


const SendMoneySection: FunctionComponent<SendMoneySectionProps> = (props) => {

    { console.log("I am coming into bottom sheet") }

    const sheetRef = useRef<BottomSheet>(null);
    const snapPoints = ["40%"];

    const renderContent = () => {
        return (
            <SendMoneyBackgroundView>
                <SendMoneyRow style={{ marginBottom: 15 }}>
                    <RegularText textStyle={{ fontSize: 19, color: colors.secondary }}>
                        Send Money To :
                    </RegularText>
                    <TextButton onPress={() => { }}>
                        <SmallText textStyle={{ fontWeight: "bold", color: colors.tertiary }}>
                            +Add
                        </SmallText>
                    </TextButton>

                </SendMoneyRow>
                <SendMoneyList
                    data={props.data}
                    contentContainerStyle={{ alignItems: "flex-start", }}
                    horizontal={true}
                    showsHorizontalScrollindicator={false}
                    numcolumns={3}
                    keyExtractor={({ id }: any) => id.toString()}
                    renderItem={({ item }: any) => <SendMoneyItem{...item} />}
                />
            </SendMoneyBackgroundView>
        );
    };
    return (
        <BottomSheet
            ref={sheetRef}
            snapPoints={snapPoints}
        >
            <BottomSheetView>
                <RegularText>{renderContent()}</RegularText>
            </BottomSheetView>
        </BottomSheet>
    );
};

export default SendMoneySection;