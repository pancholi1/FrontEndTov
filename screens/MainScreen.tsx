import React from "react";
import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import { RootStackScreenProps } from "../types";

const Mainscreen = ({ navigation }: RootStackScreenProps<"MainScreen">) => {
  return (
    <View style={styles.container}>
      <View style={styles.img_logo_container}>
        <Image
          style={styles.img_logo}
          source={require("../assets/images/Login/loginInicio.png")}
        ></Image>
      </View>
      <View style={styles.login_container_text}>
        <Text style={styles.login_subtitle_text}>TEST</Text>
      </View>
      <View style={styles.login_container_ov}>
        <Text style={styles.login_subtitle_orientacion}>ORIENTACIÓN</Text>

        <Text style={styles.login_subtitle_vocacional}>VOCACIONAL</Text>
      </View>

      <View style={styles.login_button_container}>
        <Pressable
          onPress={() => navigation.navigate("Login")}
          style={styles.login_button}
        >
          <Text style={styles.login_butontext}> Ingresa a TOV </Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("SingUp")}
          style={styles.login_button}
        >
          <Text style={styles.login_butontext}> Registrarte </Text>
        </Pressable>
      </View>

      <View style={styles.login_containerhelp}>
        <Text style={styles.login_parrafohelp}>
          By continuing you agree to the
        </Text>
        <Text style={styles.login_parrafohelp_finish}>
          terms and Conditions
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#130C34",
    marginTop: 5,
  },
  image: {
    flex: 1,
  },
  img_logo: {
    width: 404,
    height: 450,
  },
  img_logo_container: {
    paddingTop: 20,
    alignItems: "center",
  },
  login_container_text: {
    alignItems: "center",
  },

  login_subtitle_text: {
    fontSize: 60,
    color: "#DED3F4",
    fontWeight: "bold",
  },
  login_container_ov: {
    justifyContent: "center",
    alignItems: "center",
  },
  login_subtitle_orientacion: {
    color: "#06D6DD",
    fontSize: 33,
  },
  login_subtitle_vocacional: {
    color: "#06D6DD",
    fontSize: 30,
  },
  login_button: {
    marginTop: 35,
    backgroundColor: "#282056",
    width: "75%",
    height: 54,
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: "#B39AE7",
    borderTopColor: "#B39AE7",
    borderLeftColor: "#7B68A9",
    borderRightColor: "#7B68A9",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 0.3,
    borderRightWidth: 0.5,
    borderRadius: 15,
  },
  login_butontext: {
    fontSize: 20,
    color: "#DED3F4",
    fontStyle: "normal",
  },
  login_button_container: {
    alignItems: "center",
  },
  login_containerhelp: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  login_parrafohelp: {
    color: "#282056",
    marginTop: 8,
    margin: 5,
  },
  login_parrafohelp_finish: {
    color: "#06D6DD",
    marginTop: 8,
  },
});

export default Mainscreen;
