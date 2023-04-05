import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { gradients, gradientsButton } from "../../constants/Gradients";

interface SurveyProps {
  id: number;
  question: string;
  resultado: string;
  onAnswered: (answer: boolean) => void;
}

const Survey: React.FC<SurveyProps> = ({
  id,
  question,
  resultado,
  onAnswered,
}) => {
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
        style={{
          marginTop: "13%",
          borderRadius: 15,
          width: "90%",
          alignItems: "center",
          height: 400,
        }}
      >
        <View style={styles.container_test}>
          <Text style={styles.numero_test}>{id}/98</Text>
          <Text style={styles.text_test}>{question}</Text>
          <LinearGradient
            colors={["#0995a6", "#197189", "#112044"]}
            style={{
              borderRadius: 15,
              width: "70%",
              height: 63,
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "10%",
              marginTop: "13%",
            }}
          >
            <Pressable style={styles.button} onPress={handleYes}>
              <Text style={styles.button_text}>SI</Text>
            </Pressable>
          </LinearGradient>
          <LinearGradient
            colors={["#0995a6", "#197189", "#112044"]}
            style={{
              borderRadius: 15,
              width: "70%",
              height: 63,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Pressable style={styles.button} onPress={handleNo}>
              <Text style={styles.button_text}>NO</Text>
            </Pressable>
          </LinearGradient>
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
    width: "90%",
    alignItems: "center",
    textAlign: "center",
    height: 350,
  },
  numero_test: {
    color: "#DED3F4",
    fontWeight: "600",
    fontSize: 20,
    fontFamily: "Poppins_ExtraBold",
    marginBottom: "4%",
  },
  text_test: {
    color: "#DED3F4",
    fontWeight: "600",
    fontSize: 14,
    width: "85%",
    alignItems: "center",
    textAlign: "center",
    fontFamily: "Poppins_ExtraBold",
    height:100
  },
  button: {
    width: "100%",
    alignItems: "center",
    height: 65,
    justifyContent: "center",
    borderRadius: 15,
  },
  button2: {
    width: "50%",
    alignItems: "center",
    marginTop: 20,
  },
  button_text: {
    fontSize: 20,
    color: "#DED3F4",
    fontFamily: "Poppins_ExtraBold",
  },
});

export default Survey;
