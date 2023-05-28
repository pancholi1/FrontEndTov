import { StatusBar } from "expo-status-bar";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import { Image } from "react-native";
import { Avatar } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { auth } from "../../firebase-config";
import { useAppDispatch } from "../../navigation/redux/hooks";
import { setUser } from "../../navigation/redux/slices/user";
export default function ModalScreen() {
  const dispatch = useAppDispatch();
  return (
    <View style={styles.container}>
      <View style={styles.containerTerminos}>
        <LinearGradient
          style={styles.perfil_container}
          colors={["#3d3758", "#1e173e"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <Avatar.Image
            size={85}
            source={require("../../assets/images/pancho.jpeg")}
          />
          <View style={styles.containerText}>
            <Text style={styles.name}>Francisco Porta</Text>
            <Text style={styles.colegio}>Colegio Sacachispa</Text>
          </View>
        </LinearGradient>
        <LinearGradient
          style={styles.perfil_container}
          colors={["#3d3758", "#1e173e"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <View style={styles.img_3DContainer}>
            <Image
              style={styles.img_3D}
              source={require("../../assets/images/ProfileScreen/cerebro.png")}
            />
          </View>
          <View style={styles.containerText}>
            <Text style={styles.myAccount}>Mi cuenta</Text>
            <Text style={styles.myEmail} numberOfLines={2}>
              francisco.olivero1998@gmail.com
            </Text>
            <Text style={styles.myPassword}>*********</Text>
            {/* <Text style={styles.MyB}>Cambiar contraseña</Text> */}
          </View>
        </LinearGradient>
      </View>
      <LinearGradient
        colors={["#0995a6", "#112044"]}
        style={styles.botonContainer}
      >
        <Pressable
          onPress={() => {
            auth.signOut();
            dispatch(setUser(null));
          }}
          style={({ pressed }) => ({
            opacity: pressed ? 0.5 : 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 15,
            width: "100%",
          })}
        >
          <Text style={styles.botonText}>Deslogeate</Text>
        </Pressable>
        {/* <Pressable
          onPress={() => alert("")}
          style={({ pressed }) => ({
            opacity: pressed ? 0.5 : 1,
            borderRadius: 15,
          })}
        >
          <Text style={styles.botonText}> BLOG EXCLUSIVO</Text>
        </Pressable> */}
      </LinearGradient>

      <View style={styles.containerTerminos}>
        <Pressable
          onPress={() => alert("")}
          style={({ pressed }) => [
            styles.terminos_container,
            { opacity: pressed ? 0.5 : 1 },
          ]}
        >
          <LinearGradient
            style={styles.containerPrueba}
            colors={["#3d3758", "#1e173e"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <Text style={styles.textTerminos}> Terminos y condiciones </Text>
            <Image
              source={require("../../assets/images/ProfileScreen/Arrow.png")}
            />
          </LinearGradient>
        </Pressable>

        <Pressable
          onPress={() => alert("")}
          style={({ pressed }) => [
            styles.terminos_container,
            { opacity: pressed ? 0.5 : 1 },
          ]}
        >
          <LinearGradient
            style={styles.containerPrueba}
            colors={["#3d3758", "#1e173e"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <Text style={styles.textTerminos}> Privacidad</Text>
            <Image
              source={require("../../assets/images/ProfileScreen/Arrow.png")}
            />
          </LinearGradient>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#130C34",
    width: "100%",
    padding: 15,
    justifyContent: "space-around",
  },
  perfil_container: {
    flexDirection: "row",
    borderRadius: 15,
    width: "100%",
    padding: 20,
    marginTop: 21,
    borderColor: "#7B68A9",
    borderWidth: 0.7,
  },

  containerText: {
    marginLeft: 25,
  },
  name: {
    fontFamily: "Poppins_SemiBold",
    fontSize: 20,
    fontWeight: "700",
    color: "#06D6DD",
    marginTop: "2%",
  },
  colegio: {
    fontFamily: "Poppins_SemiBold",
    fontStyle: "normal",
    fontWeight: "600",
    color: "#DED3F4",
    fontSize: 14,
  },

  myAccount: {
    fontFamily: "Poppins_SemiBold",
    fontWeight: "600",
    color: "#DED3F4",
    fontSize: 20,
  },
  myEmail: {
    fontFamily: "Poppins_SemiBold",
    fontStyle: "normal",
    fontWeight: "600",
    color: "#DED3F4",
    fontSize: 12,
    width: "100%",
  },
  myPassword: {
    fontFamily: "Poppins_ExtraBold",
    fontStyle: "normal",
    fontWeight: "600",
    color: "#DED3F4",
    fontSize: 14,
    opacity: 0.3,
  },
  img_3DContainer: {
    width: "25%",
    height: 90,
    position: "relative",
  },
  img_3D: {
    position: "absolute",
    zIndex: 1,
    left: -60,
    top: -60,
  },
  botonContainer: {
    borderRadius: 15,
    margin: 60,
    width: "80%",
  },
  botonText: {
    padding: 18,
    fontSize: 20,
    color: "#DED3F4",
    fontFamily: "Poppins_ExtraBold",
  },

  containerTerminos: {
    width: "90%",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
  containerPrueba: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 15,
    padding: 18,
    marginTop: 17,
    alignItems: "center",
    borderColor: "#7B68A9",
    borderWidth: 0.7,
  },
  terminos_container: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
  textTerminos: {
    fontFamily: "Poppins_Regular",
    fontStyle: "normal",
    fontWeight: "500",
    color: "#DED3F4",
    fontSize: 15,
  },
});
