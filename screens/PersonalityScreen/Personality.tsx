import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import { RootStackScreenProps } from "../../types";


import { LinearGradient } from "expo-linear-gradient";
import { gradients } from "../../constants/Gradients";


const Personality = ({ navigation }: RootStackScreenProps<"Personality">) => {
  return(
    <View style={styles.container}>

      <ScrollView style={{ width: '90%',    marginTop:"10%"}}>
                    <View style={styles.contenedor_test}>
                          <LinearGradient
                          colors={gradients.inputs}
                          start={{ x: 1, y: 1 }}
                          end={{ x: 0, y: 0 }}
                          style={styles.contenedor_test}
                          >
                      <Text style={styles.name_test}>Test Chaside</Text>
                      <Text style={styles.text_test}>
                        Este primer test consta de un total de 98 preguntas que deberán ser respondidas con “SI” o con “NO” dependiendo como te veas frente a diversas situaciones.
                        Una vez seleccionada la respuesta, las preguntas se irán pasando automáticamente. A pesar de que parezca que son muchas, el test es muy sencillo y lleva solo unos pocos minutos.
                        Con esta herramienta lograremos ayudarte a conocer cuál sería la decisión más acertada partiendo de tus intereses, habilidades y/o preferencias, conocerás cual es el área ocupacional más acertada con tus elecciones.
                      </Text>
                      </LinearGradient>
                    </View>
      <Pressable 
      onPress={() => navigation.navigate("SurveyScreen")}
      style={styles.button}>
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

        <Text style={styles.text_button}>COMENZAR TEST</Text>
                  </LinearGradient>
        </Pressable>
      </ScrollView>
    </View>
  )
};

export default Personality;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "#130C34",
    alignItems:"center",
  },
  contenedor_test:{
   width:"100%",
   alignItems:"center",
   textAlign:"center",
   backgroundColor:"rgb(40, 32, 86)",
   borderRadius:15,
  },
  name_test:{
    fontWeight:"700",
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
    fontSize:14,
  },
  button:{
    marginTop: 35,
    width: "90%",
    alignItems: "center",
    borderRadius: 15,
    //padding:"3%",
    marginLeft:"5%"
  },
  text_button:{
    fontSize: 18,
    color:"#DED3F4",
    fontFamily:'Poppins_ExtraBold'
  }
});
