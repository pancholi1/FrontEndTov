import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { RootStackScreenProps } from '../../types'

import { LinearGradient } from "expo-linear-gradient";
import { gradients } from "../../constants/Gradients";

const TestMMYMGScreen = ({ navigation }: RootStackScreenProps<"TestMMYMGScreen">) => {
  return (
    <View style={styles.container}>
      <View style={styles.contenedor_test}>
      <LinearGradient
          colors={gradients.inputs}
          start={{ x: 1, y: 1 }}
          end={{ x: 0, y: 0 }}
          style={{  width:"90%",
          alignItems:"center",
          borderRadius:15,}}
        >
        <Text style={styles.name_test}>Test MM Y MG</Text>
        <Text style={styles.text_test}>El segundo test consta de un total de 80 preguntas que deberán ser respondidas con “ME INTERESA” o con “NO ME INTERESA” dependiendo como te veas frente a diversas situaciones.
        Una vez seleccionada la respuesta, las preguntas se irán pasando automáticamente. No existen respuestas correctas o incorrectas; lo importante es que contestes con sinceridad y confianza para que puedas conocer mejor tus intereses vocacionales.
        De acuerdo a tus respuestas, obtendrás un resultado con las dos categorías o áreas de conocimiento que más se adapten a tí. </Text>

      </LinearGradient>
      </View>
        <Pressable style={styles.button} onPress={() => navigation.navigate('TestMMYMG')}>
          <LinearGradient
                    colors={gradients.inputs}
                    start={{ x: 1, y: 1 }}
                    end={{ x: 0, y: 0 }}
                    style={{
                      borderRadius: 15,
                      width: "100%",
                      height: 54,
                      alignItems: "center",
                      justifyContent: "center",
                      borderColor: "#7B68A9",
                      borderWidth: 1,
                    }}
                  >
                    <Text style={styles.text_button}>COMENZAR TEST </Text>
                  </LinearGradient>
                </Pressable>

    </View>
  )
}

export default TestMMYMGScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    width:'100%',
    backgroundColor: '#130C34',
  },
  contenedor_test:{
    width:"90%",
    alignItems:"center",
    textAlign:"center",
    borderRadius:15,
    marginTop:'10%'
   },
   button:{
    marginTop: 35,
    width: "80%",
    alignItems: "center",
  },
  text_button:{
    fontSize: 18,
    color:"#DED3F4",
    fontFamily:'Poppins_ExtraBold'
  }, 
   name_test:{
    fontWeight:"700",
    fontSize:16,
    color: "#DED3F4",
    padding:"4%",
    fontFamily: "Poppins_Regular"
  },
  text_test:{
    width:"85%",
    alignItems: 'center',
    paddingBottom:"5%",
    color:"rgba(222, 211, 244, 1)",
    fontFamily: "Poppins_Regular"
  },
})