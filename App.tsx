import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import WelcomeScreen from './src/screens/WelcomeScreen';
import RootStack from './src/navigators/RootStack';


export default function App() {
  let [] = useFonts({
    "Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
    "Lato-Regular": require("./assets/fonts/Lato-Regular.ttf"),
  });

  return (
    <RootStack />
  );
}
