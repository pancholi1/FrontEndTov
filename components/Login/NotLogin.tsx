import { Image, Modal, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

interface PropsNotModal {
  setModalVisible: (e: boolean) => void;
  modalVisible: boolean;
}
const NotLogin = ({ modalVisible, setModalVisible }: PropsNotModal) => {
  const navigation = useNavigation();
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.containerCross}>
              <Pressable onPress={() => setModalVisible(!modalVisible)}>
                <Image
                  source={require("../../assets/images/Login/cross.png")}
                  style={{padding:9}}
                />
              </Pressable>
            </View>
            <View style={styles.containerImage}>
              <Image
                source={require("../../assets/images/Login/notLogin.png")}
                style={{ transform: [{ rotate: "-3deg" }], padding:70 }}
              />
            </View>
            <Text style={styles.modalTitle}>
              Es posible que no hayas ingresado los datos correctos
            </Text>
            <Text style={styles.modalSubTitle}>
              Revisá muy bien los campos y volvé a intentarlo
            </Text>
            <Pressable
              style={styles.buttonAgain}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.buttonTextAgain}>Volver a intentar</Text>
            </Pressable>
            <Pressable
              style={styles.buttonRedirect}
              onPress={() => {
                setModalVisible(!modalVisible);
                navigation.navigate("SingUp");
              }}
            >
              <Text style={styles.buttonTextRedirect}>Crear cuenta</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default NotLogin;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  containerCross: {
    width: 275,
    alignItems: "flex-end",
  },

  containerImage: {},
  img_card: {
    height: 130,
    width: 107,
  },
  modalView: {
    margin: 20,
    backgroundColor: "#ebeaee",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 20,
  },

  //   BOTONES //
  buttonAgain: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    elevation: 2,
    backgroundColor: "#282056",
    width: 211,
    height: 42,
    marginTop: 20,
  },
  buttonTextAgain: {
    textAlign: "center",
    fontFamily: "Poppins_SemiBold",
    fontStyle: "normal",
    color: "#DED3F4",
    fontWeight: "600",
    fontSize: 15,
    padding: 8,
  },
  buttonRedirect: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    borderRadius: 20,
    width: 183,
    height: 38,
    elevation: 2,
    backgroundColor: "#FFFFFF",
  },
  buttonTextRedirect: {
    textAlign: "center",
    fontFamily: "Poppins_SemiBold",
    fontStyle: "normal",
    color: "rgba(19, 12, 52, 0.6)",
    fontWeight: "600",
    fontSize: 11,
    padding: 8,
  },

  //   BOTONES //

  modalSubTitle: {
    textAlign: "center",
    fontFamily: "Poppins_SemiBold",
    fontStyle: "normal",
    color: "rgba(19, 12, 52, 0.6)",
    fontWeight: "600",
    fontSize: 11,
    marginTop: 20,
    width: 200,
    marginBottom: 10,
  },
  modalTitle: {
    marginTop: 10,
    width: 220,
    textAlign: "center",
    fontFamily: "Poppins_SemiBold",
    fontStyle: "normal",
    color: "#282056",
    fontWeight: "600",
    fontSize: 15,
  },
});
