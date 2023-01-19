import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { RootStackScreenProps } from "../types";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";

const HomeScreen = ({ navigation }: RootStackScreenProps<"HomeScreen">) => {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => navigation.navigate("Personality")}
        style={{ width: "100%" }}
      >
        <View style={styles.container_bloques}>
          <View style={styles.container_bloquesImg}>
            <FontAwesome5
              name="school"
              size={40}
              style={styles.image}
              color="black"
            />

            {/* <Image
              style={styles.image}
              source={require("../assets/images/HomeScreen/school.svg")}
            /> */}
          </View>

          <View style={styles.container_bloquesText}>
            <Text style={styles.bloques_text}> Examen de Personalidad</Text>

            <Image
              style={styles.bloques_image}
              source={require("../assets/images/HomeScreen/check.svg")}
            />
          </View>
        </View>
      </Pressable>

      <View style={styles.container_bloques}>
        <View style={styles.container_bloquesImg}>
          <FontAwesome5
            name="brain"
            color="black"
            size={40}
            style={styles.image}
          />

          {/* <Image
            style={styles.image}
            source={require("../assets/images/HomeScreen/schoolGrey.svg")}
          /> */}
        </View>
        <View style={styles.container_bloquesText}>
          <Text style={styles.bloques_text}> Psicotécnicos</Text>
          <Image
            style={styles.bloques_image}
            source={require("../assets/images/HomeScreen/checkGray.svg")}
          />
        </View>
      </View>
      <View style={styles.container_bloquesGray}>
        <View style={styles.container_bloquesImg}>
          <MaterialIcons
            name="phone-in-talk"
            size={40}
            style={styles.image}
            color="black"
          />
        </View>
        <View style={styles.container_bloquesText}>
          <Text style={styles.bloques_text}> Entrevista Virtual</Text>
          <Image
            style={styles.bloques_image}
            source={require("../assets/images/HomeScreen/checkGray.svg")}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  container_bloquesGray: {
    margin: 3,
    marginTop: 18,
    padding: 5,
    width: "95%",
    height: 85,
    backgroundColor: "#B0B3CB",
    borderRadius: 15,
    borderColor: "none",
    borderWidth: 1,
    display: "flex",
    flexDirection: "row",
  },
  container_bloques: {
    margin: 3,
    marginTop: 18,
    padding: 5,
    width: "95%",
    height: 85,
    backgroundColor: "snow",
    borderRadius: 15,
    borderColor: "none",
    borderWidth: 1,
    display: "flex",
    flexDirection: "row",
  },
  image: { height: 60, width: 65, marginTop: 7, marginLeft: 5 },
  container_bloquesImg: {
    display: "flex",
    alignItems: "center",
    marginTop: 3,
    justifyContent: "center",
    width: "25%",
  },
  container_bloquesText: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "70%",
    marginTop: 10,
  },
  bloques_text: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
  },
  bloques_image: { height: 20, width: 25 },
});
