import {View, StyleSheet ,Text, Image} from 'react-native';
import React, { useRef } from 'react';
import NavBar from '../../componentes/navbar';
import { useRoute } from '@react-navigation/native';


export default function App() {


    const route = useRoute();

  const scrollViewRef = useRef();

  const handleLogoPress = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ y: 0, animated: true });
    }
  };

  return (
    <View style={styles.container}>
      <NavBar></NavBar>
      <View style={styles.card}>
      <Image style={styles.imagem} source={route.params.imagem} resizeMode="contain"/>
      <Text style= {styles.text}> {route.params.nome} </Text>
      <Text style= {styles.text}> {route.params.preco} </Text>
      <Text style= {styles.text}> {route.params.cor} </Text>
      <Text style= {styles.text}> {route.params.tamanho} </Text>
      </View>


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
  card: {
    height: 420,
    marginTop: 80,
    width: 300,
    backgroundColor: '#ED5713',
    borderRadius: 10,
    alignItems: 'center',
  },
  imagem: {
    width: 300,
    height: 300,
    borderRadius: 10,
  },
  text : {
    color: 'white',
    fontSize: 20,
    marginTop: 2,
  }
});
