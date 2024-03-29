import React, { useEffect, useState } from "react";
import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { RootStackScreenProps } from "../../types";
import { LinearGradient } from "expo-linear-gradient";
import { gradients } from "../../constants/Gradients";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../firebase-config";

import { database } from "../../firebase-config";
import { collection, addDoc } from "firebase/firestore";
import CorrectLogin from "../../components/Login/CorrectLogin";

import Loading from "../../components/Loading/Loading";

export interface PropsInput {
  name: string;
  apellido: string;
  email: string;
  password: string;
  passwordDos: string;
  createdAt: string;
}
const SingUpScreen = ({ navigation }: RootStackScreenProps<"SingUp">) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isFormDisabled, setIsFormDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    password: false,
    date: false,
    passwordDos: false,
  });
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const [input, setInput] = React.useState<PropsInput>({
    name: "",
    apellido: "",
    email: "",
    password: "",
    passwordDos: "",
    createdAt: new Date().toISOString(),
  });

  const handleCreateAccount = async () => {
    if (
      input.name &&
      input.apellido &&
      input.email &&
      input.password &&
      !errors.password &&
      !errors.date &&
      !errors.passwordDos
    ) {
      try {
        setLoading(true);
        await createUserWithEmailAndPassword(auth, input.email, input.password);
        await addDoc(collection(database, "people"), input);
        setModalVisible(true);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    } else {
      Alert.alert("Faltan llenar campos");
    }
  };

  const onPasswordChange = (value: string) => {
    setInput({ ...input, password: value });

    input.password.length < 6
      ? setErrors({ ...errors, password: true })
      : setErrors({ ...errors, password: false });
  };

  const passwordDosChange = (value1: string, password: string) => {
    value1 === password
      ? setErrors({ ...errors, passwordDos: false })
      : setErrors({ ...errors, passwordDos: true });
  };

  useEffect(() => {
    const isDisabled =
      !input.name ||
      !input.apellido ||
      !input.email ||
      !input.password ||
      errors.password ||
      errors.date ||
      errors.passwordDos;

    isFormDisabled !== isDisabled && setIsFormDisabled(isDisabled);
  }, [input]);

  return (
    <ScrollView style={{ width: "100%", backgroundColor: "#130C34" }}>
      <CorrectLogin
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        input={input}
      ></CorrectLogin>
      {loading ? (
        <Loading></Loading>
      ) : (
        <KeyboardAwareScrollView>
          <View style={styles.container}>
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
              <Text style={styles.text_input_name}>Repeti Contraseña</Text>
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
                  onChangeText={(value) =>
                    passwordDosChange(value, input.password)
                  }
                />
              </LinearGradient>
              {errors.passwordDos && (
                <Text style={styles.error}>
                  Las contraseñas tienen que coincidir
                </Text>
              )}
            </View>

            <View style={styles.buttonContainer}>
              <LinearGradient
                colors={["#0995a6", "#112044"]}
                style={
                  isFormDisabled
                    ? styles.button_gradient_disable
                    : styles.button_gradient
                }
              >
                <Pressable
                  onPress={handleCreateAccount}
                  style={
                    isFormDisabled
                      ? styles.button_signup_disabled
                      : styles.button_signup
                  }
                >
                  <Text style={styles.text_button}>Registrate</Text>
                </Pressable>
              </LinearGradient>
            </View>
          </View>
        </KeyboardAwareScrollView>
      )}
    </ScrollView>
  );
};

export default SingUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  container_panel: {
    width: "95%",
    height: "95%",
    marginTop: 10,
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
  },

  input_nombre: {
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
    fontSize: 20,
    color: "#DED3F4",
    fontFamily: "Poppins_ExtraBold",
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
    paddingTop: 20,
    paddingLeft: 30,
    paddingRight: 30,
  },
});
