import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { LinearGradient } from "expo-linear-gradient";
import { gradients } from "../../constants/Gradients";

interface SurveyProps {
  id: number;
  question: string;
  resultado: string;
  onAnswered: (answer: boolean) => void;
}

const Survey: React.FC<SurveyProps> = ({ id, question, resultado, onAnswered }) => {
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
                  style={{       marginTop:"13%",
                  borderRadius:15,
                  width:"90%",
                  alignItems:"center",
                  //backgroundColor:"rgb(40, 32, 86)",
                  height:350}}
                  >
            <View style={styles.container_test}>
                <Text style={styles.numero_test}>{id}/98</Text>
                <Text style={styles.text_test}>{question}</Text>
                <Pressable style={styles.button} onPress={handleYes}>
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
                  <Text style={styles.button_text}>SI</Text>
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
                      height: 50,
                      alignItems: "center",
                      justifyContent: "center",
                      borderColor: "#7B68A9",
                      borderWidth: 1,
                    }}
                  >
                    <Text style={styles.button_text}>NO</Text>
                  </LinearGradient>
                </Pressable>
            </View>
                </LinearGradient>
 
    </View>

  );
};

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor: "#130C34",
      alignItems:"center",
      width:'100%',
    },
    container_test:{
      marginTop:'5%',
        borderRadius:15,
        width:"90%",
        alignItems:"center",
        textAlign:"center",
        //backgroundColor:"rgb(40, 32, 86)",
        height:350
    },
    numero_test:{
        color:"#DED3F4",
        fontWeight:"600",
        fontSize:20,
        //padding:"3%",
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
    },
    button:{
        width:"50%",
        margin: "5%",
        alignItems: "center",
    },
    button2:{
        width:"50%",
        alignItems: "center",
        marginTop:20
    },
    button_text:{
        fontSize: 20,
        color:"#DED3F4",
        fontFamily:"Poppins_ExtraBold",
    },
});

export default Survey;
