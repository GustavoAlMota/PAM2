import {StyleSheet} from 'react-native'

const estilo = StyleSheet.create({
    
  nav: {
    backgroundColor: '#ED5713',
    width: '100%',
    height: 40,
    alignItems:'center',
    justifyContent:'space-between', 
    flexDirection: 'row',
    padding: 15,
    position: 'absolute',
    justifyContent:'center',
    zIndex: 1,
    position: 'fixed'

  },
  logo: {
    width: 150,
    height: 150,
    display: 'flex',
  },

})

export default estilo;