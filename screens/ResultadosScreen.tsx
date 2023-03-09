import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { RootStackScreenProps } from "../types";

export const ResultadosScreen = ({
  navigation,
}: RootStackScreenProps<"Resultados">) => {
  return (
    <View style={styles.container}>
      <View style={styles.test_personalidad}>
        <View style={styles.img_3DContainer}>
          <Image
            style={styles.img_3D}
            source={require("../assets/images/HomeScreen/testPersonalidad.png")}
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#130C34",
    width: "100%",
    flexDirection: "column",
    paddingLeft: "8%",
    paddingRight: "8%",
  },
  contenedor_text: {
    flexDirection: "column",
    width: "100%",
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
});
