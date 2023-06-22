import { Image, Modal, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { PropsInput } from "../../screens/SingUpScreen/SingUpScreen";
import { useAppDispatch } from "../../navigation/redux/hooks";
import { UserState, setUser } from "../../navigation/redux/slices/user";

interface PropsNotModal {
  setModalVisible: (e: boolean) => void;
  modalVisible: boolean;
  input: PropsInput;
}
const CorrectLogin = ({
  modalVisible,
  setModalVisible,
  input,
}: PropsNotModal) => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const functionBeginLogin = () => {
    setModalVisible(!modalVisible);
    dispatch(
      setUser({
        email: input.email,
        name: input.name,
        apellido: input.apellido,
        school: input.school,
      } as UserState)
    );
  };
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
                  style={styles.imageCross}
                />
              </Pressable>
            </View>
            <View>
              <Image
                source={require("../../assets/images/Login/start.png")}
                style={{ transform: [{ rotate: "-3deg" }], padding: 70 }}
              />
            </View>
            <Text style={styles.modalTitle}>¡Creación de cuenta exitosa!</Text>
            <Text style={styles.modalSubTitle}>
              Ya es tiempo de que conozcas tu verdadera vocación.
            </Text>
            <Pressable
              style={styles.buttonAgain}
              onPress={() => functionBeginLogin()}
            >
              <Text style={styles.buttonTextAgain}>¡Comencemos!</Text>
            </Pressable>
            <Pressable
              style={styles.buttonRedirect}
              onPress={() => {
                setModalVisible(!modalVisible);
                return navigation.navigate("Root");
              }}
            >
              <Text style={styles.buttonTextRedirect}>Cerrar sesión</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CorrectLogin;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 2,
  },
  containerCross: {
    width: "100%",
    alignItems: "flex-end",
  },
  imageCross: { marginRight: 12 },

  img_card: {
    height: 130,
    width: 107,
  },
  modalView: {
    backgroundColor: "#ebeaee",
    borderRadius: 20,
    width: "85%",
    paddingBottom: 25,
    paddingTop: 15,
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
    marginTop: 10,
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
    marginTop: 10,
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

    width: 200,
    marginBottom: 10,
  },
  modalTitle: {
    marginTop: 10,
    width: "100%",
    textAlign: "center",
    fontFamily: "Poppins_SemiBold",
    fontStyle: "normal",
    color: "#282056",
    fontWeight: "600",
    fontSize: 15,
  },
});
