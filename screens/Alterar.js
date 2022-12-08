import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import axios from "axios";
import { Button, Avatar, Header, ListItem } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import FlashMessage, { showMessage } from "react-native-flash-message";

export default function AlterarScreen({ route, navigation }) {
  const [getNome, setNome] = useState();
  const [getTelefone, setTelefone] = useState();
  const [getCpf, setCpf] = useState();
  const [getId, setId] = useState();

  useEffect(() => {
    if (route.params) {
      const { nome } = route.params;
      const { telefone } = route.params;
      const { cpf } = route.params;
      const { id } = route.params;

      setNome(nome);
      setTelefone(telefone);
      setCpf(cpf);
      setId(id);
    }
  }, []);

  function alterarDados() {
    axios
      .put("http://professornilson.com/testeservico/clientes/" + getId, {
        nome: getNome,
        telefone: getTelefone,
        cpf: getCpf,
      })
      .then(function (response) {
        showMessage({
            message:"Registro Alterado",
            type:"success",
        });
      }).catch(function (error) {
            console.log(error);
      });
  }

  function excluirDados() {
    axios
      .delete("http://professornilson.com/testeservico/clientes/" + getId)
      .then(function (response) {
            showMessage({
                message:"Registro Excluído",
                type:"danger",
            });
        
            setNome(null);
            setTelefone(null);
            setCpf(null);
            setId(null);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <View style={{ alignItems: "center"}}>
      <FlashMessage position="top" />  
      <Header
        centerComponent={{ text: "Contato", style: { color: "#fff", fontSize:20} }}
        leftComponent={
          <Button title="<" onPress={() => navigation.navigate("Listar")} />
        }
      />

      <Text>Digite seu nome</Text>
      <TextInput
        style={{ height: 40, width: 300, borderColor: "grey", borderWidth: 1 }}
        onChangeText={(text) => setNome(text)}
        value={getNome}
      />

      <Text>Digite seu telefone</Text>
      <TextInput
        style={{ height: 40, width: 300, borderColor: "grey", borderWidth: 1 }}
        onChangeText={(text) => setTelefone(text)}
        value={getTelefone}
      />

      <Text>Digite seu CPF</Text>
      <TextInput
        style={{ height: 40, width: 300, borderColor: "grey", borderWidth: 1 }}
        onChangeText={(text) => setCpf(text)}
        value={getCpf}
      />

      <Button
        title="Alterar"
        style={{ paddingTop: 20, width: 300 }}
        onPress={() => alterarDados()}
      ></Button>

      <Button buttonStyle={styles.button}
        title="Excluir"
        style={{ paddingTop: 20, width: 300 }}
        onPress={() => excluirDados()}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#fd0000"      
      },
})
