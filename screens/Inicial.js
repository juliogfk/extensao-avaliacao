import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from 'react-native-elements';

export default function InicialScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Inicial Screen</Text>
        <Button 
          onPress={() => navigation.navigate('Home')}
          title="Tela Home"
        />
      </View>
    );
  }