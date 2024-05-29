import {View , Image , Text } from 'react-native'
import estilo from './style'

export default function Card({ nome, preco, quantidade, cor, tamanho, imagem }) {
  return (
    <View style={estilo.container}>
      <View style={estilo.card}>
      <Image style={estilo.imagem} source={imagem} resizeMode="contain"/>
        <View style={estilo.conteudoNome}>
          <Text style={estilo.nome}>{nome}</Text>
        </View>
        <View style={estilo.conteudo}>
          <Text style={estilo.texto}>Preço: {preco}</Text>
          <Text style={estilo.texto}>Quantidade: {quantidade}</Text>
          <Text style={estilo.texto}>Cor: {cor}</Text>
          <Text style={estilo.texto}>Tamanho: {tamanho}</Text>
        </View>
      </View>

    </View>
  );
}
