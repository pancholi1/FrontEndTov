import React from "react";
import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import TermsAndConditions from "../../components/TermsAndConditions";
import { RootStackScreenProps } from "../../types";
import { LinearGradient } from "expo-linear-gradient";
import { gradients } from "../../constants/Gradients";

const Mainscreen = ({ navigation }: RootStackScreenProps<"Root">) => {
  return (
    <View style={styles.container}>
      <View style={styles.img_logo_container}>
        <Image
          style={styles.img_logo}
          source={require("../../assets/images/Login/loginInicio.png")}
        ></Image>
      </View>
      <View style={styles.login_container_text}>
        <Text style={styles.login_subtitle_text}>TEST</Text>
        <Text style={styles.login_subtitle_orientacion}>ORIENTACIÓN</Text>
        <Text style={styles.login_subtitle_vocacional}>VOCACIONAL</Text>
      </View>

      <View style={styles.login_button_container}>
        <Pressable
          onPress={() => navigation.navigate("Login")}
          style={styles.login_button}
        >
          <LinearGradient
            colors={["#3d3758", "#1e173e"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{
              borderRadius: 15,
              width: "100%",
              height: 54,
              alignItems: "center",
              justifyContent: "center",
              borderColor: "#7B68A9",
              borderWidth: 0.7,
            }}
          >
            <Text style={styles.login_butontext}> Ingresa a TOV </Text>
          </LinearGradient>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("SingUp")}
          style={styles.login_button}
        >
          <LinearGradient
            colors={["#3d3758", "#1e173e"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{
              borderRadius: 15,
              width: "100%",
              height: 54,
              alignItems: "center",
              justifyContent: "center",
              borderColor: "#7B68A9",
              borderWidth: 0.7,
            }}
          >
            <Text style={styles.login_butontext}> Registrarte </Text>
          </LinearGradient>
        </Pressable>
      </View>
      <TermsAndConditions />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#130C34",
    justifyContent: "space-around",
  },
  image: {
    flex: 1,
  },
  img_logo: {
    width: 350,
    height: 360,
  },
  img_logo_container: {
    alignItems: "center",
  },
  login_container_text: {
    alignItems: "center",
  },

  login_subtitle_text: {
    fontSize: 60,
    color: "#DED3F4",
    fontWeight: "800",
    fontFamily: "Poppins_ExtraBold",
  },
  login_subtitle_orientacion: {
    color: "#06D6DD",
    fontSize: 33,
    fontWeight: "600",
  },
  login_subtitle_vocacional: {
    color: "#06D6DD",
    fontSize: 30,
    fontWeight: "600",
  },
  login_button: {
    marginTop: 25,
    backgroundColor: "#282056",
    width: "85%",
    height: 47,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  login_butontext: {
    fontSize: 20,
    color: "#DED3F4",
    fontFamily: "Poppins_Regular",
    fontWeight: "500",
  },
  login_button_container: {
    alignItems: "center",
  },
});

export default Mainscreen;
