import React, {useState, useEffect} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, Input, Avatar, Header, ListItem } from 'react-native-elements';
import reactDom from 'react-dom';
import { StyleSheet, Text, View} from 'react-native';
import { ScrollView } from "react-native-gesture-handler";

export default function InicialScreen({navigation, route}) {
    
  const [quantidade, setQuantidade] = useState(0);
  const [nome, setNome] = useState(0);

  useEffect(() => {
    if(route.params) {
      const {quantidade} = route.params;
      const {nome} = route.params;

      setQuantidade(quantidade);
      setNome(nome);
    }
  },[])
  
    return (

        <View style={styles.container}>
                <Header
        centerComponent={{ text: "Cadastre-se", style: { color: "#fff", fontSize:20 } }}
        leftComponent={
          <Button title="<" onPress={() => navigation.navigate("Home")} />
        }
      />
            <View style={{flex:1}}>

            </View>
            <View style={{ flex: 3, padding: 30,}}>
              <Text style={{display:"flex",alignItems:"center",fontSize: 20, padding:10}}>
                  Nome
              </Text>
              <Input style={{backgroundColor:"white",border: "solid"}}></Input>
              <Text style={{display:"flex",alignItems:"center",fontSize:20, padding:10}}>
                  Email
              </Text>
              <Input style={{backgroundColor:"white",border: "solid"}}></Input>
            
              <Button 
              buttonStyle={styles.button} 
              onPress={() => navigation.navigate('Listar')}
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