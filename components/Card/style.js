import {StyleSheet} from 'react-native'

const estilo = StyleSheet.create({
    cardTarefa: {
        marginTop: 20,
        backgroundColor: 'white',
        width: '100%',
        height: 'auto',
        alignItems:'center',
        justifyContent:'space-between',
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 0.5,
        flexDirection: 'row',
        padding: 15,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.6,
        shadowRadius: 2,
        elevation: 5,
      },  
      textoCard: {
        fontSize: '1em',
        marginTop: 5,
      },
      imagemCard: {
        width: '25vw',
        height: '15vh',
        marginRight: 15,
        borderColor: 'black',
        borderWidth: 0.5,
        borderRadius: '15px',
      },
      tituloCard: {
        fontSize: '1.3em',
        fontWeight: 'bold',
        color: '#1d3557',
      },

})

export default estilo;

