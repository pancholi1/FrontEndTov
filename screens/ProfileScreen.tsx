import { StatusBar } from "expo-status-bar";
import { Platform, Pressable, StyleSheet } from "react-native";
import { Image } from "react-native";
import { Text, View } from "../components/Themed";
import { AntDesign } from '@expo/vector-icons'; 


export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.container_panel}>
        <View style={styles.perfil_container}>
          <Image
            source={require("../assets/images/favicon.png")}
            style={styles.imagen_perfil}
          />
          <View style={styles.info_colegio}>
            <Text style={styles.name}>Francisco Porta</Text>
            <Text style={styles.colegio}>
              <Image
                style={styles.img_colegio}
                source={require("../assets/images/ModalScreen/casa.jpg")}
              />
              Colegio Sacachispa
            </Text>
          </View>
        </View>

        <View style={styles.container_cuenta}>
          <View style={styles.cuenta_superior}>
            <Text style={styles.mi_cuenta}>Mi cuenta</Text>
            <Pressable style={styles.button_contraseña}>
              <Text style={styles.text_button}>Cambiar contraseña</Text>
            </Pressable>
          </View>

          <View style={styles.cuenta_inferior}>
            <Text style={styles.email}>franciscoporta@gmail.com</Text>
            <Text style={styles.password}>Aca va la password</Text>
          </View>
        </View>

        {/* <View style={styles.container_buttons}> */}
          <Pressable style={styles.button_terminos}>
            <Image
              source={require("../assets/images/ModalScreen/terminos_condiciones.jpg")}
              style={styles.img_terminos}
            />
            <Text style={styles.text_button_terminos}>
              Términos y Condiciones
            </Text>
            <AntDesign name="right" size={26} color="black" />
            {/* <Image
              source={require("../assets/images/ModalScreen/terminos_back.jpg")}
              style={styles.back_terminos}
            /> */}
          </Pressable>
        {/* </View> */}

        {/* <View style={styles.container_button_privacidad}> */}
          <Pressable style={styles.button_privacidad}>
            <Image
              source={require("../assets/images/ModalScreen/img_privacidad.jpg")}
              style={styles.img_terminos}
            />
            <Text style={styles.text_button_terminos}>Privacidad</Text>
            {/* <Image
              source={require("../assets/images/ModalScreen/terminos_back.jpg")}
              style={styles.back_terminos}
            /> */}
            <AntDesign name="right" size={26} color="black" />
          </Pressable>
        {/* </View> */}

        {/* <EditScreenInfo path="/screens/ModalScreen.tsx" />  */}

        {/* Use a light status bar on iOS to account for the black space above the modal */}
        <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
  container_panel: {
    alignItems: "center",
    backgroundColor: "black",
    width: "100%",
    height: "65%",
    top: 10,
  },
  perfil_container: {
    flexDirection: "row",
    justifyContent: "center",
    width: "90%",
    height: "23%",
    borderColor: "#F3F3F6",
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderRadius: 16,
  },
  imagen_perfil: {
    width: "20%",
    height: "60%",
    marginTop: "5%",
    borderRadius: 16,
    marginLeft: "9%",
  },
  name: {
    fontStyle: "normal",
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 0.38,
    color: "#333333",
    marginTop: "10%",
    width:"80%"
  },
  info_colegio: {
    width: "60%",
    marginLeft: "5%",
    backgroundColor: "#ffffff",
  },
  colegio: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    color: "#333333",
    bottom: 1,
  },
  img_colegio: {
    width: 15,
    height: 15,
  },
  container_cuenta: {
    width: "90%",
    height: 142,
    marginTop: 10,
    backgroundColor: "#ffffff",
    borderColor: "#F3F3F6",
    borderWidth: 1,
    borderRadius: 16,
  },
  cuenta_superior: {
    display: "flex",
    backgroundColor: "#ffffff",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5%",
    marginLeft: "7%",
    width: "90%",
    height: "25%",
  },
  mi_cuenta: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 18,
    color: "#888DA6",
    width: "40%",
  },
  button_contraseña: {
    justifyContent: "center",
    alignItems: "center",
    width: "60%",
    height: "100%",
    backgroundColor: "#FFBA31",
    borderRadius: 11,
  },
  text_button: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 14,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    letterSpacing: 0.4,
    color: "#3D3D3D",
  },
  cuenta_inferior: {
    backgroundColor: "#ffffff",
    marginTop: "9%",
    marginLeft: "7%",
    width:"80%"
  },
  email: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    marginBottom: "3%",
    color: "#333333",
  },
  password: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    color: "#888DA6",
  },
  container_buttons: {
    backgroundColor: "#ffffff",
    marginTop: 10,
    width: "90%",
    
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  button_terminos: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: "3%",
    height: 60,
    width: "90%",
    backgroundColor: "#FFFFFF",
    borderStyle: "solid",
    borderColor: "#F3F3F6",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  img_terminos: {
    width: "6%",
    height: 24,
    paddingLeft: "4%",
    borderRadius: 16,
    marginLeft:"7%",
  },
  text_button_terminos: {
    width: "75%",
    height: 19,
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    paddingLeft: "3%",
    marginBottom: "1%",
    color: "#4C4F63",
  },
  button_privacidad: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: "1%",
    height: 60,
    width: "90%",
    backgroundColor: "#FFFFFF",
    borderStyle: "solid",
    borderColor: "#F3F3F6",
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
});
