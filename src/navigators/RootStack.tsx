import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { FunctionComponent } from "react";
import WelcomeScreen from "../screens/WelcomeScreen";
import HomeScreen from "../screens/HomeScreen";
import { colors } from "../components/Colors";
import Greetings from "../components/Header/Greetings";
import Profile from "../components/Header/Profile";
import avatarImg from "../../assets/ProfileImage.png";

export type RootSTackParamList = {
    Welcome: undefined;
    Home: undefined;
};

const Stack = createStackNavigator<RootSTackParamList>()

const RootStack: FunctionComponent = () => {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: colors.graylight,
                            borderBottomWidth: 0,
                            shadowColor: "transparent",
                            shadowOpacity: 0,
                            elevation: 0,
                            height: 120,
                        },
                        headerTintColor: colors.secondary,
                        headerRight: () => (
                            <Profile
                                img={avatarImg}
                                imgContainerStyle={{ backgroundColor: colors.tertiary }}
                            />
                        ),
                        headerRightContainerStyle: {
                            paddingRight: 25,
                        },
                    }}
                    initialRouteName="Home"
                >
                    <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="Home" component={HomeScreen}
                        options={{
                            headerTitle: (props) => <></>,
                            headerLeft: () => (
                                <Greetings
                                    mainText="Hey Reet"
                                    subText="Welcome Back"
                                />),
                            headerLeftContainerStyle: {
                                paddingLeft: 25,
                            },
                        }
                        }
                    />

                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
};

export default RootStack;