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
import PopUp from "../../components/PopUp";
import TermsAndConditions from "../../components/TermsAndConditions";
import { RootStackScreenProps } from "../../types";
import { LinearGradient } from "expo-linear-gradient";
import { gradients, gradientsButton } from "../../constants/Gradients";
import { patterns } from "../../constants/Patterns";

const SingUpScreen = ({ navigation }: RootStackScreenProps<"SingUp">) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isFormDisabled, setIsFormDisabled] = useState(true);
  const [errors, setErrors] = useState({ password: false, date: false });

  const [input, setInput] = React.useState({
    name: "",
    apellido: "",
    email: "",
    password: "",
    school: "",
    date: "",
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

  const onDateChange = (value) => {
    setInput({ ...input, date: value });

    if (patterns.date.test(value)) {
      setErrors({ ...errors, date: false });
    } else {
      setErrors({ ...errors, date: true });
    }
  };

  const onPasswordChange = (value) => {
    setInput({ ...input, password: value });

    input.password.length < 6
      ? setErrors({ ...errors, password: true })
      : setErrors({ ...errors, password: false });
  };

  useEffect(() => {
    const isDisabled =
      !input.name ||
      !input.apellido ||
      !input.email ||
      !input.password ||
      !input.school ||
      !input.date ||
      errors.password ||
      errors.date;

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
          <LinearGradient
            colors={gradients.inputs}
            start={{ x: 1, y: 1 }}
            end={{ x: 0, y: 0 }}
            style={{ borderRadius: 15 }}
          >
            <TextInput
              style={styles.input_nombre}
              placeholder="Nombre"
              cursorColor={"white"}
              placeholderTextColor="#B39AE7"
              onChangeText={(value) => {
                setInput({ ...input, name: value });
              }}
            />
          </LinearGradient>
        </View>

        <View style={styles.container_input_name}>
          <Text style={styles.text_input_name}>Apellido</Text>
          <LinearGradient
            colors={gradients.inputs}
            start={{ x: 1, y: 1 }}
            end={{ x: 0, y: 0 }}
            style={{ borderRadius: 15 }}
          >
            <TextInput
              placeholder="Apellido"
              style={styles.input_nombre}
              placeholderTextColor="#B39AE7"
              onChangeText={(value) => {
                setInput({ ...input, apellido: value });
              }}
            />
          </LinearGradient>
        </View>

        <View style={styles.container_input_name}>
          <Text style={styles.text_input_name}>Email</Text>
          <LinearGradient
            colors={gradients.inputs}
            start={{ x: 1, y: 1 }}
            end={{ x: 0, y: 0 }}
            style={{ borderRadius: 15 }}
          >
            <TextInput
              placeholder="Email"
              style={styles.input_nombre}
              keyboardType="email-address"
              placeholderTextColor="#B39AE7"
              onChangeText={(value) => {
                setInput({ ...input, email: value });
              }}
            />
          </LinearGradient>
        </View>

        <View style={styles.container_input_name}>
          <Text style={styles.text_input_name}>Contraseña</Text>
          <LinearGradient
            colors={gradients.inputs}
            start={{ x: 1, y: 1 }}
            end={{ x: 0, y: 0 }}
            style={{ borderRadius: 15 }}
          >
            <TextInput
              placeholder="Contraseña"
              secureTextEntry={true}
              style={styles.input_nombre}
              placeholderTextColor="#B39AE7"
              onChangeText={onPasswordChange}
            />
          </LinearGradient>
          {errors.password && (
            <Text style={styles.error}>
              La contraseña tiene que tener al menos 6 caracteres
            </Text>
          )}
        </View>

        <View style={styles.container_input_name}>
          <Text style={styles.text_input_name}>Fecha de Nacimiento</Text>
          <LinearGradient
            colors={gradients.inputs}
            start={{ x: 1, y: 1 }}
            end={{ x: 0, y: 0 }}
            style={{ borderRadius: 15 }}
          >
            <TextInput
              placeholder="Fecha de Nacimiento"
              secureTextEntry={false}
              placeholderTextColor="#B39AE7"
              style={styles.input_nombre}
              onChangeText={onDateChange}
            />
          </LinearGradient>
          {errors.date && (
            <Text style={styles.error}>
              La fecha ingresada tiene que tener el formato YYYY-MM-DD
            </Text>
          )}
        </View>

        <View style={styles.container_input_name}>
          <Text style={styles.text_input_name}>Escuela</Text>
          <LinearGradient
            colors={gradients.inputs}
            start={{ x: 1, y: 1 }}
            end={{ x: 0, y: 0 }}
            style={{ borderRadius: 15 }}
          >
            <TextInput
              placeholder="Escuela"
              style={styles.input_nombre}
              placeholderTextColor="#B39AE7"
              onChangeText={(value) => {
                setInput({ ...input, school: value });
              }}
            />
          </LinearGradient>
        </View>
        <View style={styles.buttonContainer}>
          <LinearGradient
            colors={gradientsButton.inputs}
            style={
              isFormDisabled
                ? styles.button_gradient_disable
                : styles.button_gradient
            }
          >
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
          </LinearGradient>
        </View>
        <TermsAndConditions />
      </ScrollView>
    </View>
  );
};

export default SingUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    paddingTop: 25,
    backgroundColor: "#130C34",
  },
  container_panel: {
    width: "95%",
    height: "95%",
    marginTop: 20,
    borderRadius: 20,
  },
  container_input_name: {
    width: "90%",
    marginTop: "3%",
    marginLeft: "5%",
  },
  text_input_name: {
    fontWeight: "600",
    fontSize: 15,
    marginBottom: 10,
    color: "#B39AE7",
    fontFamily: "Poppins_Regular",
    lineHeight: 21,
    fontStyle: "semibold",
  },

  input_nombre: {
    flex: 1,
    borderColor: "#B39AE7",
    borderWidth: 2,
    borderRadius: 15,
    padding: 14,
    color: "white",
    opacity: 1,
    fontFamily: "Poppins_Regular",
    fontSize: 12,
  },
  error: {
    paddingVertical: 10,
    color: "red",
  },
  button_signup: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: "4%",
    borderBottomWidth: 0.5,
    borderColor: "#036B6E",
    borderRadius: 15,
    borderRightWidth: 3,
    borderTopWidth: 1,
  },
  button_signup_disabled: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: "4%",
    borderBottomWidth: 0.5,
    borderColor: "#036B6E",
    borderRadius: 15,
    borderRightWidth: 3,
    borderTopWidth: 1,
  },
  button_gradient: {
    opacity: 1,
    borderRadius: 15,
  },
  button_gradient_disable: {
    opacity: 0.3,
    borderRadius: 15,
  },
  text_button: {
    fontWeight: "500",
    fontSize: 20,
    textAlign: "center",
    color: "white",
    fontFamily: "Poppins_Regular",
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
  buttonContainer: {
    padding: 30,
  },
});
