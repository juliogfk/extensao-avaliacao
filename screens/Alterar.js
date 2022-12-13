import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import axios from "axios";
import { Button, Avatar, Header, ListItem } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import FlashMessage, { showMessage } from "react-native-flash-message";

export default function AlterarScreen({ route, navigation }) {
  const [getProduto, setProduto] = useState();
  const [getArmazenamento, setArmazenamento] = useState();
  const [getValor, setValor] = useState();
  const [getId, setId] = useState();

  useEffect(() => {
    if (route.params) {
      const { produto } = route.params;
      const { armazenamento } = route.params;
      const { valor } = route.params;
      const { id } = route.params;

      setProduto(produto);
      setArmazenamento(armazenamento);
      setValor(valor);
      setId(id);
    }
  }, []);

  function alterarDados() {
    axios
      .put("http://localhost:5000/produtos/" + getId, {
        produto: getProduto,
        armazenamento: getArmazenamento,
        valor: getValor,
      })
      .then(function (response) {
        showMessage({
            message:"Produto Alterado",
            type:"success",
        });
      }).catch(function (error) {
            console.log(error);
      });
  }

  function excluirDados() {
    axios
      .delete("http://localhost:5000/produtos/" + getId)
      .then(function (response) {
            showMessage({
                message:"Produto Excluído",
                type:"danger",
            });
        
            setProduto(null);
            setArmazenamento(null);
            setValor(null);
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

      <Text>Digite o produto</Text>
      <TextInput
        style={{ height: 40, width: 300, borderColor: "grey", borderWidth: 1 }}
        onChangeText={(text) => setProduto(text)}
        value={getProduto}
      />

      <Text>Digite seu armazenamento</Text>
      <TextInput
        style={{ height: 40, width: 300, borderColor: "grey", borderWidth: 1 }}
        onChangeText={(text) => setArmazenamento(text)}
        value={getArmazenamento}
      />

      <Text>Digite seu valor</Text>
      <TextInput
        style={{ height: 40, width: 300, borderColor: "grey", borderWidth: 1 }}
        onChangeText={(text) => setValor(text)}
        value={getValor}
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
