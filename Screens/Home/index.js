import { ScrollView, View, StyleSheet } from 'react-native';
import React, { useRef } from 'react';
import NavBar from '../../componentes/navbar';
import Card from '../../componentes/card';
import data from '../../data';

export default function App() {
  const scrollViewRef = useRef();

  return (
    <View style={styles.container}>
       <NavBar />
       <ScrollView ref={scrollViewRef} style={styles.scrollView}>
         <View style={styles.cardsContainer}>
           {data.map((item) => (
             <Card
               key={item.id}
               preco={item.preco}
               nome={item.nome}
               imagem={item.imagem}
               quantidade={item.quantidade}
               tamanho={item.tamanho}
               cor={item.cor}
             />
           ))}
         </View>
       </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#081217',
    alignItems: 'center',
  },
  scrollView: {
    width: '100%',
  },
  cardsContainer: {
    flexDirection: 'row', 
    flexWrap: 'wrap',     
    justifyContent: 'center',
    marginTop: 30,
  },
});
