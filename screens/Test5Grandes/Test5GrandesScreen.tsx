import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import Navigation from '../../navigation'
import { RootStackScreenProps } from '../../types'

import { LinearGradient } from "expo-linear-gradient";
import { gradients } from "../../constants/Gradients";

const Test5GrandesScreen = ({navigation}: RootStackScreenProps<'Test5GrandesScreen'>) => {
  return (
    <View style={styles.container}>
        <View style={styles.contenedor_test}>
        <LinearGradient
          colors={gradients.inputs}
          start={{ x: 1, y: 1 }}
          end={{ x: 0, y: 0 }}
          style={styles.contenedor_test}
        >
            <Text style={styles.name_test}>Test de los 5 Grandes</Text>
            <Text style={styles.text_test}>
                Este test consta de un total de 50 preguntas que deberán ser respondidas con con puntaje del 1 al 5 (En desacuerdo- Ligeramente en desacuerdo- neutral- Ligeramente de acuerdo- De acuerdo) dependiendo como te veas frente a diversas situaciones.
                Una vez seleccionada la respuesta, las preguntas se irán pasando automáticamente.
                El test es muy sencillo y lleva solo unos pocos minutos.
                Esta prueba analiza la composición de 5 dimensiones de la personalidad y evalúa en qué grado está presente cada una. En base al resultado se puede determinar cómo será tu desempeño en un rol o profesión.
            </Text>
            </LinearGradient>
        </View>
        <Pressable style={styles.button} onPress={() => navigation.navigate('Test5Grandes')}>
        <LinearGradient
                  colors={gradients.inputs}
                  start={{ x: 1, y: 1 }}
                  end={{ x: 0, y: 0 }}
                  style={{
                    borderRadius: 15,
                    width: "100%",
                    height: 50,
                    alignItems: "center",
                    justifyContent: "center",
                    borderColor: "#7B68A9",
                    borderWidth: 1,
                  }}
                >
          <Text style={styles.text_button}>COMENZAR TEST</Text>
          </LinearGradient>
          </Pressable>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        width:'100%',
        backgroundColor: '#130C34',
      },
      contenedor_test:{
        width:"95%",
        alignItems:"center",
        textAlign:"center",
        //backgroundColor:"rgb(40, 32, 86)",
        borderRadius:15,
        marginTop:'3%'
       },
       name_test:{
        //fontWeight:"700",
        fontSize:20,
        color: "#DED3F4",
        padding:"4%",
        fontFamily: "Poppins_Regular"
      },
      text_test:{
        width:"85%",
        alignItems: 'center',
        paddingBottom:"5%",
        color:"rgba(222, 211, 244, 1)",
        fontFamily: "Poppins_Regular",
        fontSize:14
      },
      button:{
        marginTop: 35,
        width: "80%",
        alignItems: "center",
        borderRadius: 15,
      },
      text_button:{
        fontSize: 18,
        color:"#DED3F4",
        fontFamily:'Poppins_ExtraBold'
      }, 
})
export default Test5GrandesScreen