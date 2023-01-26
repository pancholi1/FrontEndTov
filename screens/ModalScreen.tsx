import { StatusBar } from "expo-status-bar";
import { Button, Platform, Pressable, StyleSheet, TextInput } from "react-native";
import { Image } from "react-native";
import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

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
              <Text style={styles.name}>
                Francisco Porta
              </Text>
              <Text style={styles.colegio}>
                <Image
                style={styles.img_colegio}
                source={require("../assets/images/ModalScreen/casa.jpg")}/>
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

       <View style={styles.container_buttons}>
          <Pressable style={styles.button_terminos}>
            <Image source={require("../assets/images/ModalScreen/terminos_condiciones.jpg")}
            style={styles.img_terminos}/>
            <Text style={styles.text_button_terminos}>Términos y Condiciones</Text>
            <Image source={require("../assets/images/ModalScreen/terminos_back.jpg")}
            style={styles.back_terminos}/>
          </Pressable>
        </View>

        <View style={styles.container_button_privacidad}>
          <Pressable style={styles.button_terminos}>
            <Image source={require("../assets/images/ModalScreen/img_privacidad.jpg")}
            style={styles.img_terminos}/>
            <Text style={styles.text_button_terminos}>Privacidad</Text>
              <Image source={require("../assets/images/ModalScreen/terminos_back.jpg")}
               style={styles.back_terminos}/>
          </Pressable>
        </View>
    
      {/* <EditScreenInfo path="/screens/ModalScreen.tsx" />  */}

        {/* Use a light status bar on iOS to account for the black space above the modal */}
        <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>

  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F9",
    flex:1,
  },
  container_panel:{
    alignItems: "center",
    backgroundColor: "#F5F5F9",
    width: "100%",
    height: "65%",
    top: 10,
  },
  perfil_container:{
    flexDirection: "row",
    justifyContent:"center",
    width: "90%",
    height:"23%",
    borderColor: "#F3F3F6",
    borderWidth: 1,
    borderRadius: 16,
  },
  imagen_perfil:{
    width: "20%",
    height: "60%",
    marginTop:"5%"
  },
  name:{
    fontStyle: "normal",
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 24,
    letterSpacing: 0.38,
    color: "#333333",
    marginTop:"15%",
    marginLeft:"2%"
  },
  img_colegio:{
    width: "10%",
    height: "100%",
  },
  info_colegio:{
    width: "60%",
    marginLeft:"5%",
    height: "80%",
  },
  colegio:{
    fontFamily: 'Poppins',
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    display: "flex",
    alignItems: "center",
    color: "#333333",
  },
  //---------------------------------------------------------------
  container_cuenta:{
    gap: 16,
    width: "90%",
    height: 142,
    marginTop:10,
    backgroundColor: "#FFFFFF",
    borderColor: "#F3F3F6",
    borderWidth: 1,
    borderRadius: 16,
  },
  cuenta_superior:{
    display:"flex",
    flexDirection:"row",
    justifyContent: "center",
    alignItems: "center",
    marginTop:"5%",
    marginLeft:"7%",
    width:"90%",
    height:"25%"
  },
  mi_cuenta:{
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 18,
    color: "#888DA6",
    width:"100%"
  },
  button_contraseña:{
    justifyContent: "center",
    alignItems: "center",
    width:"60%",
    height:"100%",
    backgroundColor: "#FFBA31",
    borderRadius: 11,

  },
  text_button:{
    fontFamily: 'poppins',
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 14,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    letterSpacing: 0.4,
    color: "#3D3D3D",
  },
  cuenta_inferior:{
    marginTop:"5%",
    marginLeft:"7%",
  },
  email:{
    fontFamily: 'serif',
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    marginBottom:"3%",
    color: "#333333",
  },
  password:{
    fontFamily: 'Poppins',
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    color: "#888DA6",
  },

  //---------------------------------------------------
  container_buttons:{
    marginTop:10,
    width: "90%",
    height: 60,
    borderTopLeftRadius:16,
    borderTopRightRadius:16,
  },

  button_terminos:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"center",
    marginTop:"3%",
    width:"100%",
    backgroundColor: "#FFFFFF",
    borderStyle: "solid",
    borderColor: "#F3F3F6",
    order: 0,
    flexGrow: 0,
  },
  img_terminos:{
    width: "6%",
    height: 24,
    marginLeft:"4%",
    borderRadius:16,
  },
  text_button_terminos:{
    width: "70%",
    height: 19,
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    marginLeft:"3%",
    marginBottom:"1%",
    color: "#4C4F63",
  },
  back_terminos:{
    width: "10%",
    height: 35.48,
    borderRadius:16,
  },
  container_button_privacidad:{
    width: "90%",
    height: 60,
    marginTop:3,
    backgroundColor: "#FFFFFF",
    borderBottomRightRadius:16,
    borderBottomLeftRadius:16,
  },
});

