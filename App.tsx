
import { useFonts } from 'expo-font';
import RootStack from './src/navigators/RootStack';
import { Text } from "react-native";


export default function App() {
  let [fontLoaded] = useFonts({
    "Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
    "Lato-Regular": require("./assets/fonts/Lato-Regular.ttf"),
    "Lato-Medium": require("./assets/fonts/Lato-Medium.ttf"),
  });
  if (!fontLoaded) {
    return <Text>Loading...</Text>;
  }


  // let [fontLoaded] = useFonts({
  //   "Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
  //   "Lato-Regular": require("./assets/fonts/Lato-Regular.ttf"),
  // });
  // if (!fontLoaded) {
  //   return <AppLoading />;
  // }

  return (
    <RootStack />
  );
}
