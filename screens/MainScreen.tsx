import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { RootStackScreenProps } from "../types";

const MainScreen = ({ navigation }: RootStackScreenProps<"Root">) => {
  return (
    <View>
      <Pressable
        onPress={() => navigation.navigate("Login")}
        style={styles.login_button}
      >
        <Text style={styles.login_butontext}> Cambiar de pantalla</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate("SingUp")}
        style={styles.login_button}
      >
        <Text style={styles.login_butontext}> Crear cuenta</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  login_button: {
    marginTop: 35,
    backgroundColor: "#ca8941",
    width: "90%",
    height: 54,
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: "#b16e23",
    borderBottomWidth: 4,
    borderRadius: 15,
  },

  login_butontext: {
    fontSize: 18,
  },
});

export default MainScreen;
