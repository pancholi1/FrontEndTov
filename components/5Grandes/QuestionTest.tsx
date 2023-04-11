import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { gradients, gradientsButton } from "../../constants/Gradients";

const QuestionTest = ({ id, question, onAnswered, dimension, dimensiones }) => {

  const [count, setCount] = useState({
    O: 0, //APERTURA
    E: 0, //EXTROVISION
    A: 0, //AMABILIDAD
    N: 0, //NEUROCITICISMO
    C: 0, //ESCRUPULOSIDAD
  });

  const handleYes = () => {
  const updatedCount = {
      ...count,
    [dimensiones]: count[dimensiones] + 2}
    setCount(updatedCount)
    onAnswered(updatedCount);
  };
  const handleYes2 = () => {
    const updatedCount = {
      ...count,
    [dimensiones]: count[dimensiones] + 2}
    setCount(updatedCount)
    onAnswered(updatedCount);
  };
  const handleYes3 = () => {
    const updatedCount = {
      ...count,
    [dimensiones]: count[dimensiones] + 3}
    setCount(updatedCount)
    onAnswered(updatedCount);
  };
  const handleYes4 = () => {
    const updatedCount = {
      ...count,
    [dimensiones]: count[dimensiones] + 4}
    setCount(updatedCount)
    onAnswered(updatedCount);
  };
  const handleYes5 = () => {
    const updatedCount = {
      ...count,
    [dimensiones]: count[dimensiones] + 5}
    setCount(updatedCount)
    onAnswered(updatedCount);
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={gradients.inputs}
        start={{ x: 1, y: 1 }}
        end={{ x: 0, y: 0 }}
        style={styles.container_test}
      >
        <View style={styles.container_test}>
          <Text style={styles.numero_test}>{id}/50</Text>
          <Text style={styles.text_test}>{question}</Text>
          <Pressable style={styles.button} onPress={handleYes}>
            <LinearGradient
              colors={["#0995a6", "#112044"]}
              style={styles.gradientBoton}
            >
              <Text style={styles.button_text}>EN DESACUERDO</Text>
            </LinearGradient>
          </Pressable>
          <Pressable style={styles.button} onPress={handleYes2}>
            <LinearGradient
              colors={["#0995a6", "#112044"]}
              style={styles.gradientBoton}
            >
              <Text style={styles.button_text2}>LEVEMENTE EN DESACUERDO</Text>
            </LinearGradient>
          </Pressable>
          <Pressable style={styles.button} onPress={handleYes3}>
            <LinearGradient
              colors={["#0995a6", "#112044"]}
              style={styles.gradientBoton}
            >
              <Text style={styles.button_text}>NEUTRAL</Text>
            </LinearGradient>
          </Pressable>
          <Pressable style={styles.button} onPress={handleYes4}>
            <LinearGradient
              colors={["#0995a6", "#112044"]}
              style={styles.gradientBoton}
            >
              <Text style={styles.button_text}>LEVEMENTE DE ACUERDO</Text>
            </LinearGradient>
          </Pressable>
          <Pressable style={styles.button} onPress={handleYes5}>
            <LinearGradient
              colors={["#0995a6", "#112044"]}
              style={styles.gradientBoton}
            >
              <Text style={styles.button_text}>DE ACUERDO</Text>
            </LinearGradient>
          </Pressable>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#130C34",
    alignItems: "center",
    width: "100%",
  },
  container_test: {
    marginTop: "5%",
    borderRadius: 15,
    width: "88%",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "space-around",
    paddingBottom: 20,
  },
  numero_test: {
    color: "#DED3F4",
    fontWeight: "600",
    fontSize: 20,
    paddingBottom: "5%",
    fontFamily: "Poppins_ExtraBold",
  },
  text_test: {
    color: "#DED3F4",
    fontWeight: "600",
    fontSize: 14,
    textAlign: "center",
    alignItems: "center",
    fontFamily: "Poppins_ExtraBold",
    height:100
  },
  gradientBoton: {
    borderRadius: 15,
    width: "100%",
    height: 65,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  button: {
    width: "100%",
    marginTop: "8%",
    borderRadius: 15,
  },
  button_text: {
    fontSize: 18,
    color: "#DED3F4",
    fontFamily: "Poppins_ExtraBold",
    marginLeft: 20,
  },
  button_text2: {
    fontSize: 18,
    color: "#DED3F4",
    fontFamily: "Poppins_ExtraBold",
    marginLeft: 20,
  },
});
export default QuestionTest;
