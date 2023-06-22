import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Image } from "react-native";
import { ActivityIndicator, Avatar } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { auth, database } from "../../firebase-config";
import { useAppDispatch, useAppSelector } from "../../navigation/redux/hooks";
import { UserState, setUser } from "../../navigation/redux/slices/user";
import * as DocumentPicker from "expo-document-picker";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { User } from "../../navigation/redux/store/store";
import { doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { Loading } from "../../components/Loading";
import { RootStackScreenProps } from "../../types";

export default function ModalScreen({
  navigation,
}: RootStackScreenProps<"ProfileScreen">) {
  const { user } = useAppSelector(User);
  const dispatch = useAppDispatch();
  // Create a root reference
  const storage = getStorage();
  const storageRef = ref(storage, `profile/${user?.key}`);
  const [loading, setLoading] = useState(false);
  const handleFilePick = async () => {
    try {
      const document = await DocumentPicker.getDocumentAsync();
      handleFileSelected(document);
    } catch (error) {
      console.error("Error al seleccionar el archivo", error);
    }
  };
  const handleFileSelected = async (
    document: DocumentPicker.DocumentResult
  ) => {
    setLoading(true);
    if (document.type === "success" && user?.key) {
      const { uri } = document;
      const response = await fetch(uri);
      const blob = await response.blob();
      await uploadBytes(storageRef, blob);
      const url = await getDownloadURL(storageRef);

      await updateDoc(doc(database, "people", user?.key), {
        urlImage: url,
      });
      dispatch(setUser({ ...user, urlImage: url } as UserState));
    }
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerTerminos}>
        <LinearGradient
          style={styles.perfil_container}
          colors={["#3d3758", "#1e173e"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          {loading ? (
            <Loading></Loading>
          ) : (
            <TouchableOpacity onPress={handleFilePick}>
              <Avatar.Image
                size={85}
                source={
                  user?.urlImage
                    ? { uri: user.urlImage }
                    : require("../../assets/images/ProfileScreen/addImg.png")
                }
              />
            </TouchableOpacity>
          )}

          <View style={styles.containerText}>
            <Text style={styles.name}>{user?.name + " " + user?.apellido}</Text>
            <Text style={styles.colegio}>Escuela {user?.school}</Text>
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
              {user?.email}
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
          onPress={() => navigation.navigate("Terminos")}
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
          onPress={() => navigation.navigate("PrivacidadScreen")}
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
