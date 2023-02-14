import React from "react";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { RootStackScreenProps } from "../types";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = ({ navigation }: RootStackScreenProps<"Login">) => {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState("aSas");
  const image = {
    uri: "https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=600",
  };
  const inUserFuction = async () => {
    try {
      const value = true;
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@storage_Key", jsonValue);
      const data = await AsyncStorage.getItem("@storage_Key");
      console.log("leyendo data", data);
    } catch (error) {
      console.log(error);
    }
    navigation.navigate("BottomTabNavigator");
  };

  return (
    <View style={styles.container}>
      
        <Text style={styles.login_title}>TovLogo</Text>
        <View>
          <Text style={styles.login_subtitle}>¡Bienvenido a Tov!</Text>
          <Text style={styles.login_introduction}>
            Introduce tu email de la escuela y tu contraseña.
          </Text>
        </View>

        <View style={styles.login_containerInput}>
          <TextInput
            style={styles.input}
            placeholder="Juan@gmail.com"
            onChangeText={onChangeText}
            placeholderTextColor="#636262"
          />
          <TextInput
            secureTextEntry={true}
            style={styles.input}
            placeholder="Contraseña"
            keyboardType="numeric"
            selectionColor="white"
            onChangeText={onChangeNumber}
            placeholderTextColor="#636262"
          />

          <View style={styles.login_container_forgotPassword}>
            <Text style={styles.text}>¿Olvidaste tu contraseña?</Text>
          </View>
        </View>
        <Pressable onPress={() => inUserFuction()} style={styles.login_button}>
          <Text style={styles.login_butontext}> Cambiar de pantalla</Text>
        </Pressable>


        <View style={styles.login_containerhelp}>
          <Text style={styles.login_titlehelp}>¿Necesitas ayuda?</Text>
          <Text style={styles.login_parrafohelp}>
            Mándanos un correo a soporte@tov.com o escríbenos por Whatsapp al
            +52 55 4169 1994.
          </Text>
        </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor:"black"
  },
  image: {
    flex: 1,
  },
  login_title: {
    marginTop: 30,
    fontWeight: "800",
    fontSize: 38,
    color: "white",
  },
  login_subtitle: {
    textAlign: "center",

    fontWeight: "700",
    fontSize: 32,
    color: "white",
    marginTop: 30,
  },
  login_introduction: {
    textAlign: "center",
  },
  login_containerInput: {
    width: "100%",
    marginTop: 50,
    alignItems: "center",
  },
  input: {
    backgroundColor: "snow",
    color: "black",
    height: 40,
    margin: 12,
    width: "90%",
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
  },
  login_container_forgotPassword: {
    width: "90%",
  },
  text: {
    fontSize: 14,
    color: "blue",
    fontWeight: "bold",
  },

  login_button: {
    marginTop: 35,
    backgroundColor: "#2800F9",
    width: "90%",
    height: 54,
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: "#2800F9",
    borderBottomWidth: 4,
    borderRadius: 15,
  },

  login_butontext: {
    fontSize: 18,
  },

  login_containerhelp: {
    marginTop: 43,
    height: 90,
    width: "90%",
    backgroundColor: "white",
    alignItems: "center",
    padding: 5,
    borderRadius: 10,
  },
  login_titlehelp: {
    textAlign: "center",

    fontWeight: "500",
    fontSize: 18,
    color: "#333333",
  },
  login_parrafohelp: {
    padding: 5,

    marginTop: 8,
    textAlign: "center",
  },
});

export default Login;
