import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from 'react-native-elements';
import HomeScreen from "./screens/Home";
import InicialScreen from "./screens/Inicial";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Inicial" component={InicialScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
