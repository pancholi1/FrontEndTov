import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../types";
import { LinearGradient } from "expo-linear-gradient";
import { gradients } from "../../constants/Gradients";

type CarrerasScreenProps = {
  route: RouteProp<RootStackParamList, "CarrerasChasideScreen">;
};

const CarrerasChasideScreen = ({ route }: CarrerasScreenProps) => {
  const { habilidad, intereses, area } = route.params;

  const txtHabilidad = habilidad?.split("-").join("\n");
  const txtInteres = intereses?.split("-").join("\n");

  return (
    <View style={styles.container}>
      <View style={styles.container_area}>
        <LinearGradient
          colors={gradients.inputs}
          start={{ x: 1, y: 1 }}
          end={{ x: 0, y: 0 }}
          style={styles.container_area}
        >
          <Text style={styles.text}>AREA O GRUPO</Text>
          <Text style={styles.text2}>
            Listado de posibles carreras dentro de ese area.{" "}
          </Text>
          {area === "habilidad" ? (
            <Text style={styles.text2}>{txtInteres}</Text>
          ) : (
            <Text style={styles.text2}>{txtHabilidad}</Text>
          )}
        </LinearGradient>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    backgroundColor: "#130C34",
  },
  container_area: {
    marginTop: "4%",
    borderRadius: 15,
    width: "95%",
    alignItems: "center",
  },
  text: {
    color: "#DED3F4",
    fontWeight: "600",
    fontSize: 20,
    width: "85%",
    alignItems: "center",
    textAlign: "center",
    marginTop: "5%",
    marginBottom: "2%",
    fontFamily: "Poppins_ExtraBold",
  },
  text2: {
    color: "#DED3F4",
    fontWeight: "600",
    fontSize: 16,
    width: "90%",
    alignItems: "center",
    marginTop: "5%",
    marginBottom: "2%",
    fontFamily: "Poppins_Regular",
  },
});

export default CarrerasChasideScreen;
