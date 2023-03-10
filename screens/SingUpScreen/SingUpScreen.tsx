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
import { gradients } from "../../constants/Gradients";
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
    fontSize: 18,
    marginBottom: 10,
    color: "#B39AE7",
  },

  input_nombre: {
    flex: 1,
    borderColor: "#B39AE7",
    borderWidth: 2,
    borderRadius: 15,
    padding: 14,
    color: "white",
    opacity: 2,
  },
  error: {
    paddingVertical: 10,
    color: "red",
  },
  button_signup: {
    backgroundColor: "#06D6DD",
    margin: 30,
    padding: 15,
    borderRadius: 15,
    marginLeft: "8%",
    width: "84%",
  },
  button_signup_disabled: {
    backgroundColor: "#06D6DD",
    margin: 30,
    padding: 15,
    borderRadius: 15,
    marginLeft: "8%",
    width: "84%",
    opacity: 0.3,
  },
  text_button: {
    fontWeight: "500",
    fontSize: 20,
    textAlign: "center",
    color: "white",
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
