import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import React from "react";
import { RootStackScreenProps } from "../types";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";

const HomeScreen = ({ navigation }: RootStackScreenProps<"HomeScreen">) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Hola</Text>
        <Text style={styles.name}>Francisco Olivero</Text>

        <View style={styles.container_progreso}>
          <Text style={styles.title_progreso}>Progreso</Text>
          <Text style={styles.text_progreso}>
            Realiza el 100% de los test para obtener el resultado final
          </Text>
          <Text style={styles.title_progreso}>0%</Text>
          <Text style={styles.text_progreso}>Aca va la barra con el %</Text>
        </View>

        <Text style={styles.text_test}>Test</Text>

        <View style={styles.test_personalidad}>
          <Image
            source={require("../assets/images/adaptive-icon.png")}
            style={styles.img_test}
          />
          <View style={styles.contenedor_text}>
            <Pressable onPress={() => navigation.navigate("Personality")}>
              <Text style={styles.personalidad_title}>
                Test de Personalidad
              </Text>
            </Pressable>
            <Text style={styles.text_personalidad}>
              Toma menos de 12 minutos.
            </Text>
            <Text style={styles.text_personalidad2}>Responde honestamente</Text>
          </View>
        </View>

        <View style={styles.test_personalidad}>
          <Image
            source={require("../assets/images/adaptive-icon.png")}
            style={styles.img_test}
          />
          <View style={styles.contenedor_text}>
            <Pressable onPress={() => navigation.navigate("Psicotecnico")}>
              <Text style={styles.personalidad_title}>Test psicotecnico</Text>
            </Pressable>
            <Text style={styles.text_psicotecnico}>
              Comprueba por ti mismo las aptitudes que tienes para resolver este
              tipo de pruebas
            </Text>
          </View>
        </View>

        <View style={styles.test_personalidad}>
          <Image
            source={require("../assets/images/adaptive-icon.png")}
            style={styles.img_test}
          />
          <View style={styles.contenedor_text}>
            <Text style={styles.personalidad_title}>Entrevista</Text>
            <Text style={styles.text_entrevista}>
              Agenda una entrevista con un profesional capacitado
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "black",
    paddingLeft: "3%",
    paddingRight: "3%",
  },
  title: {
    color: "white",
    fontSize: 36,
    fontWeight: "700",
    marginTop: 20,
  },
  name: {
    color: "white",
    fontSize: 36,
    fontWeight: "700",
    marginBottom: 20,
  },
  container_progreso: {
    backgroundColor: "#333333",
    borderRadius: 15,
    padding: 10,
    marginTop: 5,
  },
  title_progreso: {
    color: "white",
    marginLeft: 5,
    fontWeight: "700",
    fontSize: 20,
  },
  text_progreso: {
    color: "#C1C1C1",
    marginLeft: 5,
    fontSize: 12,
    marginBottom: 15,
  },
  text_test: {
    color: "white",
    marginLeft: 5,
    fontWeight: "700",
    fontSize: 20,
    marginTop: 15,
  },
  test_personalidad: {
    backgroundColor: "#333333",
    borderRadius: 15,
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
    fontWeight: "500",
  },
  img_test: {
    borderRadius: 7,
    width: "25%",
    height: 90,
  },
  personalidad_title: {
    fontSize: 14,
    color: "white",
    marginTop: 5,
    marginLeft: 10,
    marginBottom: 5,
    fontWeight: "500",
  },
  text_personalidad: {
    fontSize: 14,
    color: "white",
    marginTop: 5,
    marginLeft: 10,
  },
  text_personalidad2: {
    fontSize: 14,
    color: "white",
    marginBottom: 5,
    marginLeft: 10,
  },
  contenedor_text: {
    flexDirection: "column",
  },
  text_psicotecnico: {
    fontSize: 14,
    color: "white",
    marginBottom: 5,
    marginLeft: 10,
    width: "40%",
    paddingBottom: "1%",
  },
  text_entrevista: {
    fontSize: 14,
    color: "white",
    marginBottom: 5,
    marginLeft: 10,
    width: "70%",
  },
});
