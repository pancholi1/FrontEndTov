import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import { RootStackScreenProps } from "../../types";


const Personality = ({ navigation }: RootStackScreenProps<"Personality">) => {
  return(
    <View style={styles.container}>

      <ScrollView style={{ width: '90%',    marginTop:"10%"}}>

                    <View style={styles.contenedor_test}>
                      <Text style={styles.name_test}>Test de Personalidad</Text>
                      <Text style={styles.text_test}>
                        Este primer test consta de un total de 98 preguntas que deberán ser respondidas con “SI” o con “NO” dependiendo como te veas frente a diversas situaciones.
                        Una vez seleccionada la respuesta, las preguntas se irán pasando automáticamente. A pesar de que parezca que son muchas, el test es muy sencillo y lleva solo unos pocos minutos.
                        Con esta herramienta lograremos ayudarte a conocer cuál sería la decisión más acertada partiendo de tus intereses, habilidades y/o preferencias, conocerás cual es el área ocupacional más acertada con tus elecciones.

                      </Text>
                    </View>
      <Pressable 
      onPress={() => navigation.navigate("SurveyScreen")}
      style={styles.button}><Text style={styles.text_button}>COMENZAR TEST</Text></Pressable>
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
    fontSize:16,
    color: "#DED3F4",
    padding:"4%"
  },
  text_test:{
    width:"85%",
    alignItems: 'center',
    paddingBottom:"5%",
    color:"linear-gradient( rgba(222, 211, 244, 1))"
  },
  button:{
    marginTop: 35,
    width: "80%",
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: "linear-gradient(180deg, rgba(6, 214, 221, 0.72) 0%, rgba(6, 214, 221, 0.08) 100%)",
    padding:"3%",
    marginLeft:"10%"
  },
  text_button:{
    fontSize: 18,
    color:"#DED3F4"
  }
});
