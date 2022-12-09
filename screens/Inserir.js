import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import axios from "axios";
import { Button, Avatar, Header, ListItem } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import FlashMessage, { showMessage } from "react-native-flash-message";

export default function InserirScreen({ route, navigation }) {
  const [getNome, setNome] = useState();
  const [getEmail, setEmail] = useState();
  const [getTelefone, setTelefone] = useState();
  const [getCpf, setCpf] = useState();

  async function inserirDados() {
    await axios
      .post("http://professornilson.com/testeservico/clientes", {
        nome: getNome,
        email: getEmail,
        telefone: getTelefone,
        cpf: getCpf,
      })
      .then(function (response) {
        showMessage({
          message: "Registro Inserido",
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
          text: "Inserir Dados",
          style: { color: "#fff", fontSize: 20 },
        }}
        leftComponent={
          <Button title="<" onPress={() => navigation.navigate("Listar")} />
        }
      />
      <View style={{ marginTop: 150 }}>
        <Text>Digite seu nome</Text>
        <TextInput
          style={{
            height: 40,
            width: 300,
            borderColor: "grey",
            borderWidth: 1,
            marginBottom: 10,
          }}
          onChangeText={(text) => setNome(text)}
          value={getNome}
        />

        <Text>Digite seu email</Text>
        <TextInput
          style={{
            height: 40,
            width: 300,
            borderColor: "grey",
            borderWidth: 1,
            marginBottom: 10,
          }}
          onChangeText={(text) => setEmail(text)}
          value={getEmail}
        />

        <Text>Digite seu telefone</Text>
        <TextInput
          style={{
            height: 40,
            width: 300,
            borderColor: "grey",
            borderWidth: 1,
            marginBottom: 10,
          }}
          onChangeText={(text) => setTelefone(text)}
          value={getTelefone}
        />

        <Text>Digite seu CPF</Text>
        <TextInput
          style={{
            height: 40,
            width: 300,
            borderColor: "grey",
            borderWidth: 1,
            marginBottom: 20,
          }}
          onChangeText={(text) => setCpf(text)}
          value={getCpf}
        />
      </View>

      <Button
        buttonStyle={styles.button}
        title="Salvar Dados"
        style={{ paddingTop: 20, width: 300 }}
        onPress={() => inserirDados()}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#009b3a",
  },
});
