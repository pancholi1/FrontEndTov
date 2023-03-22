import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

const QuestionTest = ({id, question, onAnswered}) => {

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
      <View style={styles.container_test}>
        <Text style={styles.numero_test}>{id}/50</Text>
        <Text style={styles.text_test}>{question}</Text>
        <Pressable style={styles.button} onPress={handleYes}><Text style={styles.button_text}>EN DESACUERDO</Text></Pressable>
        <Pressable style={styles.button2} onPress={handleNo}><Text style={styles.button_text}>LEVEMENTE EN DESACUERDO</Text></Pressable>
        <Pressable style={styles.button2} onPress={handleNo}><Text style={styles.button_text}>NEUTRAL</Text></Pressable>
        <Pressable style={styles.button2} onPress={handleNo}><Text style={styles.button_text}>LEVEMENTE DE ACUERDO</Text></Pressable>
        <Pressable style={styles.button2} onPress={handleNo}><Text style={styles.button_text}>DE ACUERDO</Text></Pressable>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "#130C34",
    alignItems:"center",
    width:'100%',
  },
  container_test:{
      marginTop:"13%",
      borderRadius:15,
      width:"90%",
      alignItems:"center",
      textAlign:"center",
      backgroundColor:"rgb(40, 32, 86)",
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
      borderRadius: 15,
      backgroundColor: " rgba(6, 214, 221, 0.72) 0%, rgba(6, 214, 221, 0.08) ",
      padding:"5%",
  },
  button2:{
      width:"60%",
      alignItems: "center",
      borderRadius: 15,
      backgroundColor: "rgba(6, 214, 221, 0.72) 0%, rgba(6, 214, 221, 0.08) 100%",
      padding:"5%",
      margin:"10%"
  },
  button_text:{
      fontSize: 20,
      color:"#DED3F4",
      fontFamily:"Poppins_ExtraBold",
  },
});
export default QuestionTest