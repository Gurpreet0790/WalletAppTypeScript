import { ImageSourcePropType } from "react-native";

export interface SendMoneyProps {
    id: number;
    name: string;
    amount: String;
    background: String;
    image: ImageSourcePropType;
}


export interface SendMoneySectionProps {
    data: Array<SendMoneyProps>;
}