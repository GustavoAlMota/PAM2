import { View, Text } from "react-native";
import estilo from "./style";

export default function Header() {
  return (
    <View style={estilo.header}>
      <Text style={estilo.titulo}>Minha Rotina Semanal</Text>
      <Text style={estilo.subtitulo}>Total de Horas = 168 - 100%</Text>
      <View
        style={{
          width: "95%",
          flexDirection: "row",
          marginTop: 20,
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Text style={estilo.tituloCard}>Atividade</Text>
        <Text style={estilo.tituloCard}>Descrição</Text>
        <Text style={estilo.tituloCard}>Porcentagem </Text>
      </View>
    </View>
  );
}
