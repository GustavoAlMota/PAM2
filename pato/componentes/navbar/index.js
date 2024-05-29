import { View, Image, TouchableOpacity } from 'react-native';
import estilo from './style';

export default function NavBar({ onLogoPress }) {
  return (
    <View style={estilo.nav}>
      <TouchableOpacity onPress={onLogoPress}>
        <Image style={estilo.logo} source={require('../../assets/reloo.png')} />
      </TouchableOpacity>
    </View>
  );
}
