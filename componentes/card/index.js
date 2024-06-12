import {View , Image , Text , TouchableOpacity} from 'react-native'
import estilo from './style'
import { useNavigation } from '@react-navigation/native'

export default function Card({ nome, preco, quantidade, cor, tamanho, imagem,}) {

  const navigation = useNavigation();

  return (
    <TouchableOpacity style={estilo.containerPrincipal}
    onPress = {() => navigation.navigate('Produtos',{nome:nome, preco:preco, quantidade:quantidade, cor:cor, tamanho:tamanho, imagem:imagem})}>

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
    </TouchableOpacity>
  );
}
