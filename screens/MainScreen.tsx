import React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import { RootStackScreenProps } from "../types";

const Mainscreen = ({ navigation }: RootStackScreenProps<"MainScreen">) => {

  return (
    <View style={styles.container}>
      <View style={styles.img_logo_container}>
        <Image
          style={styles.img_logo}
          source={require("../assets/images/Login/logoInicio.webp")}
        ></Image>
        <View style={styles.login_subtitle_container}>
          <Text style={styles.login_subtitle}>
            Test de orientacion vocacional
          </Text>
        </View>
        <View></View>
      </View>
        <View style={styles.login_button_container}>
      <Pressable onPress={() => navigation.navigate("Login")} style={styles.login_button}>
        <Text style={styles.login_butontext}> Ingresa a TOV </Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate("SingUp")}
        style={styles.login_button}
      >
        <Text style={styles.login_butontext}> Registrate </Text>
      </Pressable>
      </View>
      <View style={styles.login_containerhelp}>
        <Text style={styles.login_parrafohelp}>
          By continuing you agree to the Terms and Conditions
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    marginTop: 50,
  },
  image: {
    flex: 1,
  },
  img_logo: {
    width: 300,
    height: 300,
  },
  img_logo_container: {
    paddingTop: 20,
    alignItems: "center",
  },

  login_subtitle: {
    fontWeight: "900",
    fontSize: 35,
    marginTop: 30,
    marginBottom: 30,
    color: "white",
  },

  login_subtitle_container: {
    width: 300,
  },
  login_button: {
    marginTop: 35,
    backgroundColor: "rgb(30, 144, 255)",
    width: "90%",
    height: 54,
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: "rgb(30, 144, 255)",
    borderBottomWidth: 4,
    borderRadius: 35,
  },
  login_butontext: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",

  },
  login_button_container:{
    alignItems: "center",
  },
  login_containerhelp: {
    marginTop: 20,
    height: 90,
    alignItems: "center",
  },
  login_parrafohelp: {
    padding: 5,
    color: "white",

    marginTop: 8,
    textAlign: "center",
  },
});

export default Mainscreen;
