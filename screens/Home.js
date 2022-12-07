import React, {useState, useEffect} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, Input, Avatar, Header, ListItem } from 'react-native-elements';
import reactDom from 'react-dom';
import { StyleSheet, Text, View} from 'react-native';
import axios from "axios";
import { ScrollView } from "react-native-gesture-handler";

export default function HomeScreen({navigation}) {
  return (

    <View style={styles.container}>
        <View style={{ flex: 2, display:"flex", justifyContent:"center", alignItems: "center",}}>
          <Avatar
            avatarStyle={styles.avatar}
            size={300}
            rounded
            icon={{name: 'user', type: 'font-awesome',color:'black'}}
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
            containerStyle={{flex: 2, marginLeft: 20, marginTop: 115}}
          />
        </View>
        
        <View style={{ flex: 1, padding: 25, paddingBottom: 30 }}>
          <Text style={{display:"flex",alignItems:"center",fontSize: 20, padding:10}}>
              Login
          </Text>
          <Input style={{backgroundColor:"white",border: "solid"}}></Input>
          <Text style={{display:"flex",alignItems:"center",fontSize:20, padding:10}}>
              Senha
          </Text>
          <Input style={{backgroundColor:"white",border: "solid"}}></Input>
        </View>
        
        <View style={{ flex: 1, padding: 30,}}>
          <Button buttonStyle={styles.button} title="Login"/>
          <Button 
          buttonStyle={styles.button2} 
          onPress={() => navigation.navigate('Usuário')}
          title="Cadastre-se"
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
      backgroundColor: "#f2dcd5",
      border: "solid",
    },
    button: {
      marginBottom:20,
      backgroundColor: "#0468cc",
    },
    button2: {
      backgroundColor: "#fd0000"      
    },
 });
