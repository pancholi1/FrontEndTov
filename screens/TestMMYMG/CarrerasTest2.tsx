import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../types';
import { LinearGradient } from 'expo-linear-gradient';
import { gradients } from '../../constants/Gradients';

type CarrerasTestProps = {
    route: RouteProp<RootStackParamList, 'CarrerasTest2'>;
}


const CarrerasTest2 = ({route}: CarrerasTestProps) => {


    const {areaUno, areaDos, prop} = route.params

  return (
    <View style={styles.container}>
              <LinearGradient
          colors={gradients.inputs}
          start={{ x: 1, y: 1 }}
          end={{ x: 0, y: 0 }}
          style={styles.container_area}
        >
        <View style={styles.container_area}>
            <Text style={styles.text}>Listado de posibles carreras dentro de ese area.</Text>
            {prop === 'areaUno'? <Text style={styles.text}>{areaUno}</Text> : <Text style={styles.text}>{areaDos}</Text>}
        </View>
        </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        width:'100%',
        backgroundColor: '#130C34',
    },
    container_area:{
        marginTop:"3%",
        borderRadius:15,
        width:"90%",
        alignItems:"center",
        textAlign:"center",
    },
    text:{
        color:"rgba(222, 211, 244, 1)",
        fontWeight:"600",
        fontSize:17,
        width:"85%",
        alignItems: 'center',
        marginTop:'5%',
        marginBottom:'2%'
    },
})

export default CarrerasTest2