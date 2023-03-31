import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { RootStackScreenProps } from "../../types";

import { LinearGradient } from "expo-linear-gradient";
import { gradients, gradientsButton } from "../../constants/Gradients";

const TestMMYMGScreen = ({
  navigation,
}: RootStackScreenProps<"TestMMYMGScreen">) => {
  return (
    <View style={styles.container}>
      <ScrollView style={{ width: "90%", marginTop: "10%" }}>
        <View style={styles.contenedor_test}>
          <LinearGradient
            colors={gradients.inputs}
            start={{ x: 1, y: 1 }}
            end={{ x: 0, y: 0 }}
            style={styles.contenedor_test}
          >
            <Text style={styles.name_test}>Test MM Y MG</Text>
            <Text style={styles.text_test}>
              El segundo test consta de un total de 80 preguntas que deberán ser
              respondidas con “ME INTERESA” o con “NO ME INTERESA” dependiendo
              como te veas frente a diversas situaciones. Una vez seleccionada
              la respuesta, las preguntas se irán pasando automáticamente. No
              existen respuestas correctas o incorrectas; lo importante es que
              contestes con sinceridad y confianza para que puedas conocer mejor
              tus intereses vocacionales. De acuerdo a tus respuestas, obtendrás
              un resultado con las dos categorías o áreas de conocimiento que
              más se adapten a tí.{" "}
            </Text>
          </LinearGradient>
        </View>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("TestMMYMG")}
        >
          <LinearGradient
            colors={["#0995a6", "#197189", "#112044"]}
            style={{
              borderRadius: 15,
              width: "90%",
              height: 45,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={styles.text_button}>COMENZAR TEST </Text>
          </LinearGradient>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default TestMMYMGScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#130C34",
  },
  contenedor_test: {
    width: "100%",
    alignItems: "center",
    textAlign: "center",
    borderRadius: 15,
  },
  button: {
    marginTop: 35,
    width: "90%",
    alignItems: "center",
    borderRadius: 15,
    marginLeft: "5%",
  },
  text_button: {
    fontSize: 18,
    color: "#DED3F4",
    fontFamily: "Poppins_ExtraBold",
  },
  name_test: {
    fontWeight: "700",
    fontSize: 20,
    color: "#DED3F4",
    padding: "4%",
    fontFamily: "Poppins_Regular",
  },
  text_test: {
    width: "85%",
    alignItems: "center",
    textAlign: "center",
    paddingBottom: "5%",
    color: "#DED3F4",
    fontFamily: "Poppins_Regular",
    fontSize: 14,
  },
});
