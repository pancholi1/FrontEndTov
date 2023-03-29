import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../types';
import { LinearGradient } from 'expo-linear-gradient';
import { gradients } from '../../constants/Gradients';

type CarrerasTestProps = {
    route: RouteProp<RootStackParamList, 'CarrerasTest2'>;
}


const CarrerasTest2 = ({route}: CarrerasTestProps) => {


    const {areaUno, areaDos, prop} = route.params

    let msjAreaUno = areaUno?.split(',').join('\n')
    let msjAreaDos = areaDos?.split(',').join('\n')
  return (
    <ScrollView style={{ width: "100%", backgroundColor: "#130C34" }}>
        <View style={styles.container}>
                <LinearGradient
            colors={gradients.inputs}
            start={{ x: 1, y: 1 }}
            end={{ x: 0, y: 0 }}
            style={styles.container_area}
            >
            <View style={styles.container_area}>
                <Text style={styles.text}>AREA O GRUPO</Text>
                <Text style={styles.text2}>Listado de posibles carreras dentro de ese area.</Text>
                {prop === 'areaUno'? <Text style={styles.text2}>{msjAreaUno}</Text> : <Text style={styles.text2}>{msjAreaDos}</Text>}
            </View>
            </LinearGradient>
        </View>
    </ScrollView>
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
        marginTop:"4%",
        borderRadius:15,
        width:"95%",
        alignItems:"center",
    },
    text:{
        color:"#DED3F4",
        fontWeight:"600",
        fontSize:20,
        width:"85%",
        alignItems: 'center',
        textAlign:'center',
        marginTop:'5%',
        marginBottom:'2%',
        fontFamily: "Poppins_ExtraBold"
    },
    text2:{
        color:"#DED3F4",
        fontWeight:"600",
        fontSize:16,
        width:"90%",
        alignItems: 'center',
        marginTop:'5%',
        marginBottom:'2%',
        fontFamily: "Poppins_Regular",
    },
})

export default CarrerasTest2