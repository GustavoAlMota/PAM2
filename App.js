import React from "react";
import { Text, StyleSheet, View, Image, FlatList } from "react-native";
import Header from "./components/Header";
import Card from "./components/Card";
import data from "./data";
export default function App() {
  return (
    <View style={estilo.container}>
      <Header></Header>
      <View style={estilo.espaco}></View>
      <View style={estilo.main}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Card
              porcentagem={item.porcentagem}
              titulo={item.titulo}
              imagem={item.imagem}
              descricao={item.descricao}
            ></Card>
          )}
        />
      </View>
    </View>
  );
}
const estilo = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    borderColor: "#90E0EF",
    paddingHorizontal: 20,
  },
  espaco: {
    backgroundColor: 'black',
    width: '100vw',
    height: '15vh'
  },
  main:{
    marginTop: '-13vh',
    backgroundColor: 'white',
    width: '100vw',
    alignItems: "center",
    borderTopRightRadius: '15px',
    borderTopLeftRadius: '15px',
  }
});
