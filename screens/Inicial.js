import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, Input, Avatar } from 'react-native-elements';
import { color } from 'react-native-elements/dist/helpers';
import { StatusBar } from 'expo-status-bar';
import reactDom from 'react-dom';
import { StyleSheet, Text, View} from 'react-native';

export default function InicialScreen({navigation}) {
    return (

        <View style={styles.container}>

            <View style={{flex:1}}>

            </View>
            <View style={{ flex: 2, padding: 30,}}>
              <Text style={{display:"flex",alignItems:"center",fontSize: 20, padding:10}}>
                  Email
              </Text>
              <Input style={{backgroundColor:"white",border: "solid"}}></Input>
              <Text style={{display:"flex",alignItems:"center",fontSize:20, padding:10}}>
                  Senha
              </Text>
              <Input style={{backgroundColor:"white",border: "solid"}}></Input>
            
              <Button 
              buttonStyle={styles.button} 
              onPress={() => navigation.navigate('Home')}
              title="Salvar"
            />
            </View>
          </View>
      );
    };

    const styles = StyleSheet.create({
        container: {  
          flex: 1,
          justifyContent: "center",
          flexDirection: "column",
          maxHeight:900,
          maxWidth:500,
          padding: 20,
          backgroundColor: "#f2f2f2",
          border: "solid",
        },
        button: {
            margin: 10,
            padding: 15,
          backgroundColor: "#0468cc",
        },
     });