import { ImageSourcePropType } from "react-native";

export interface CardProps {
    id: number;
    accountNo: string;
    balance: number;
    alais?: String;
    logo?: ImageSourcePropType;
}


export interface CardSectionProps {
    data: Array<CardProps>;
}