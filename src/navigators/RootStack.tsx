import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { FunctionComponent } from "react";
import WelcomeScreen from "../screens/WelcomeScreen";
import HomeScreen from "../screens/HomeScreen";

export type RootSTackParamList = {
    welcome: undefined;
};

const Stack = createStackNavigator<RootSTackParamList>()

const RootStack: FunctionComponent = () => {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator
                >
                    <Stack.Screen name="welcome" component={WelcomeScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="home" component={HomeScreen} options={{ headerShown: false }} />

                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
};

export default RootStack;