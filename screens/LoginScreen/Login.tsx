import React from "react";
import {
  Alert,
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { RootStackScreenProps } from "../../types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as yup from "yup";
import { Formik } from "formik";

import { LinearGradient } from "expo-linear-gradient";
import { gradients } from "../../constants/Gradients";
import { gradientsButton } from "../../constants/Gradients";


const Login = ({ navigation }: RootStackScreenProps<"Login">) => {
  const submit = async (props) => {
    const value = true;
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@storage_Key", jsonValue);
      const data = await AsyncStorage.getItem("@storage_Key");
      console.log("data", data);
      console.log("props", props);
      if (data) {
        navigation.navigate("BottomTabNavigator");
      } else {
        Alert.alert("Error", "El token es inválido");
      }
    } catch (error) {
      console.log(error);
    }
    // .then(response => {
    //   const token = response.data.token;
    //   // Guardar el token en AsyncStorage
    //   AsyncStorage.setItem('token', token)
    //     .then(() => {
    //       // Si el token es verdadero, redirigir a la página principal
    //       // (aquí asumimos que tienes una función para la redirección) se combina con la parte de arriba
    //       redirectToMainPage();
    //     })
    //     .catch(error => {
    //       console.log(error);
    //       // Si hay un error al guardar el token, mostrar un mensaje de error
    //       alert('Error al guardar el token');
    //     });
    // })
    // .catch(error => {
    //   console.log(error);
    //   // Si la autenticación falla, mostrar un mensaje de error
    //   alert('Nombre de usuario o contraseña incorrectos');
    // });
  };

  const reviewSchema = yup.object({
    email: yup
      .string()
      .required("Requiere un email")
      .email("Tiene que tener formato email"),
    password: yup
      .string()
      .required("Requiere una contraseña")
      .min(4, "Muy corta!")
      .max(10, "Muy larga"),
  });

  return (
    <ScrollView style={{ width: "100%", backgroundColor: "#130C34" }}>
      <View style={styles.container}>
        <Image
          source={require("../../assets/images/Login/tov.png")}
          style={styles.img_logo}
        />
        <Image
          source={require("../../assets/images/Login/logo1.png")}
          style={styles.img_login}
        />

        <Formik
          onSubmit={submit}
          initialValues={{
            email: "",
            password: "",
          }}
          // validationSchema={reviewSchema}
        >
          {(props) => (
            <View style={styles.login_containerInput}>
              <LinearGradient
                colors={gradients.inputs}
                start={{ x: 1, y: 1 }}
                end={{ x: 0, y: 0 }}
                //style={props.errors.email && props.touched.email ? styles.input_error : styles.input}
                style={{ borderRadius: 15 }}
              >
                <TextInput
                  style={
                    props.errors.email && props.touched.email
                      ? styles.input_error
                      : styles.input
                  }
                  value={props.values.email}
                  onChangeText={props.handleChange("email")}
                  onBlur={props.handleBlur("email")}
                  placeholder="Email"
                  placeholderTextColor="#B39AE7"
                />
              </LinearGradient>
              {props.errors.email && props.touched.email ? (
                <Text style={styles.errors}>{props.errors.email}</Text>
              ) : null}

              <LinearGradient
                colors={gradients.inputs}
                start={{ x: 1, y: 1 }}
                end={{ x: 0, y: 0 }}
                //style={props.errors.email && props.touched.email ? styles.input_error : styles.input}
                style={{ borderRadius: 15, marginTop: "3%" }}
              >
                <TextInput
                  secureTextEntry={true}
                  style={
                    props.errors.password && props.touched.password
                      ? styles.input_error
                      : styles.input
                  }
                  value={props.values.password}
                  onChangeText={props.handleChange("password")}
                  placeholder="Contraseña"
                  keyboardType="numeric"
                  selectionColor="white"
                  placeholderTextColor="#B39AE7"
                />
              </LinearGradient>
              {props.errors.password && props.touched.password ? (
                <Text style={styles.errors}>{props.errors.password}</Text>
              ) : null}
              <Text style={styles.text}>¿Olvidaste tu contraseña?</Text>

              <View>

                  <Pressable
                    style={styles.login_button}
                    onPress={() => props.handleSubmit()}
                  >                  
                  <LinearGradient
                  colors={gradientsButton.inputs}
                  start={{ x: 1, y: 1 }}
                  end={{ x: 0, y: 0 }}
                  style={{
                    borderRadius: 15,
                    width: "95%",
                    height: 54,
                    alignItems: "center",
                    justifyContent: "center",
                    marginLeft:'3%'
                  }}
                >
                    <Text style={styles.login_butontext}> Ingresar </Text>
                </LinearGradient>
                  </Pressable>
              </View>
            </View>
          )}
        </Formik>

        <View style={styles.login_containerInput}>
          <View style={styles.login_containerhelp}>
            <Text style={styles.login_titlehelp}>¿Necesitas ayuda?</Text>
            <Text style={styles.login_parrafohelp}>
              Mándanos un correo a soporte@tov.com o escríbenos por Whatsapp al
              +52 55 4169 1994.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  img_logo: {
    width: "45%",
    padding: "15%",
    marginTop: "3%",
    marginRight: "45%",
  },
  img_login: {
    width: "55%",
    padding: "24%",
    marginBottom: "2%",
  },
  login_containerInput: {
    width: "80%",
  },
  input: {
    width: "100%",
    borderColor: "#B39AE7",
    borderWidth: 2,
    borderRadius: 15,
    padding: 14,
    color: "white",
    opacity: 2,
    fontFamily: "Poppins_Regular",
    fontSize: 12,
  },
  text: {
    width: "80%",
    fontSize: 13,
    fontWeight: "600",
    color: "#B39AE7",
    marginTop: "3%",
    paddingBottom: 25,
    fontFamily: "Poppins_Regular",
  },

  login_button: {
    justifyContent: "center",
    borderBottomWidth: 0.5,
    fontFamily:'Poppins_ExtraBold',

  },

  login_butontext: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    fontFamily: "Poppins_Regular",
  },

  login_containerhelp: {
    marginTop: 8,
    width: "100%",
    alignItems: "center",
    padding: 5,
    borderRadius: 10,
  },
  login_titlehelp: {
    textAlign: "center",
    fontFamily: "Poppins_Regular",

    fontWeight: "600",
    fontSize: 17,
    color: "rgba(6, 214, 221, 0.6)",
  },
  login_parrafohelp: {
    color: "rgba(6, 214, 221, 0.4)",
    marginTop: 8,
    textAlign: "center",
    fontWeight: "500",
    fontSize: 12,
  },
  errors: {
    color: "red",
    fontSize: 14,
    paddingBottom: 10,
  },
  input_error: {
    borderColor: "red",
    flex: 1,
    borderWidth: 2,
    borderRadius: 15,
    padding: 14,
    color: "white",
    opacity: 2,
  },
});

export default Login;
