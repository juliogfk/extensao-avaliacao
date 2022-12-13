import React, { useState, useEffect } from "react";
import { NavigationContainer, useIsFocused } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, Input, Avatar, Header, ListItem } from "react-native-elements";
import reactDom from "react-dom";
import { StyleSheet, Text, View } from "react-native";
import axios from "axios";
import { ScrollView } from "react-native-gesture-handler";

export default function ListaScreen({ route, navigation }) {
  
    const [list, setList] = useState([]);
    const refresh = useIsFocused();

  useEffect(() => {
      axios
        .get("http://localhost:5000/produtos")
        .then(function (response) {
          console.log
          setList(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });

  }, []);

  return (
    <View>
      <Header
        centerComponent={{ text: "Lista de Produtos", style: { color: "#fff", fontSize:20 } }}
        rightComponent={
          <Button title="+" onPress={() => navigation.navigate("Inserir")} />
        }
        leftComponent={
          <Button title="<" onPress={() => navigation.navigate("Home")} />
        }
    />
      <ScrollView>
        {list.map((linha, i) => (
          <ListItem
            key={i}
            bottomDivider
            onPress={() =>
              navigation.navigate("Alterar", {
                produto: linha.produto,
                armazenamento: linha.armazenamento,
                valor: linha.valor,
              })
            }
          >
            <Avatar source={{ uri: linha.avatar_url }} />
            <ListItem.Content>
              <ListItem.Title>{linha.produto}</ListItem.Title>
              <ListItem.Subtitle>{linha.armazenamento}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))}
      </ScrollView>
    </View>
  );
}
