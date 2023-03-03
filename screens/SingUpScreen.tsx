import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import PopUp from "../components/PopUp";
import TermsAndConditions from "../components/TermsAndConditions";
import { RootStackScreenProps } from "../types";

const SingUpScreen = ({ navigation }: RootStackScreenProps<"SingUp">) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isFormDisabled, setIsFormDisabled] = useState(true);

  const [input, setInput] = React.useState({
    name: "",
    apellido: "",
    email: "",
    password: "",
    school: "",
  });

  const sendInfo = () => {
    // axios
    //   .post("API_URL")
    //   .then((response) => {
    //     navigation.navigate("Login")}
    //   })
    //   .catch((error) => {
    //     setModalVisible(true);
    //   });
    navigation.navigate("Login");
  };

  useEffect(() => {
    const isDisabled =
      !input.name ||
      !input.apellido ||
      !input.email ||
      !input.password ||
      !input.school;

    isFormDisabled !== isDisabled && setIsFormDisabled(isDisabled);
  }, [input]);

  return (
    <View style={styles.container}>
      <PopUp
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        mesagge={"El registro ha fallado, vuelve a intentarlo"}
      />
      <ScrollView style={styles.container_panel}>
        <View style={styles.container_input_name}>
          <Text style={styles.text_input_name}>Nombre</Text>
          <TextInput
            style={styles.input_nombre}
            placeholder="Nombre"
            placeholderTextColor="white"
            onChangeText={(value) => {
              setInput({ ...input, name: value });
            }}
          />
        </View>

        <View style={styles.container_input_name}>
          <Text style={styles.text_input_name}>Apellido</Text>
          <TextInput
            placeholder="Apellido"
            style={styles.input_nombre}
            placeholderTextColor="white"
            onChangeText={(value) => {
              setInput({ ...input, apellido: value });
            }}
          />
        </View>

        <View style={styles.container_input_name}>
          <Text style={styles.text_input_name}>Email</Text>
          <TextInput
            placeholder="Email"
            style={styles.input_nombre}
            keyboardType="email-address"
            placeholderTextColor="white"
            onChangeText={(value) => {
              setInput({ ...input, email: value });
            }}
          />
        </View>

        <View style={styles.container_input_name}>
          <Text style={styles.text_input_name}>Contraseña</Text>
          <TextInput
            placeholder="Contraseña"
            secureTextEntry={true}
            style={styles.input_nombre}
            placeholderTextColor="#B39AE7"
            onChangeText={(value) => {
              setInput({ ...input, password: value });
            }}
          />
        </View>

        <View style={styles.container_input_name}>
          <Text style={styles.text_input_name}>Fecha de Nacimiento</Text>
          <TextInput
            placeholder="Fecha de Nacimiento"
            keyboardType="numeric"
            placeholderTextColor="#B39AE7"
            style={styles.input_nombre}
          />
        </View>

        <View style={styles.container_input_name}>
          <Text style={styles.text_input_name}>Escuela</Text>
          <TextInput
            placeholder="Escuela"
            style={styles.input_nombre}
            placeholderTextColor="white"
            onChangeText={(value) => {
              setInput({ ...input, school: value });
            }}
          />
        </View>

        <Pressable
          onPress={sendInfo}
          style={
            isFormDisabled
              ? styles.button_signup_disabled
              : styles.button_signup
          }
          disabled={isFormDisabled}
        >
          <Text style={styles.text_button}>Registrate</Text>
        </Pressable>

        <Text style={styles.text_bottom}>Ya está registrado?</Text>
        <TermsAndConditions />
      </ScrollView>
    </View>
  );
};

export default SingUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#130C34",
    alignItems: "center",
    flexDirection: "column",
  },
  container_panel: {
    width: "95%",
    height: "95%",
    marginTop: 20,
    borderRadius: 20,
  },
  title: {
    fontWeight: "700",
    fontSize: 30,
    backgroundColor: "black",
    marginTop: 15,
    marginLeft: "29%",
    color: "white",
  },
  container_input_name: {
    width: "90%",
    marginTop: "3%",
    marginLeft: "5%",
  },
  text_input_name: {
    fontWeight: "600",
    fontSize: 20,
    marginBottom: 10,
    color: "white",
  },
  input_nombre: {
    borderColor: "#edebeb",
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    color: "white",
  },
  button_signup: {
    backgroundColor: "#F5F5F9",
    margin: 10,
    padding: 10,
    borderRadius: 10,
    width: "90%",
    marginLeft: "5%",
  },
  button_signup_disabled: {
    backgroundColor: "#F5F5F9",
    margin: 10,
    padding: 10,
    borderRadius: 10,
    width: "90%",
    marginLeft: "5%",
    opacity: 0.3,
  },
  text_button: {
    fontWeight: "500",
    fontSize: 15,
    textAlign: "center",
  },
  text_bottom: {
    width: "90%",
    fontSize: 14,
    color: "white",
    fontWeight: "bold",
    marginLeft: "5%",
    marginTop: "3%",
    marginBottom: "5%",
    textAlign: "center",
  },
});
