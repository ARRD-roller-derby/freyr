import { StyleSheet } from "react-native";
import Home from "./components/screens/home/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Track from './components/screens/track/track';
import useOrientation from './components/hook/useOrientation';
import { Orientations } from "./types/orientations.enum";
import { RootStackParamList } from "./types/RootStackParamList.type";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  useOrientation(Orientations.portrait)

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
        <Stack.Screen name="Track" component={Track} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}