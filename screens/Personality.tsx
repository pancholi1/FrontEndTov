import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";


import { LinearGradient } from "expo-linear-gradient";
import { gradients } from "../constants/Gradients";
import { patterns } from "../constants/Patterns";


const Personality = () => {
  return(
    <View style={styles.container}>

      <ScrollView style={{ width: '90%',    marginTop:"10%"}}>
      <LinearGradient
                  colors={gradients.inputs}
                  style={{borderRadius:15, }}>
                    <View style={styles.contenedor_test}>
                      <Text style={styles.name_test}>Test de Personalidad</Text>
                      <Text style={styles.text_test}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam debitis repellendus minima earum sint error sapiente eum vel, quidem atque veritatis, dolore ad enim similique, aliquam ducimus consequuntur itaque quibusdam!
                      </Text>
                    </View>
      </LinearGradient>
      <Pressable style={styles.button}><Text style={styles.text_button}>COMENZAR TEST</Text></Pressable>
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
  },
  name_test:{
    fontWeight:"600",
    color: "#DED3F4",
    padding:"4%"
  },
  text_test:{
    width:"85%",
    alignItems: 'center',
    paddingBottom:"5%"
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
