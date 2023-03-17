import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { RootStackScreenProps } from "../../types";
import { ProgressBar } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";

const HomeScreen = ({ navigation }: RootStackScreenProps<"HomeScreen">) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hola</Text>
      <Text style={styles.name}>SOFIA FERRARI</Text>

      <LinearGradient
        colors={["#3d3758", "#1e173e"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.container_progreso}
      >
        <Text style={styles.title_progreso}>Progreso</Text>
        <Text style={styles.text_progreso}>
          Realiza el 100% de los test para obtener el resultado final
        </Text>
        <Text style={styles.title_progreso}>33%</Text>
        <ProgressBar progress={0.33} color={"#06D6DD"} />
      </LinearGradient>

      <Text style={styles.text_test}>¡COMENCEMOS!</Text>

      <View style={styles.test_personalidad}>
        <View style={styles.img_3DContainer}>
          <Image
            style={styles.img_3D}
            source={require("../../assets/images/HomeScreen/testPersonalidad.png")}
          />
        </View>
        <View style={styles.contenedor_text}>
          <Pressable onPress={() => navigation.navigate("Personality")}>
            <Text style={styles.personalidad_title}>Test de personalidad</Text>
          </Pressable>

          <Text style={styles.textCard}>
            Toma menos de 12 minutos. Responde honestamente
          </Text>
        </View>
      </View>

      <View style={styles.test_personalidad}>
        <View style={styles.img_3DContainer}>
          <Image
            source={require("../../assets/images/HomeScreen/testPsicotécnico.png")}
            style={styles.img_3D}
          />
        </View>
        <View style={styles.contenedor_text}>
          <Pressable onPress={() => navigation.navigate("Resultados")}>
            <Text style={styles.personalidad_title}>Test psicotécnico</Text>
          </Pressable>
          <Text style={styles.textCard} numberOfLines={3}>
            Comprueba por ti mismo las aptitudes que tienes para resolver este
            tipo de pruebas
          </Text>
        </View>
      </View>

      <View style={styles.test_personalidad}>
        <View style={styles.img_3DContainer}>
          <Image
            source={require("../../assets/images/HomeScreen/entrevista.png")}
            style={styles.img_3D}
          />
        </View>
        <View style={styles.contenedor_text}>
          <Pressable onPress={() => navigation.navigate("Calendar")}>
            <Text style={styles.personalidad_title}>Entrevista</Text>
          </Pressable>
          <Text style={styles.textCard}>
            Agenda una entrevista con un profesional capacitado
          </Text>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#130C34",
    paddingLeft: "8%",
    paddingRight: "8%",
  },
  title: {
    fontFamily: "Poppins_ExtraBold",
    fontStyle: "normal",
    fontWeight: "800",
    fontSize: 45,
    lineHeight: 68,
    color: "#DED3F4",
  },
  name: {
    marginBottom: 10,
    fontFamily: "Poppins_ExtraBold",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 30,
    lineHeight: 34,
    color: "#06D6DD",
  },
  container_progreso: {
    backgroundColor: "rgba(255, 255, 255, 0.18)",
    borderRadius: 15,
    paddingTop: 6,
    paddingRight: 12,
    paddingBottom: 12,
    paddingLeft: 12,
    marginTop: 5,
  },
  title_progreso: {
    fontFamily: "Poppins_ExtraBold",
    fontStyle: "normal",
    lineHeight: 38,
    color: "#DED3F4",
    fontWeight: "700",
    fontSize: 20,
  },
  text_progreso: {
    fontFamily: "Poppins_Regular",
    fontStyle: "normal",
    fontWeight: "600",
    color: "#DED3F4",
    fontSize: 14,
    marginBottom: 3,
  },
  text_test: {
    color: "#06D6DD",
    marginLeft: 5,
    fontWeight: "700",
    fontSize: 20,
    marginTop: 15,
  },
  test_personalidad: {
    backgroundColor: "#282056",
    borderRadius: 15,
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
    fontWeight: "500",
  },
  img_3DContainer: {
    width: "25%",
    height: 90,
    position: "relative",
  },
  img_3D: {
    position: "absolute",
    right: 4,
    bottom: -15,
  },

  personalidad_title: {
    fontSize: 20,
    fontFamily: "Poppins_ExtraBold",
    color: "#DED3F4",
    fontWeight: "600",
    fontStyle: "normal",
    lineHeight: 30,
    marginTop: 5,
  },
  textCard: {
    fontFamily: "Poppins_Regular",
    fontStyle: "normal",
    color: "#DED3F4",
    fontWeight: "700",
    fontSize: 14,
    width: "70%",
  },

  contenedor_text: {
    flexDirection: "column",
    width: "100%",
  },
});
