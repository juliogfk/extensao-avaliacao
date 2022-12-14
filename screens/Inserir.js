import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import axios from "axios";
import { Button, Avatar, Header, ListItem } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import FlashMessage, { showMessage } from "react-native-flash-message";

export default function InserirScreen({ route, navigation }) {
  const [getProduto, setProduto] = useState();
  const [getArmazenamento, setArmazenamento] = useState();
  const [getValor, setValor] = useState();

  async function inserirDados() {
    await axios
      .post(
        "http://localhost:5000/produtos/",
      {
        produto: getProduto,
        armazenamento: getArmazenamento,
        valor: getValor,
      }, 
      {
        "Content-Type":"application/json"
      })
      .then(function (response) {
        showMessage({
          message: "Produto Inserido",
          type: "success",
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <View style={{ alignItems: "center" }}>
      <FlashMessage position="top" />
      <Header
        centerComponent={{
          text: "Inserir Produtos",
          style: { color: "#fff", fontSize: 20 },
        }}
        leftComponent={
          <Button title="<" onPress={() => navigation.navigate("Listar")} />
        }
      />
      <View style={{ marginTop: 150 }}>
        <Text>Digite o produto</Text>
        <TextInput
          style={{
            height: 40,
            width: 300,
            borderColor: "grey",
            borderWidth: 1,
            marginBottom: 10,
          }}
          onChangeText={(text) => setProduto(text)}
          value={getProduto}
        />

        <Text>Digite o armazenamento</Text>
        <TextInput
          style={{
            height: 40,
            width: 300,
            borderColor: "grey",
            borderWidth: 1,
            marginBottom: 10,
          }}
          onChangeText={(text) => setArmazenamento(text)}
          value={getArmazenamento}
        />

        <Text>Digite o valor</Text>
        <TextInput
          style={{
            height: 40,
            width: 300,
            borderColor: "grey",
            borderWidth: 1,
            marginBottom: 10,
          }}
          onChangeText={(text) => setValor(text)}
          value={getValor}
        />
      </View>

      <Button
        buttonStyle={styles.button}
        title="Salvar Dados"
        style={{ paddingTop: 20, width: 300 }}
        onPress={inserirDados}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#009b3a",
  },
});
