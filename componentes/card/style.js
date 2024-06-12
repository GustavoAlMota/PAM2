import { StyleSheet } from 'react-native';

const estilo = StyleSheet.create({
  card: {
    height: 300,
    marginTop: 25,
    width: '100%',
    backgroundColor: '#ED5713',
    borderRadius: 10,

  },
  imagem: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    backgroundColor:'#ffff'
  },
  conteudoNome: {
    alignItems: 'center'
  },
  nome: {
    color: 'white',
    fontSize: 20
  },
  conteudo: {
    marginTop: 10,
  },
  texto: {
    color: 'white',
    fontSize: 14,
    marginHorizontal: 10,
    padding: 3,
  },
  containerPrincipal: {
    width:'60%'
  },

});

export default estilo;
