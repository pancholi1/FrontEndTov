import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { LinearGradient } from "expo-linear-gradient";
import { gradients } from "../../constants/Gradients";


const ComponentQuestion = ({id ,question ,onAnswered}) => {

    const [answer, setAnswer] = useState<boolean | null>(null);

    const handleYes = () => {
        setAnswer(true);
        onAnswered(true);
      };
    
      const handleNo = () => {
        setAnswer(false);
        onAnswered(false);
      };

      
  return (
      <View style={styles.container}>
      <LinearGradient
            colors={gradients.inputs}
            start={{ x: 1, y: 1 }}
            end={{ x: 0, y: 0 }}
            style={{        marginTop:"10%",
            borderRadius:15,
            width:"90%",
            alignItems:"center",
            height:350}}
          >
    <View style={styles.container_test}>
        <Text style={styles.numero_test}>{id}/80</Text>
        <Text style={styles.text_test}>{question}</Text>
        <Pressable style={styles.button} onPress={handleYes}>
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
            <Text style={styles.button_text}>ME INTERESA</Text>
            </LinearGradient>
            </Pressable>
        <Pressable style={styles.button2} onPress={handleNo}>
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
            <Text style={styles.button_text}>NO ME INTERESA</Text>
            </LinearGradient>
            </Pressable>
    </View>
            </LinearGradient>
</View>
  )
};

export default ComponentQuestion

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor: "#130C34",
      alignItems:"center",
      width:'100%',
    },
    container_test:{
      marginTop:'3%',
        borderRadius:15,
        width:"90%",
        alignItems:"center",
        textAlign:"center",
        height:350
    },
    numero_test:{
        color:"#DED3F4",
        fontWeight:"600",
        fontSize:20,
        padding:"3%",
        fontFamily: "Poppins_Regular"
    },
    text_test:{
        color:"#DED3F4",
        fontWeight:"600",
        fontSize:14,
        width:"85%",
        alignItems: 'center',
        height:100,
        fontFamily: "Poppins_Regular"
        //margin:"10%"
    },
    button:{
        width:"60%",
        marginTop: "10%",
        alignItems: "center",
    },
    button2:{
        width:"60%",
        alignItems: "center",
        margin:"10%"
    },
    button_text:{
        fontSize: 20,
        color:"#DED3F4",
        fontFamily:"Poppins_ExtraBold",
    },
});