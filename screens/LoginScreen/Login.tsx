import React, { useState } from "react";
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { RootStackScreenProps } from "../../types";
import { LinearGradient } from "expo-linear-gradient";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import {
  database,
  firebaseConfig,
  providerGoogle,
} from "../../firebase-config";
import { initializeApp } from "firebase/app";
import { collection, getDocs, query, where } from "firebase/firestore";
import { UserState, setUser } from "../../navigation/redux/slices/user";
import { useAppDispatch } from "../../navigation/redux/hooks";

const Login = ({ navigation }: RootStackScreenProps<"Login">) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState("");
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const dispatch = useAppDispatch();

  const handleSingIn = async () => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      const info = async () => {
        const q = query(
          collection(database, "people"),
          where("email", "==", response.user.email)
        );
        const qGet = await getDocs(q);
        const docs = qGet.docs[0];
        qGet.forEach((doc) => {
          dispatch(setUser({ ...doc.data(), key: docs.id } as UserState));
        });
      };
      info();
    } catch (error) {
      console.log("error al entrar");
      console.log(error);
    }
  };

  const handleSingInWithGoogle = async () => {
    // try {
    //   signInWithPopup(auth, providerGoogle)
    //     .then((result) => {
    //       // This gives you a Google Access Token. You can use it to access the Google API.
    //       const credential = GoogleAuthProvider.credentialFromResult(result);
    //       const token = credential?.accessToken;
    //       console.log("token", token);
    //       // The signed-in user info.
    //       const user = result.user;
    //       console.log("user", user);
    //       // IdP data available using getAdditionalUserInfo(result)
    //       // ...
    //     })
    //     .catch((error) => {
    //       // Handle Errors here.
    //       const errorCode = error.code;
    //       const errorMessage = error.message;
    //       // The email of the user's account used.
    //       const email = error.customData.email;
    //       // The AuthCredential type that was used.
    //       const credential = GoogleAuthProvider.credentialFromError(error);
    //       // ...
    //     });
    // } catch (error) {
    //   console.log("error", error);
    // }
  };

  return (
    <ScrollView style={{ width: "100%", backgroundColor: "#130C34" }}>
      <KeyboardAwareScrollView>
        <SafeAreaView style={{ width: "100%" }}>
          <View style={styles.container}>
            <Image
              source={require("../../assets/images/Login/tov.png")}
              style={styles.img_logo}
            />
            <Image
              source={require("../../assets/images/Login/logo1.png")}
              style={styles.img_login}
            />

            <LinearGradient
              colors={["#3d3758", "#1e173e"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              //style={props.errors.email && props.touched.email ? styles.input_error : styles.input}
              style={{ borderRadius: 15, width: "80%" }}
            >
              <TextInput
                style={styles.input}
                onChangeText={setEmail}
                placeholder="Emails"
                keyboardType="email-address"
                placeholderTextColor="#B39AE7"
                scrollEnabled={true}
              />
            </LinearGradient>
            <LinearGradient
              colors={["#3d3758", "#1e173e"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={{ borderRadius: 15, marginTop: "3%", width: "80%" }}
            >
              <TextInput
                secureTextEntry={true}
                style={styles.input}
                onChangeText={setPassword}
                placeholder="Contraseña"
                selectionColor="white"
                placeholderTextColor="#B39AE7"
                scrollEnabled={true}
              />
            </LinearGradient>
            <Pressable style={styles.containter_contraseña}>
              <Text style={styles.olvidaste_contraseña}>
                ¿Olvidaste tu contraseña?
              </Text>
            </Pressable>
            <View style={styles.container_buton}>
              <Pressable
                onPress={() => handleSingIn()}
                style={styles.button_login}
              >
                <LinearGradient
                  colors={["#0995a6", "#112044"]}
                  style={styles.login_button}
                >
                  <Text style={styles.login_butontext}> Ingresar </Text>
                </LinearGradient>
              </Pressable>
            </View>

            <View style={styles.container_button}>
              <Pressable
                onPress={() => handleSingInWithGoogle()}
                style={styles.button_google}
              >
                <Image
                  source={require("../../assets/images/Login/img_google.png")}
                  style={styles.img_google}
                />
                <Text style={styles.text_google}>Ingresar con Google</Text>
              </Pressable>
            </View>

            <View style={styles.login_containerInput}>
              <View style={styles.login_containerhelp}>
                <Text style={styles.login_titlehelp}>¿Necesitas ayuda?</Text>
                <Text style={styles.login_parrafohelp}>
                  Mándanos un correo a soporte@tov.com o escríbenos por Whatsapp
                  al +52 55 4169 1994.
                </Text>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </KeyboardAwareScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  img_logo: {
    width: "41%",
    marginRight: "45%",
    padding: "11%",
  },
  img_login: {
    width: "60%",
    padding: "25%",
  },
  login_containerInput: {
    width: "80%",
  },
  input: {
    width: "100%",
    borderColor: "#B39AE7",
    borderWidth: 0.7,
    borderRadius: 15,
    padding: 12,
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

  container_buton: {
    width: "100%",
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  login_button: {
    width: "100%",
    borderRadius: 15,
    padding: "3%",
  },

  button_login: {
    width: "70%",
  },

  login_butontext: {
    fontSize: 18,
    color: "#DED3F4",
    fontFamily: "Poppins_ExtraBold",
    textAlign: "center",
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
  container_button: {
    width: "55%",
    borderRadius: 20,
    padding: "2%",
    margin: "5%",
    borderWidth: 2,
    borderColor: "#B39AE7",
  },
  button_google: {
    flexDirection: "row",
    alignItems: "center",
  },
  text_google: {
    color: "#B39AE7",
    fontFamily: "Poppins_Regular",
    fontSize: 13,
    fontWeight: "600",
    marginLeft: "10%",
  },
  img_google: {
    marginLeft: 5,
  },
  containter_contraseña: {
    margin: "2%",
    marginRight: "40%",
  },
  olvidaste_contraseña: {
    color: "#B39AE7",
  },
});

export default Login;
