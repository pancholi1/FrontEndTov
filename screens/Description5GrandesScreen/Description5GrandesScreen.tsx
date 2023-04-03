import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { RootStackScreenProps } from "../../types";

import { LinearGradient } from "expo-linear-gradient";
import { gradients } from "../../constants/Gradients";

const Description5GrandesScreen = ({
  navigation,
}: RootStackScreenProps<"Description5GrandesScreen">) => {
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
            <Text style={styles.name_test}>Test de los 5 Grandes</Text>
            <Text style={styles.text_test}>
              Este test consta de un total de 50 preguntas que deberán ser
              respondidas con con puntaje del 1 al 5 (En desacuerdo- Ligeramente
              en desacuerdo- neutral- Ligeramente de acuerdo- De acuerdo)
              dependiendo como te veas frente a diversas situaciones. Una vez
              seleccionada la respuesta, las preguntas se irán pasando
              automáticamente. El test es muy sencillo y lleva solo unos pocos
              minutos. Esta prueba analiza la composición de 5 dimensiones de la
              personalidad y evalúa en qué grado está presente cada una. En base
              al resultado se puede determinar cómo será tu desempeño en un rol
              o profesión.
            </Text>
          </LinearGradient>
        </View>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Test5Grandes")}
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
            <Text style={styles.text_button}>COMENZAR TEST</Text>
          </LinearGradient>
        </Pressable>
      </ScrollView>
    </View>
  );
};

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
  name_test: {
    fontWeight: "700",
    fontSize: 20,
    color: "#DED3F4",
    padding: "4%",
    fontFamily: "Poppins_ExtraBold",
  },
  text_test: {
    width: "85%",
    alignItems: "center",
    paddingBottom: "5%",
    color: "#DED3F4",
    fontFamily: "Poppins_ExtraBold",
    textAlign: "center",
    fontSize: 14,
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
});
export default Description5GrandesScreen;
