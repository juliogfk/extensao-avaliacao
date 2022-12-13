import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import axios from "axios";
import { Button, Avatar, Header, ListItem } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import FlashMessage, { showMessage } from "react-native-flash-message";

export default function InserirUsuarioScreen({ route, navigation }) {
  const [getNome, setNome] = useState();
  const [getEmail, setEmail] = useState();
  const [getSenha, setSenha] = useState();

  async function inserirDados() {
    await axios
      .post("http://localhost:5000/clientes/", {
        nome: getNome,
        email: getEmail,
        senha: getSenha,
      })
      .then(function (response) {
        showMessage({
          message: "Cliente cadastrado",
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
          text: "Cadastrar Cliente",
          style: { color: "#fff", fontSize: 20 },
        }}
        leftComponent={
          <Button title="<" onPress={() => navigation.navigate("Home")} />
        }
      />
      <View style={{ marginTop: 150 }}>
        <Text>Digite o nome</Text>
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

        <Text>Digite o email</Text>
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

        <Text>Digite a senha</Text>
        <TextInput
          style={{
            height: 40,
            width: 300,
            borderColor: "grey",
            borderWidth: 1,
            marginBottom: 10,
          }}
          onChangeText={(text) => setSenha(text)}
          value={getSenha}
        />
      </View>

      <Button
        buttonStyle={styles.button}
        title="Salvar"
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
