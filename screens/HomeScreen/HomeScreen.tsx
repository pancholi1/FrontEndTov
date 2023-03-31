import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import React from "react";
import { RootStackScreenProps } from "../../types";
import { ProgressBar } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";

import { gradients } from "../../constants/Gradients";
import { greenChaside } from "../../constants/Gradients";

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

      <ScrollView>
        <View style={styles.container_card_chaside}>
          <LinearGradient
            colors={greenChaside}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{ borderRadius: 15 }}
          >
            <View style={styles.test_chaside}>
              <View style={styles.img_3DContainer}>
                <Image
                  style={styles.img_3D}
                  source={require("../../assets/images/HomeScreen/testPersonalidad.png")}
                />
              </View>

              <View style={styles.contenedor_text}>
                <Pressable
                  onPress={() => navigation.navigate("DescriptionScreen")}
                >
                  <Text style={styles.personalidad_title}>Test CHASIDE</Text>
                </Pressable>

                <Text style={styles.textCard}>
                  Toma menos de 12 minutos. Responde honestamente
                </Text>
              </View>
            </View>
          </LinearGradient>
        </View>
        <View style={styles.container_card}>
          <LinearGradient
            colors={gradients.inputs}
            start={{ x: 1, y: 1 }}
            end={{ x: 0, y: 0 }}
            style={{ borderRadius: 15 }}
          >
            <View style={styles.test_personalidad}>
              <View style={styles.img_3DContainer}>
                <Image
                  style={styles.img_3D}
                  source={require("../../assets/images/HomeScreen/testPsicotécnico.png")}
                />
              </View>

              <View style={styles.contenedor_text}>
                <Pressable
                  onPress={() => navigation.navigate("TestMMYMGScreen")}
                >
                  <Text style={styles.personalidad_title}>Test MM & MG</Text>
                </Pressable>

                <Text style={styles.textCard}>
                  Comprueba cuáles son las áreas ocupacionales que se ajustan a
                  tu perfil.
                </Text>
              </View>
            </View>
          </LinearGradient>
        </View>
        <View style={styles.container_card}>
          <LinearGradient
            colors={gradients.inputs}
            start={{ x: 1, y: 1 }}
            end={{ x: 0, y: 0 }}
            style={{ borderRadius: 15 }}
          >
            <View style={styles.test_personalidad}>
              <View style={styles.img_3DContainer}>
                <Image
                  source={require("../../assets/images/HomeScreen/test5grandes.png")}
                  style={styles.img_3D}
                />
              </View>

              <View style={styles.contenedor_text}>
                <Pressable
                  onPress={() => navigation.navigate("Test5GrandesScreen")}
                >
                  <Text style={styles.personalidad_title}>
                    Test de los 5 Grandes
                  </Text>
                </Pressable>
                <Text style={styles.textCard} numberOfLines={3}>
                  Conocé más sobre tu personalidad y capacidades.
                </Text>
              </View>
            </View>
          </LinearGradient>
        </View>
        <View style={styles.container_card}>
          <LinearGradient
            colors={gradients.inputs}
            start={{ x: 1, y: 1 }}
            end={{ x: 0, y: 0 }}
            style={{ borderRadius: 15 }}
          >
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
          </LinearGradient>
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
    fontWeight: "600",
    fontSize: 30,
    color: "#06D6DD",
  },
  container_progreso: {
    borderRadius: 15,
    paddingTop: 6,
    paddingRight: 12,
    paddingBottom: 12,
    paddingLeft: 12,
    marginTop: 5,
    borderColor: "#524c77",
    borderWidth: 1,
  },
  container_card: {
    marginBottom: 15,
    borderColor: "#524c77",
    borderRadius: 15,
    borderWidth: 1,
    marginTop: 5,
  },
  container_card_chaside: {
    marginBottom: 15,
    borderColor: "#025558",
    borderRadius: 19,
    borderWidth: 1,
    borderEndWidth: 4,
  },
  title_progreso: {
    fontFamily: "Poppins_SemiBold",
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
    margin: 8,
    fontWeight: "700",
    fontSize: 20,
    fontFamily: "Poppins_SemiBold",
  },
  test_personalidad: {
    borderRadius: 15,
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
    fontWeight: "500",
  },
  test_chaside: {
    borderRadius: 15,
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
    fontWeight: "500",
  },
  img_3DContainer: {
    width: "25%",
    height: 90,
  },
  img_3D: {
    position: "absolute",
    left: -15,
    bottom: -15,
    width: "100%",
    height: 134,
    zIndex: 111111111111,
  },

  personalidad_title: {
    fontSize: 20,
    fontFamily: "Poppins_SemiBold",
    color: "#DED3F4",
    fontWeight: "600",
    lineHeight: 30,
    marginTop: 5,
  },
  textCard: {
    fontFamily: "Poppins_Regular",
    color: "#DED3F4",
    fontSize: 15,
    width: "70%",
    lineHeight: 17.5,
  },

  contenedor_text: {
    flexDirection: "column",
    width: "100%",
  },
});
